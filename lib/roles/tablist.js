var A = require('../attrs');
var E = require('../events');
var S = require('../selectors');
var Tab = require('./tab');

var getAncestor = require('../get-ancestor');
var getSibling = require('../get-sibling');
var slice = Array.prototype.slice;

var setup = function(tablist) {
  tablist.setAttribute('role', 'tablist');
  addEventListeners(tablist);

  var selected = getSelectedTab(tablist);
  if (selected) {
    selectTab(tablist, selected);
  } else {
    selectTabByIndex(tablist, 0);
  }
};

var teardown = function(tablist) {
  removeEventListeners(tablist);
};

var getSelectedTab = function(tablist) {
  return tablist.querySelector(S.TAB + '[aria-expanded=true]');
};

var getTablist = function(el) {
  return el.matches(S.TABLIST)
    ? el
    : getAncestor(el, S.TABLIST);
};

var selectTab = function(tablist, tab) {
  var multiselect = tablist.getAttribute(A.MULTISELECTABLE) === 'true';
  var selected;
  getTabs(tablist).forEach(function(_tab, i) {
    var _selected = _tab === tab;
    if (_selected && selected && !multiselect) {
      _selected = false;
    } else if (_selected) {
      selected = tab;
    }
    Tab.toggle(_tab, _selected);
  });
  return selected;
};

var selectTabByPanelId = function(tablist, id) {
  var tab = getTabs(tablist).filter(function(tab) {
    return tab.getAttribute(A.CONTROLS) === id;
  })[0];
  if (!tab) {
    throw new Error('no panel with id: "' + id + '"');
  }
  return selectTab(tablist, tab);
};

var selectTabByIndex = function(tablist, index) {
  var tabs = getTabs(tablist);
  if (index < 0) {
    index = tabs.length + index;
  }
  var tab = tabs[index];
  if (!tab) {
    throw new Error('no tab at index ' + index);
  }
  return selectTab(tablist, tab);
};

var getTabs = function(tablist) {
  return slice.call(tablist.querySelectorAll(S.TAB));
};

var getPanels = function(tablist) {
  return slice.call(tablist.querySelectorAll(S.TABPANEL));
};

var getTabRelativeTo = function(tab, direction) {
  var tablist = getTablist(tab);
  var tabs = getTabs(tablist);
  var index = tabs.indexOf(tab) + direction;
  return tabs[index];
};

var selectPrevTab = E.delegate(S.TAB, function(event) {
  var tab = getTabRelativeTo(event.target, -1);
  if (tab) {
    selectTab(this, tab);
    tab.focus();
  } else {
    // console.warn('no previous tab:', event.target);
  }
});

var selectNextTab = E.delegate(S.TAB, function(event) {
  var tab = getTabRelativeTo(event.target, +1);
  if (tab) {
    selectTab(this, tab);
    tab.focus();
  } else {
    // console.warn('no next tab:', event.target);
  }
});

var selectOwnTab = E.delegate(S.TABPANEL, function(event) {
  var tab = selectTabByPanelId(event.target);
  if (tab) {
    tab.focus();
  }
});

var selectPrevPanel = E.delegate(S.TABPANEL, function(event) {
  var panel = getSibling(event.target, S.TABPANEL, -1);
  if (panel) {
    var tab = getTab(panel);
    selectTab(this, tab);
    tab.focus();
  }
});

var selectLastTab = E.delegate(S.TAB, function(event) {
  var tab = selectTabByIndex(this, -1);
  if (tab) {
    tab.focus();
  }
});

var selectFirstTab = E.delegate(S.TAB, function(event) {
  var tab = selectTabByIndex(this, 0);
  if (tab) {
    tab.focus();
  }
});

var onclick = E.delegate(S.TAB, function(event) {
  selectTab(this, event.target);
});

var onkeydown = E.keymap({
  'ArrowLeft':    selectPrevTab,
  'ArrowRight':   selectNextTab,
  'ArrowUp':      selectPrevTab,
  'ArrowDown':    selectNextTab,
  'Alt+ArrowUp':  selectOwnTab,
  'Control+PageUp':   E.all(
    selectPrevPanel,
    selectLastTab
  ),
  'Control+PageDown': E.all(
    selectOwnTab,
    selectFirstTab
  )
});

var addEventListeners = function(tablist) {
  tablist.addEventListener(E.CLICK, onclick);
  tablist.addEventListener(E.KEYDOWN, onkeydown);
};

var removeEventListeners = function(tablist) {
  tablist.removeEventListener(E.CLICK, onclick);
  tablist.removeEventListener(E.KEYDOWN, onkeydown);
};

module.exports.setup = setup;
module.exports.teardown = teardown;

module.exports.addEventListeners = addEventListeners;
module.exports.removeEventListeners = removeEventListeners;

module.exports.getPanels = getPanels;
module.exports.getTabs = getTabs;
module.exports.getTablist = getTablist;
module.exports.selectTab = selectTab;
module.exports.selectTabByIndex = selectTabByIndex;
module.exports.selectTabByPanelId = selectTabByPanelId;

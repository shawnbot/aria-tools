var A = require('../attrs');
var E = require('../events');
var S = require('../selectors');
var Tab = require('./tab');

var getAncestor = require('../get-ancestor');
var getSibling = require('../get-sibling');
var slice = Array.prototype.slice;

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

var selectPrevTab = function(event) {
  var tab = getSibling(event.target, S.TAB, -1);
  if (tab) {
    selectTab(this, tab);
  }
};

var selectNextTab = function(event) {
  var tab = getSibling(event.target, S.TAB, +1);
  if (tab) {
    selectTab(this, tab);
  }
};

var selectOwnTab = function(event) {
  var tab = selectTabByPanelId(event.target);
  if (tab) {
    tab.focus();
  }
};

var selectPrevPanel = function(event) {
  var panel = getSibling(event.target, S.TABPANEL, -1);
  if (panel) {
    var tab = getTab(panel);
    selectTab(this, tab);
    tab.focus();
  }
};

var selectLastTab = function(event) {
  var tab = selectTabByIndex(this, -1);
  if (tab) {
    tab.focus();
  }
};

var selectFirstTab = function(event) {
  var tab = selectTabByIndex(this, 0);
  if (tab) {
    tab.focus();
  }
};

var onclick = E.delegate(S.TAB, function(event) {
  selectTab(this, event.target);
});

var onkeydown = E.keymap({
  'ArrowLeft':        E.delegate(S.TAB, selectPrevTab),
  'ArrowRight':       E.delegate(S.TAB, selectNextTab),
  'ArrowUp':          E.delegate(S.TAB, selectPrevTab),
  'ArrowDown':        E.delegate(S.TAB, selectNextTab),
  'Control+ArrowUp':  E.delegate(S.TABPANEL, selectOwnTab),
  'Control+PageUp':   E.all(
    E.delegate(S.TABPANEL, selectPrevPanel),
    E.delegate(S.TAB, selectLastTab)
  ),
  'Control+PageDown': E.all(
    E.delegate(S.TABPANEL, selectOwnTab),
    E.delegate(S.TAB, selectFirstTab)
  )
});

var addEventListeners = function(tablist) {
  tablist.addEventListener('click', onclick);
  tablist.addEventListener('keydown', onkeydown);
};

var removeEventListeners = function(tablist) {
  tablist.removeEventListener('click', onclick);
  tablist.removeEventListener('keydown', onkeydown);
};

module.exports.getPanels = getPanels;
module.exports.getTabs = getTabs;
module.exports.getTablist = getTablist;
module.exports.selectTab = selectTab;
module.exports.selectTabByIndex = selectTabByIndex;
module.exports.selectTabByPanelId = selectTabByPanelId;
module.exports.addEventListeners = addEventListeners;
module.exports.removeEventListeners = removeEventListeners;

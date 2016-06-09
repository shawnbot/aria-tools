const A = require('../attrs');
const E = require('../events');
const S = require('../selectors');
const Tab = require('./tab');
const TRUE = 'true';
const ROLE = 'tablist';

const getAncestor = require('../get-ancestor');
const slice = Array.prototype.slice;

const setup = function(tablist) {
  tablist.setAttribute('role', ROLE);
  addEventListeners(tablist);

  if (isMultiselectable(tablist)) {
    getTabs(tablist).forEach(Tab.update);
  } else {
    var selected = getSelectedTab(tablist);
    if (selected) {
      selectTab(tablist, selected);
    } else {
      selectTabByIndex(tablist, 0);
    }
  }
};

const teardown = function(tablist) {
  removeEventListeners(tablist);
};

const getSelectedTab = function(tablist) {
  return tablist.querySelector(S.TAB + '[aria-expanded=true]');
};

const getTablist = function(el) {
  return el.matches(S.TABLIST)
    ? el
    : getAncestor(el, S.TABLIST);
};

const isMultiselectable = function(tablist) {
  return tablist.getAttribute(A.MULTISELECTABLE) === TRUE;
};

const setMultiselectable = function(tablist, value) {
  if (typeof value === 'string') {
    value = value === TRUE;
  } else {
    value = !!value;
  }
  return tablist.setAttribute(A.MULTISELECTABLE, value);
};

const selectTab = function(tablist, tab) {
  if (isMultiselectable(tablist) || Tab.isExpanded(tab)) {
    Tab.toggle(tab);
  } else {
    getTabs(tablist).forEach(function(_tab, i) {
      Tab.toggle(_tab, _tab === tab);
    });
  }
};

const selectTabByPanelId = function(tablist, id) {
  var tab = getTabs(tablist).filter(function(tab) {
    return tab.getAttribute(A.CONTROLS) === id;
  })[0];
  if (!tab) {
    throw new Error('no panel with id: "' + id + '"');
  }
  return selectTab(tablist, tab);
};

const getTabByIndex = function(tablist, index) {
  var tabs = getTabs(tablist);
  if (index < 0) {
    index = tabs.length + index;
  }
  return tabs[index];
};

const selectTabByIndex = function(tablist, index) {
  var tab = getTabByIndex(tablist, index);
  if (!tab) {
    throw new Error('no tab at index ' + index);
  }
  return selectTab(tablist, tab);
};

const getTabs = function(tablist) {
  return slice.call(tablist.querySelectorAll(S.TAB));
};

const getPanels = function(tablist) {
  return slice.call(tablist.querySelectorAll(S.TABPANEL));
};

const getTabRelativeTo = function(tab, direction) {
  var tablist = getTablist(tab);
  var tabs = getTabs(tablist);
  var index = tabs.indexOf(tab) + direction;
  return tabs[index];
};

const getPanelRelativeTo = function(panel, direction) {
  var tablist = getTablist(tab);
  var panels = getPanels(tablist);
  var index = panels.indexOf(panel) + direction;
  return panels[index];
};

const focusPrevTab = E.delegate(S.TAB, function(event) {
  var tab = getTabRelativeTo(event.target, -1);
  if (tab) {
    tab.focus();
  }
});

const focusNextTab = E.delegate(S.TAB, function(event) {
  var tab = getTabRelativeTo(event.target, +1);
  if (tab) {
    tab.focus();
  }
});

const focusOwnTab = E.delegate(S.TABPANEL, function(event) {
  var tab = selectTabByPanelId(event.target);
  if (tab) {
    tab.focus();
  }
});

const focusPrevPanel = E.delegate(S.TABPANEL, function(event) {
  var panel = getPanelRelativeTo(event.target, -1);
  if (panel) {
    var tab = Tab.getTab(panel);
    tab.focus();
  }
});

const focusFirstTab = E.delegate(S.TAB, function(event) {
  var tab = getTabByIndex(this, 0);
  if (tab) {
    tab.focus();
  }
});

const focusLastTab = E.delegate(S.TAB, function(event) {
  var tab = getTabByIndex(this, -1);
  if (tab) {
    tab.focus();
  }
});

const onclick = E.delegate(S.TAB, function(event) {
  selectTab(this, event.target);
});

const onkeydown = E.keymap({
  'ArrowLeft':    focusPrevTab,
  'ArrowRight':   focusNextTab,
  'ArrowUp':      focusPrevTab,
  'ArrowDown':    focusNextTab,
  'Home':         focusFirstTab,
  'End':          focusLastTab,
  'Alt+ArrowUp':  focusOwnTab,
  'Control+PageUp': E.all(
    focusPrevPanel,
    focusLastTab
  ),
  'Control+PageDown': E.all(
    focusOwnTab,
    focusFirstTab
  )
});

const addEventListeners = function(tablist) {
  tablist.addEventListener(E.CLICK, onclick);
  tablist.addEventListener(E.KEYDOWN, onkeydown);
};

const removeEventListeners = function(tablist) {
  tablist.removeEventListener(E.CLICK, onclick);
  tablist.removeEventListener(E.KEYDOWN, onkeydown);
};

module.exports.role = ROLE;
module.exports.setup = setup;
module.exports.teardown = teardown;

module.exports.addEventListeners = addEventListeners;
module.exports.removeEventListeners = removeEventListeners;

module.exports.isMultiselectable = isMultiselectable;
module.exports.setMultiselectable = setMultiselectable;

module.exports.getPanel = Tab.getTarget;
module.exports.getPanels = getPanels;

module.exports.getTab = Tab.getTab;
module.exports.getTabs = getTabs;
module.exports.getTabByIndex = getTabByIndex;

module.exports.getTablist = getTablist;

module.exports.selectTab = selectTab;
module.exports.selectTabByIndex = selectTabByIndex;
module.exports.selectTabByPanelId = selectTabByPanelId;

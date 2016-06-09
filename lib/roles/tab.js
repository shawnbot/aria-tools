const A = require('../attrs');
const E = require('../events');
const TRUE = 'true';
const ROLE = 'tab';

const UID_PREFIX = 'aria-tab-';
const uid = require('../uid');

const toggle = function(tab, expanded) {
  if (typeof expanded !== 'boolean') {
    expanded = !isExpanded(tab);
  }
  return setExpanded(tab, expanded);
};

const isExpanded = function(tab) {
  return tab.getAttribute(A.EXPANDED) === TRUE;
};

const setExpanded = function(tab, expanded) {
  expanded = !!expanded;
  tab.setAttribute(A.EXPANDED, expanded);
  update(tab, expanded);
  return expanded;
};

const update = function(tab, expanded) {
  if (typeof expanded !== 'boolean') {
    expanded = isExpanded(tab);
  }
  var target = getTarget(tab);
  target.setAttribute(A.EXPANDED, expanded);
  target.setAttribute(A.HIDDEN, !expanded);
  target.setAttribute(A.TABINDEX, expanded ? 0 : -1);
};

const getTab = function(panel) {
  return document.querySelector('[aria-controls="' + panel.id + '"]');
};

const getTarget = function(tab) {
  var id = tab.getAttribute(A.CONTROLS);
  return document.getElementById(id);
};

const onclick = E.targetAdapter(toggle);

const addEventListeners = function(tab) {
  tab.addEventListener(E.CLICK, onclick);
};

const removeEventListeners = function(tab) {
  tab.removeEventListener(E.CLICK, onclick);
};

const setup = function(tab) {
  tab.setAttribute('role', ROLE);
  update(tab);
  addEventListeners(tab);
  var target = getTarget(tab);
  if (!target.hasAttribute(A.LABELED_BY)) {
    if (!tab.id) {
      tab.id = uid(UID_PREFIX);
    }
    target.setAttribute(A.LABELED_BY, tab.id);
  }
};

const teardown = function(tab) {
  removeEventListeners(tab);
};

module.exports.role = ROLE;
module.exports.setup = setup;
module.exports.teardown = teardown;

module.exports.addEventListeners = addEventListeners;
module.exports.removeEventListeners = removeEventListeners;

module.exports.getTab = getTab;
module.exports.getTarget = getTarget;
module.exports.update = update;
module.exports.toggle = toggle;
module.exports.isExpanded = isExpanded;

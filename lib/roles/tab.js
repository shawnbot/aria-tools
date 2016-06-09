var A = require('../attrs');
var E = require('../events');
var TRUE = 'true';
var ROLE = 'tab';

var toggle = function(tab, expanded) {
  if (typeof expanded !== 'boolean') {
    expanded = !isExpanded(tab);
  }
  return setExpanded(tab, expanded);
};

var isExpanded = function(tab) {
  return tab.getAttribute(A.EXPANDED) === TRUE;
};

var setExpanded = function(tab, expanded) {
  expanded = !!expanded;
  tab.setAttribute(A.EXPANDED, expanded);
  update(tab, expanded);
  return expanded;
};

var update = function(tab, expanded) {
  if (typeof expanded !== 'boolean') {
    expanded = isExpanded(tab);
  }
  var target = getTarget(tab);
  target.setAttribute(A.EXPANDED, expanded);
  target.setAttribute(A.HIDDEN, !expanded);
  target.setAttribute(A.TABINDEX, expanded ? 0 : -1);
};

var getTab = function(panel) {
  var selector = '[aria-controls="' + panel.id + '"]';
  return document.querySelector(selector);
};

var getTarget = function(tab) {
  var id = tab.getAttribute(A.CONTROLS);
  return document.getElementById(id);
};

var onclick = E.targetAdapter(toggle);

var addEventListeners = function(tab) {
  tab.addEventListener(E.CLICK, onclick);
};

var removeEventListeners = function(tab) {
  tab.removeEventListener(E.CLICK, onclick);
};

var setup = function(tab) {
  tab.setAttribute('role', ROLE);
  update(tab);
  addEventListeners(tab);
};

var teardown = function(tab) {
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

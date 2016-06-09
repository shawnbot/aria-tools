var A = require('../attrs');
var Events = require('../events');
var TRUE = 'true';

var toggle = function(tab, expanded) {
  if (typeof expanded !== 'boolean') {
    expanded = tab.getAttribute(A.EXPANDED) !== TRUE;
  }
  return setExpanded(tab, expanded);
};

var setExpanded = function(tab, expanded) {
  expanded = !!expanded;
  tab.setAttribute(A.EXPANDED, expanded);
  update(tab);
  return expanded;
};

var update = function(tab) {
  var target = getTarget(tab);
  target.setAttribute(A.EXPANDED, !expanded);
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

var onclick = Events.delegate(
  TAB,
  Events.targetAdapter(toggle)
);

module.exports.role = 'tab';
module.exports.getTab = getTab;
module.exports.getTarget = getTarget;
module.exports.update = update;
module.exports.toggle = toggle;
module.exports.onclick = onclick;

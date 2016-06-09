var Tablist = require('../roles/tablist');
var S = require('../selectors');

var attached = function() {
  Tablist.addEventListeners(this);

  var selected = this.querySelector(S.TAB + '[aria-expanded=true]');
  if (selected) {
    Tablist.selectTab(selected);
  } else {
    Tablist.selectTabByIndex(0);
  }
};

var detached = function() {
  Tablist.removeEventListeners(this);
};

var prop = function(value) {
  return {value: value};
};

var Accordion = Object.create(window.HTMLElement.prototype, {

  attachedCallback: prop(attached),
  detachedCallback: prop(detached),

  selectTab: prop(function(tab) {
    return Tablist.selectTab(this, tab);
  }),

  selectTabByIndex: prop(function(index) {
    return Tablist.selectTabByIndex(this, index);
  }),

  selectTabByPanelId: prop(function(id) {
    return Tablist.selectTabByPanelId(this, id);
  }),

  tabs: {
    get: function() {
      return Tablist.getTabs(this);
    }
  },

  panels: {
    get: function() {
      return Tablist.getPanels(this);
    }
  }
});

Accordion.register = function(name) {
  return document.registerElement(name, Accordion);
};

module.exports = Accordion;

var Tablist = require('../roles/tablist');

var prop = function(value) {
  return {value: value};
};

var Accordion = {};

Accordion.prototype = Object.create(
  window.HTMLElement.prototype,
  {
    attachedCallback: prop(function() {
      Tablist.setup(this);
    }),

    detachedCallback: prop(function() {
      Tablist.teardown(this);
    }),

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
  }
);

Accordion.register = function(name) {
  return document.registerElement(name, {
    prototype: Accordion.prototype
  });
};

module.exports = Accordion;

var S = require('../selectors');
var Tablist = require('../roles/tablist');

var attached = function() {
  Tablist.addEventListeners(this);

  var selected = this.querySelector(S.TAB + '[aria-expanded=true]');
  if (selected) {
    Tablist.selectTab(this, selected);
  } else {
    Tablist.selectTabByIndex(this, 0);
  }
};

var detached = function() {
  Tablist.removeEventListeners(this);
};

var prop = function(value) {
  return {value: value};
};

var Accordion = {};

Accordion.prototype = Object.create(
  window.HTMLElement.prototype,
  {
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
  }
);

Accordion.register = function(name) {
  return document.registerElement(name, {
    prototype: Accordion.prototype
  });
};

module.exports = Accordion;

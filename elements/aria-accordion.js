const Tablist = require('../lib/roles/tablist');

const Accordion = document.registerElement('aria-accordion', {
  prototype: Object.create(
    window.HTMLElement.prototype,
    {
      attachedCallback: {value: function() {
        Tablist.setup(this);
      }},

      detachedCallback: {value: function() {
        Tablist.teardown(this);
      }},

      selectTab: {value: function(tab) {
        return Tablist.selectTab(this, tab);
      }},

      selectTabByIndex: {value: function(index) {
        return Tablist.selectTabByIndex(this, index);
      }},

      selectTabByPanelId: {value: function(id) {
        return Tablist.selectTabByPanelId(this, id);
      }},

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
  )
});

module.exports = Accordion;

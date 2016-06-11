const TAB = '[role=tab]';
const TABPANEL = '[role=tabpanel]';

/**
 * Returns a selector qualified with either an :nth-of-type(index) tacked on
 * at the end, or replaces the `%` character with the index if one is
 * present.
 *
 * @param {String} selector
 * @param {Number} index
 * @return {String} a CSS selector qualified with a positional index
 */
const getSelectorAt = function(selector, index) {
  return selector.indexOf('%') > -1
    ? selector.replace(/%/g, index)
    : selector + ':nth-of-type(' + index + ')';
};

/**
 * Executes a tab method on the optional CSS selector on the current page.
 *
 * @param {String} method   a method in the `ariaTools.roles.tab` namespace
 * @param {String} selector an optional CSS selector to target; defaults to
 *                          `[role=tab]`.
 */
const executeTabMethod = function(method, selector) {
  return browser.execute(function(method, selector) {
    var args = [].slice.call(arguments, 1);
    var tabs = document.querySelectorAll(selector);
    var fn = ariaTools.roles.tab[method];
    return [].map.call(tabs, function(tab) {
      args[0] = tab;
      fn.apply(null, args);
    });
  }, method, selector);
};

module.exports = {
  load: function() {
    return browser.url('/tab.html');
  },

  setup: function(selector) {
    executeTabMethod('setup', selector || TAB);
  },

  teardown: function(selector) {
    executeTabMethod('teardown', selector || TAB);
  },

  /**
   * A context is really just a subset of the TabPage API that's "scoped" to a
   * CSS selector prefix.
   *
   * @param {String}  root  the root CSS selector, e.g. '#button-roles'
   * @param {String?} tab   the optional tab selector; default '[role=tab]'
   * @param {String?} panel the optional
   */
  getContext: function(root, options) {
    var prefix = root + ' ';
    options = Object(options);

    var tabAt = prefix + (options.tabAt || TAB);
    var panelAt = prefix + (options.panelAt || TABPANEL);

    return {
      tabs: prefix + TAB,
      panels: prefix + TABPANEL,

      executeTabMethod: function(method, selector, value) {
        return executeTabMethod(method, prefix + selector, value);
      },

      getTabAt: function(index) {
        return getSelectorAt(tabAt, index);
      },

      getPanelAt: function(index) {
        return getSelectorAt(panelAt, index);
      }
    };
  },

  // the tab and panel CSS selectors
  tabs: TAB,
  panels: TABPANEL,

  // export the executeTabMethod function
  executeTabMethod: executeTabMethod,

  /**
   * @param {Number} index  get the tab at a positional index in the DOM,
   *                        relative to its own tablist (not the document)
   * @return {String} a CSS selector
   */
  getTabAt: function(index) {
    return getSelectorAt(TAB, index);
  },

  /**
   * @param {Number} index  get the tab panel at a positional index in the
   *                        DOM, relative to its parent (not the document)
   * @return {String} a CSS selector
   */
  getPanelAt: function(index) {
    return getSelectorAt(TABPANEL, index);
  }
};

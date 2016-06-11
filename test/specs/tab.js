const assert = require('assert');
const TabPage = require('../pageobjects/tab.page');

const TAB = '[role=tab]';
const TABPANEL = '[role=tabpanel]';
const EXPANDED = 'aria-expanded';
const HIDDEN = 'aria-hidden';
const TABINDEX = 'tabindex';

describe('roles.tab.setup()', function() {

  var contexts = [
    {root: '#li-roles'},
    {root: '#button-roles', tabAt: 'li:nth-child(%) > [role=tab]'},
    {root: '#dl', tabAt: '[role=tab]:nth-of-type(%)', panelAt: '[role=tabpanel]:nth-of-type(%)'}
  ];

  contexts.forEach(function(ctx) {

    describe('context: ' + ctx.root, function() {

      var context = TabPage.getContext(ctx.root, ctx);

      it('sets up tabs', function() {

        TabPage.load();

        // initial conditions
        assert.deepEqual(browser.getAttribute(context.tabs, EXPANDED),
                         ['true', null, null]);
        assert.deepEqual(browser.getAttribute(context.panels, HIDDEN),
                         [null, null, null]);
        assert.deepEqual(browser.getAttribute(context.panels, EXPANDED),
                         [null, null, null]);
        assert.deepEqual(browser.getAttribute(context.panels, TABINDEX),
                         [null, null, null]);

        TabPage.setup();

        // after setup
        assert.deepEqual(browser.getAttribute(context.tabs, EXPANDED),
                         ['true', 'false', 'false']);
        assert.deepEqual(browser.getAttribute(context.panels, HIDDEN),
                         ['false', 'true', 'true']);
        assert.deepEqual(browser.getAttribute(context.panels, EXPANDED),
                         ['true', 'false', 'false']);
        assert.deepEqual(browser.getAttribute(context.panels, TABINDEX),
                         ['0', '-1', '-1']);

      });

      it('toggles on click', function() {

        TabPage.load();
        TabPage.setup();

        var tab = context.getTabAt(2);
        browser.click(tab);

        assert.deepEqual(browser.getAttribute(context.tabs, EXPANDED),
                         ['true', 'true', 'false']);
        assert.deepEqual(browser.getAttribute(context.panels, HIDDEN),
                         ['false', 'false', 'true']);
        assert.deepEqual(browser.getAttribute(context.panels, EXPANDED),
                         ['true', 'true', 'false']);
        assert.deepEqual(browser.getAttribute(context.panels, TABINDEX),
                         ['0', '0', '-1']);

        browser.click(tab);

        assert.deepEqual(browser.getAttribute(context.tabs, EXPANDED),
                         ['true', 'false', 'false']);
        assert.deepEqual(browser.getAttribute(context.panels, HIDDEN),
                         ['false', 'true', 'true']);
        assert.deepEqual(browser.getAttribute(context.panels, EXPANDED),
                         ['true', 'false', 'false']);
        assert.deepEqual(browser.getAttribute(context.panels, TABINDEX),
                         ['0', '-1', '-1']);

      });

      it('can be torn down', function() {

        TabPage.load();

        var tab = context.getTabAt(1);
        var panel = context.getPanelAt(1);

        TabPage.setup();

        assert.deepEqual(browser.getAttribute(tab, EXPANDED), 'true');
        assert.deepEqual(browser.getAttribute(panel, HIDDEN), 'false');
        assert.deepEqual(browser.getAttribute(panel, EXPANDED), 'true');
        assert.deepEqual(browser.getAttribute(panel, TABINDEX), '0');

        TabPage.teardown();

        // three times should do it
        browser.click(tab);
        browser.click(tab);
        browser.click(tab);

        assert.deepEqual(browser.getAttribute(tab, EXPANDED), 'true');
        assert.deepEqual(browser.getAttribute(panel, HIDDEN), 'false');
        assert.deepEqual(browser.getAttribute(panel, EXPANDED), 'true');
        assert.deepEqual(browser.getAttribute(panel, TABINDEX), '0');

      });

    });

  }, this);


});

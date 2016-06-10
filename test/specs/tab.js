const assert = require('assert');

const TAB = '[role=tab]';
const TABPANEL = '[role=tabpanel]';
const EXPANDED = 'aria-expanded';
const HIDDEN = 'aria-hidden';
const TABINDEX = 'tabindex';

describe('roles.tab.setup()', function() {

  it('sets up tabs', function() {
    browser.url('/tab.html');

    // initial conditions
    assert.deepEqual(browser.getAttribute(TAB, EXPANDED),
                     ['true', null, null]);
    assert.deepEqual(browser.getAttribute(TABPANEL, HIDDEN),
                     [null, null, null]);
    assert.deepEqual(browser.getAttribute(TABPANEL, EXPANDED),
                     [null, null, null]);
    assert.deepEqual(browser.getAttribute(TABPANEL, TABINDEX),
                     [null, null, null]);

    browser.execute(function(selector) {
      [].forEach.call(
        document.querySelectorAll(selector),
        function(tab, i) {
          ariaTools.roles.tab.setup(tab);
          tab.setAttribute('data-index', i);
        }
      );
    }, TAB);

    // ensure that the script ran
    assert.deepEqual(browser.getAttribute(TAB, 'data-index'),
                     ['0', '1', '2']);

    // after setup
    assert.deepEqual(browser.getAttribute(TAB, EXPANDED),
                     ['true', 'false', 'false']);
    assert.deepEqual(browser.getAttribute(TABPANEL, HIDDEN),
                     ['false', 'true', 'true']);
    assert.deepEqual(browser.getAttribute(TABPANEL, EXPANDED),
                     ['true', 'false', 'false']);
    assert.deepEqual(browser.getAttribute(TABPANEL, TABINDEX),
                     ['0', '-1', '-1']);

  });

});

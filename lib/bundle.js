// polyfill document.registerElement()
require('document-register-element');
// polyfill KeyboardEvent.prototype.key
require('keyboardevent-key-polyfill').polyfill();

window.ariaTools = {
  getAncestor:  require('./get-ancestor'),
  getSibling:   require('./get-sibling'),

  attributes:   require('./attrs'),
  roles:        require('./roles'),
  selectors:    require('./selectors'),
  widgets:      require('./widgets')
};

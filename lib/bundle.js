// polyfill document.registerElement()
require('document-register-element');
// polyfill KeyboardEvent.prototype.key
require('keyboardevent-key-polyfill').polyfill();

window.ariaTools = {
  getAncestor:  require('./get-ancestor'),
  roles:        require('./roles'),
  widgets:      require('./widgets')
};

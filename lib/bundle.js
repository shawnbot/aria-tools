// polyfill KeyboardEvent.prototype.key
require('keyboardevent-key-polyfill').polyfill();

window.ariaTools = {
  getAncestor:  require('./get-ancestor'),
  roles:        require('./roles'),
  uid:          require('./uid')
};

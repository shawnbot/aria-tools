// polyfill KeyboardEvent.prototype.key
require('keyboardevent-key-polyfill').polyfill();

window.ariaTools = {
  events:       require('./events'),
  getAncestor:  require('./get-ancestor'),
  roles:        require('./roles'),
  uid:          require('./uid')
};

require('document-register-element');

window.ariaTools = {
  getAncestor:  require('./get-ancestor'),
  getSibling:   require('./get-sibling'),

  attributes:   require('./attrs'),
  roles:        require('./roles'),
  selectors:    require('./selectors'),
  widgets:      require('./widgets')
};

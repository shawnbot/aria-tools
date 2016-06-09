require('document-register-element');

module.exports = {
  attributes:   require('./attrs'),
  getAncestor:  require('./get-ancestor'),
  getSibling:   require('./get-sibling'),
  roles:        require('./roles'),
  selectors:    require('./selectors'),
  widgets:      require('./widgets')
};

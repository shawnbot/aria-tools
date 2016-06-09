const PREFIX = 'aria-';
var index = 0;

module.exports = function uid(prefix) {
  return (prefix || PREFIX) + (Date.now() + index++).toString(36);
};

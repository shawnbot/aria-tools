const PREFIX = 'aria-';
const BASE = 36;
var index = 0;

module.exports = function uid(prefix) {
  index += BASE;
  return (prefix || PREFIX) + (Date.now() + index).toString(BASE);
};

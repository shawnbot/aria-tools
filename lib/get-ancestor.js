module.exports = function getAncestor(el, selector) {
  while (el = el.parentNode) {
    if (el.matches(selector)) {
      return el;
    }
  }
};

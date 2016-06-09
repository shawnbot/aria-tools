module.exports = function getAncestor(el, selector) {
  while (el = el.parentNode) {
    if (el === document) {
      return;
    } else if (el.matches(selector)) {
      return el;
    }
  }
};

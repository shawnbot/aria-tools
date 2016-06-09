module.exports = function getSibling(el, selector, direction) {
  var prop = direction < 0 ? 'previousSibling' : 'nextSibling';
  while (el = el[prop]) {
    if (el && el.nodeType === 1 && el.matches(selector)) {
      return el;
    }
  }
};

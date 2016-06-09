export function delegate(type, selector, callback) {
  return function delegated(event) {
    if (event.target.matches(selector)) {
      return callback.apply(this, arguments);
    }
  };
};

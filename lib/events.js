var slice = Array.prototype.slice;

var delegate = function(selector, callback) {
  return function(event) {
    if (event.target.matches(selector)) {
      return callback.apply(this, arguments);
    } else {
      // console.warn('ignoring event:', event.type, 'not', selector);
    }
  };
};

var all = function() {
  var functions = slice.call(arguments);
  var len = functions.length;
  var i;
  return function(event) {
    for (i = 0; i < len; i++) {
      if (functions[i].call(this, event) === false) {
        break;
      }
    }
  };
};

var targetAdapter = function(fn) {
  return function(event) {
    return fn.call(this, event.target);
  };
};

var MOD_SEPARATOR = '+';
var MODIFIERS = [
  'Alt',
  'Control',
  'Meta',
  'Shift',
];
var OS = 'OS';

var keymap = function(map) {
  var respectModifiers = Object.keys(map).some(function(key) {
    return key.indexOf(MOD_SEPARATOR) > -1;
  });
  return function(event) {
    var key = event.key;
    if (key === OS || MODIFIERS.indexOf(key) > -1) {
      return;
    }
    if (respectModifiers) {
      MODIFIERS.forEach(function(modifier) {
        if (event.getModifierState(modifier)) {
          key = [modifier, key].join(MOD_SEPARATOR);
        }
      });
    }
    if (key in map) {
      return map[key].call(this, event);
    } else {
      // console.warn('ignoring key press:', key, event.key);
    }
  };
};

module.exports.all = all;
module.exports.delegate = delegate;
module.exports.keymap = keymap;
module.exports.targetAdapter = targetAdapter;

module.exports.CLICK = 'click';
module.exports.KEYDOWN = 'keydown';

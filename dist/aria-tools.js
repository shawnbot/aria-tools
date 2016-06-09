/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	window.ariaTools = {
	  getAncestor:  __webpack_require__(2),
	  getSibling:   __webpack_require__(3),

	  attributes:   __webpack_require__(4),
	  roles:        __webpack_require__(5),
	  selectors:    __webpack_require__(8),
	  widgets:      __webpack_require__(10)
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*! (C) WebReflection Mit Style License */
	(function(e,t,n,r){"use strict";function rt(e,t){for(var n=0,r=e.length;n<r;n++)vt(e[n],t)}function it(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],nt(r,b[ot(r)])}function st(e){return function(t){j(t)&&(vt(t,e),rt(t.querySelectorAll(w),e))}}function ot(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=S.call(y,t?v+t.toUpperCase():d+n);return t&&-1<r&&!ut(n,t)?-1:r}function ut(e,t){return-1<w.indexOf(e+'[is="'+t+'"]')}function at(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;Q&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[a]?null:e.prevValue,n===e[l]?null:e.newValue)}function ft(e){var t=st(e);return function(e){X.push(t,e.target)}}function lt(e){K&&(K=!1,e.currentTarget.removeEventListener(h,lt)),rt((e.target||t).querySelectorAll(w),e.detail===o?o:s),B&&pt()}function ct(e,t){var n=this;q.call(n,e,t),G.call(n,{target:n})}function ht(e,t){D(e,t),et?et.observe(e,z):(J&&(e.setAttribute=ct,e[i]=Z(e),e.addEventListener(p,G)),e.addEventListener(c,at)),e.createdCallback&&Q&&(e.created=!0,e.createdCallback(),e.created=!1)}function pt(){for(var e,t=0,n=F.length;t<n;t++)e=F[t],E.contains(e)||(n--,F.splice(t--,1),vt(e,o))}function dt(e){throw new Error("A "+e+" type is already registered")}function vt(e,t){var n,r=ot(e);-1<r&&(tt(e,b[r]),r=0,t===s&&!e[s]?(e[o]=!1,e[s]=!0,r=1,B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="attached",o="detached",u="extends",a="ADDITION",f="MODIFICATION",l="REMOVAL",c="DOMAttrModified",h="DOMContentLoaded",p="DOMSubtreeModified",d="<",v="=",m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,g=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],y=[],b=[],w="",E=t.documentElement,S=y.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=n.prototype,T=x.hasOwnProperty,N=x.isPrototypeOf,C=n.defineProperty,k=n.getOwnPropertyDescriptor,L=n.getOwnPropertyNames,A=n.getPrototypeOf,O=n.setPrototypeOf,M=!!n.__proto__,_=n.create||function mt(e){return e?(mt.prototype=e,new mt):this},D=O||(M?function(e,t){return e.__proto__=t,e}:L&&k?function(){function e(e,t){for(var n,r=L(t),i=0,s=r.length;i<s;i++)n=r[i],T.call(e,n)||C(e,n,k(t,n))}return function(t,n){do e(t,n);while((n=A(n))&&!N.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),P=e.MutationObserver||e.WebKitMutationObserver,H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?function(e){return e.nodeType===1}:function(e){return N.call(H,e)},F=B&&[],I=H.cloneNode,q=H.setAttribute,R=H.removeAttribute,U=t.createElement,z=P&&{attributes:!0,characterData:!0,attributeOldValue:!0},W=P||function(e){J=!1,E.removeEventListener(c,W)},X,V=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},$=!1,J=!0,K=!0,Q=!0,G,Y,Z,et,tt,nt;O||M?(tt=function(e,t){N.call(t,e)||ht(e,t)},nt=ht):(tt=function(e,t){e[i]||(e[i]=n(!0),ht(e,t))},nt=tt),B?(J=!1,function(){var e=k(H,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(c,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[l]=t.attrChange=2,R.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(c,{bubbles:!0});q.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,this.dispatchEvent(i)},s=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(c,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,t.dispatchEvent(s))};e.value=function(e,o,u){e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",s)),t.call(this,e,o,u)},C(H,"addEventListener",e)}()):P||(E.addEventListener(c,W),E.setAttribute(i,1),E.removeAttribute(i),J&&(G=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Z(t);for(s in r){if(!(s in n))return Y(0,t,s,n[s],r[s],a);if(r[s]!==n[s])return Y(1,t,s,n[s],r[s],f)}for(s in n)if(!(s in r))return Y(2,t,s,n[s],r[s],l)}},Y=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,at(o)},Z=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),$||($=!0,P?(et=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new P(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,Q&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=s.getAttribute(i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(st(s),st(o)),et.observe(t,{childList:!0,subtree:!0})):(X=[],V(function E(){while(X.length)X.shift().call(null,X.shift());V(E)}),t.addEventListener("DOMNodeInserted",ft(s)),t.addEventListener("DOMNodeRemoved",ft(o))),t.addEventListener(h,lt),t.addEventListener("readystatechange",lt),t.createElement=function(e,n){var r=U.apply(t,arguments),i=""+e,s=S.call(y,(n?v:d)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=ut(i.toUpperCase(),n))),Q=!t.createElement.innerHTMLHelper,o&&nt(r,b[s]),r},H.cloneNode=function(e){var t=I.call(this,!!e),n=ot(t);return-1<n&&nt(t,b[n]),e&&it(t.querySelectorAll(w)),t}),-2<S.call(y,v+c)+S.call(y,d+c)&&dt(n);if(!m.test(c)||-1<S.call(g,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},a=r||x,f=T.call(a,u),l=f?r[u].toUpperCase():c,c,p;return f&&-1<S.call(y,d+l)&&dt(l),p=y.push((f?v:d)+c)-1,w=w.concat(w.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=b[p]=T.call(a,"prototype")?a.prototype:_(H),rt(t.querySelectorAll(w),s),i}})(window,document,Object,"registerElement");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function getAncestor(el, selector) {
	  while (el = el.parentNode) {
	    if (el.matches(selector)) {
	      return el;
	    }
	  }
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function getSibling(el, selector, direction) {
	  var prop = direction < 0 ? 'previousSibling' : 'nextSibling';
	  while (el = el[prop]) {
	    if (el && el.nodeType === 1 && el.matches(selector)) {
	      return el;
	    }
	  }
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	
	// properties
	module.exports.CONTROLS = 'aria-controls';
	module.exports.TABINDEX = 'tabindex';

	// states
	module.exports.EXPANDED = 'aria-expanded';
	module.exports.SELECTED = 'aria-selected';
	module.exports.HIDDEN = 'aria-hidden';
	module.exports.MULTISELECTABLE = 'aria-multiselectable';


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  tab: __webpack_require__(6),
	  tablist: __webpack_require__(9)
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var A = __webpack_require__(4);
	var E = __webpack_require__(7);
	var S = __webpack_require__(8);
	var TRUE = 'true';

	var toggle = function(tab, expanded) {
	  if (typeof expanded !== 'boolean') {
	    expanded = tab.getAttribute(A.EXPANDED) !== TRUE;
	  }
	  return setExpanded(tab, expanded);
	};

	var setExpanded = function(tab, expanded) {
	  expanded = !!expanded;
	  tab.setAttribute(A.EXPANDED, expanded);
	  update(tab, expanded);
	  return expanded;
	};

	var update = function(tab) {
	  var expanded = tab.getAttribute(A.EXPANDED) === TRUE;
	  var target = getTarget(tab);
	  target.setAttribute(A.EXPANDED, expanded);
	  target.setAttribute(A.HIDDEN, !expanded);
	  target.setAttribute(A.TABINDEX, expanded ? 0 : -1);
	};

	var getTab = function(panel) {
	  var selector = '[aria-controls="' + panel.id + '"]';
	  return document.querySelector(selector);
	};

	var getTarget = function(tab) {
	  var id = tab.getAttribute(A.CONTROLS);
	  return document.getElementById(id);
	};

	var onclick = E.delegate(
	  S.TAB,
	  E.targetAdapter(toggle)
	);

	module.exports.role = 'tab';
	module.exports.getTab = getTab;
	module.exports.getTarget = getTarget;
	module.exports.update = update;
	module.exports.toggle = toggle;
	module.exports.onclick = onclick;


/***/ },
/* 7 */
/***/ function(module, exports) {

	var slice = Array.prototype.slice;

	var delegate = function(selector, callback) {
	  return function(event) {
	    if (event.target.matches(selector)) {
	      return callback.apply(this, arguments);
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

	var MODIFIERS = [
	  'Alt',
	  'Control',
	  'Meta',
	  'Shift',
	];

	var MOD_SEPARATOR = '+';

	var keymap = function(map) {
	  var respectModifiers = Object.keys(map).some(function(key) {
	    return key.indexOf('+') > -1;
	  });
	  return function(event) {
	    var key = event.key;
	    if (respectModifiers) {
	      MODIFIERS.forEach(function(modifier) {
	        if (event.getModifierState(modifier)) {
	          key = [modifier, key].join(MOD_SEPARATOR);
	        }
	      });
	    }
	    if (key in map) {
	      return map[key].call(this, event);
	    }
	  };
	};

	module.exports.all = all;
	module.exports.delegate = delegate;
	module.exports.keymap = keymap;
	module.exports.targetAdapter = targetAdapter;


/***/ },
/* 8 */
/***/ function(module, exports) {

	// tab-related roles
	module.exports.TAB = '[role=tab]';
	module.exports.TABLIST = '[role=tablist]';
	module.exports.TABPANEL = '[role=tabpanel]';


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var A = __webpack_require__(4);
	var E = __webpack_require__(7);
	var S = __webpack_require__(8);
	var Tab = __webpack_require__(6);

	var getAncestor = __webpack_require__(2);
	var getSibling = __webpack_require__(3);
	var slice = Array.prototype.slice;

	var getTablist = function(el) {
	  return el.matches(S.TABLIST)
	    ? el
	    : getAncestor(el, S.TABLIST);
	};

	var selectTab = function(tablist, tab) {
	  var multiselect = tablist.getAttribute(A.MULTISELECTABLE) === 'true';
	  var selected;
	  getTabs(tablist).forEach(function(_tab, i) {
	    var _selected = _tab === tab;
	    if (_selected && selected && !multiselect) {
	      _selected = false;
	    } else if (_selected) {
	      selected = tab;
	    }
	    Tab.toggle(_tab, _selected);
	  });
	  return selected;
	};

	var selectTabByPanelId = function(tablist, id) {
	  var tab = getTabs(tablist).filter(function(tab) {
	    return tab.getAttribute(A.CONTROLS) === id;
	  })[0];
	  if (!tab) {
	    throw new Error('no panel with id: "' + id + '"');
	  }
	  return selectTab(tablist, tab);
	};

	var selectTabByIndex = function(tablist, index) {
	  var tabs = getTabs(tablist);
	  if (index < 0) {
	    index = tabs.length + index;
	  }
	  var tab = tabs[index];
	  if (!tab) {
	    throw new Error('no tab at index ' + index);
	  }
	  return selectTab(tablist, tab);
	};

	var getTabs = function(tablist) {
	  return slice.call(tablist.querySelectorAll(S.TAB));
	};

	var getPanels = function(tablist) {
	  return slice.call(tablist.querySelectorAll(S.TABPANEL));
	};

	var selectPrevTab = function(event) {
	  var tab = getSibling(event.target, S.TAB, -1);
	  if (tab) {
	    selectTab(this, tab);
	  }
	};

	var selectNextTab = function(event) {
	  var tab = getSibling(event.target, S.TAB, +1);
	  if (tab) {
	    selectTab(this, tab);
	  }
	};

	var selectOwnTab = function(event) {
	  var tab = selectTabByPanelId(event.target);
	  if (tab) {
	    tab.focus();
	  }
	};

	var selectPrevPanel = function(event) {
	  var panel = getSibling(event.target, S.TABPANEL, -1);
	  if (panel) {
	    var tab = getTab(panel);
	    selectTab(this, tab);
	    tab.focus();
	  }
	};

	var selectLastTab = function(event) {
	  var tab = selectTabByIndex(this, -1);
	  if (tab) {
	    tab.focus();
	  }
	};

	var selectFirstTab = function(event) {
	  var tab = selectTabByIndex(this, 0);
	  if (tab) {
	    tab.focus();
	  }
	};

	var onclick = E.delegate(S.TAB, function(event) {
	  selectTab(this, event.target);
	});

	var onkeydown = E.keymap({
	  'ArrowLeft':        E.delegate(S.TAB, selectPrevTab),
	  'ArrowRight':       E.delegate(S.TAB, selectNextTab),
	  'ArrowUp':          E.delegate(S.TAB, selectPrevTab),
	  'ArrowDown':        E.delegate(S.TAB, selectNextTab),
	  'Control+ArrowUp':  E.delegate(S.TABPANEL, selectOwnTab),
	  'Control+PageUp':   E.all(
	    E.delegate(S.TABPANEL, selectPrevPanel),
	    E.delegate(S.TAB, selectLastTab)
	  ),
	  'Control+PageDown': E.all(
	    E.delegate(S.TABPANEL, selectOwnTab),
	    E.delegate(S.TAB, selectFirstTab)
	  )
	});

	var addEventListeners = function(tablist) {
	  tablist.addEventListener('click', onclick);
	  tablist.addEventListener('keydown', onkeydown);
	};

	var removeEventListeners = function(tablist) {
	  tablist.removeEventListener('click', onclick);
	  tablist.removeEventListener('keydown', onkeydown);
	};

	module.exports.getPanels = getPanels;
	module.exports.getTabs = getTabs;
	module.exports.getTablist = getTablist;
	module.exports.selectTab = selectTab;
	module.exports.selectTabByIndex = selectTabByIndex;
	module.exports.selectTabByPanelId = selectTabByPanelId;
	module.exports.addEventListeners = addEventListeners;
	module.exports.removeEventListeners = removeEventListeners;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  accordion: __webpack_require__(11)
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var S = __webpack_require__(8);
	var Tablist = __webpack_require__(9);

	var attached = function() {
	  Tablist.addEventListeners(this);

	  var selected = this.querySelector(S.TAB + '[aria-expanded=true]');
	  if (selected) {
	    Tablist.selectTab(this, selected);
	  } else {
	    Tablist.selectTabByIndex(this, 0);
	  }
	};

	var detached = function() {
	  Tablist.removeEventListeners(this);
	};

	var prop = function(value) {
	  return {value: value};
	};

	var Accordion = {};

	Accordion.prototype = Object.create(
	  window.HTMLElement.prototype,
	  {
	    attachedCallback: prop(attached),
	    detachedCallback: prop(detached),

	    selectTab: prop(function(tab) {
	      return Tablist.selectTab(this, tab);
	    }),

	    selectTabByIndex: prop(function(index) {
	      return Tablist.selectTabByIndex(this, index);
	    }),

	    selectTabByPanelId: prop(function(id) {
	      return Tablist.selectTabByPanelId(this, id);
	    }),

	    tabs: {
	      get: function() {
	        return Tablist.getTabs(this);
	      }
	    },

	    panels: {
	      get: function() {
	        return Tablist.getPanels(this);
	      }
	    }
	  }
	);

	Accordion.register = function(name) {
	  return document.registerElement(name, {
	    prototype: Accordion.prototype
	  });
	};

	module.exports = Accordion;


/***/ }
/******/ ]);
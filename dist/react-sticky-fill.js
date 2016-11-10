(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactStickyFill"] = factory(require("react"));
	else
		root["ReactStickyFill"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _componentsReactStickyfill = __webpack_require__(1);
	
	var _componentsReactStickyfill2 = _interopRequireDefault(_componentsReactStickyfill);

	exports['default'] = _componentsReactStickyfill2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stickyfill = __webpack_require__(3);
	
	var _stickyfill2 = _interopRequireDefault(_stickyfill);
	
	var stickyfill = (0, _stickyfill2['default'])();
	
	var ReactStickyfill = (function (_React$PureComponent) {
	  _inherits(ReactStickyfill, _React$PureComponent);
	
	  function ReactStickyfill() {
	    _classCallCheck(this, ReactStickyfill);
	
	    _get(Object.getPrototypeOf(ReactStickyfill.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ReactStickyfill, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      stickyfill.add(this.refs.sticky);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      stickyfill.remove(this.refs.sticky);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('div', _extends({}, this.props, {
	        ref: 'sticky',
	        style: _extends({
	          position: '-webkit-sticky',
	          top: 0,
	          zIndex: 1
	        }, this.props.style)
	      }));
	    }
	  }]);
	
	  return ReactStickyfill;
	})(_react2['default'].PureComponent);
	
	ReactStickyfill.displayName = 'ReactStickyfill';
	
	ReactStickyfill.propTypes = {
	  children: _react2['default'].PropTypes.element,
	  className: _react2['default'].PropTypes.string
	};
	
	exports['default'] = ReactStickyfill;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*!
	 * Stickyfill -- `position: sticky` polyfill
	 * v. 1.1.1 | https://github.com/wilddeer/stickyfill
	 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
	 *
	 * MIT License
	 */
	
	module.exports = (function(doc, win) {
	    if (!doc) {
	        doc = document;
	    }
	
	    if (!win) {
	        win = window;
	    }
	    
	    var watchArray = [],
	        scroll,
	        initialized = false,
	        html = doc.documentElement,
	        noop = function() {},
	        checkTimer,
	
	        //visibility API strings
	        hiddenPropertyName = 'hidden',
	        visibilityChangeEventName = 'visibilitychange';
	
	    //fallback to prefixed names in old webkit browsers
	    if (doc.webkitHidden !== undefined) {
	        hiddenPropertyName = 'webkitHidden';
	        visibilityChangeEventName = 'webkitvisibilitychange';
	    }
	
	    //test getComputedStyle
	    if (!win.getComputedStyle) {
	        seppuku();
	    }
	
	    //test for native support
	    var prefixes = ['', '-webkit-', '-moz-', '-ms-'],
	        block = document.createElement('div');
	
	    for (var i = prefixes.length - 1; i >= 0; i--) {
	        try {
	            block.style.position = prefixes[i] + 'sticky';
	        }
	        catch(e) {}
	        if (block.style.position != '') {
	            seppuku();
	        }
	    }
	
	    updateScrollPos();
	
	    //commit seppuku!
	    function seppuku() {
	        init = add = rebuild = pause = stop = kill = noop;
	    }
	
	    function mergeObjects(targetObj, sourceObject) {
	        for (key in sourceObject) {
	            if (sourceObject.hasOwnProperty(key)) {
	                targetObj[key] = sourceObject[key];
	            }
	        }
	    }
	
	    function parseNumeric(val) {
	        return parseFloat(val) || 0;
	    }
	
	    function updateScrollPos() {
	        scroll = {
	            top: win.pageYOffset,
	            left: win.pageXOffset
	        };
	    }
	
	    function onScroll() {
	        if (win.pageXOffset != scroll.left) {
	            updateScrollPos();
	            rebuild();
	            return;
	        }
	        
	        if (win.pageYOffset != scroll.top) {
	            updateScrollPos();
	            recalcAllPos();
	        }
	    }
	
	    //fixes flickering
	    function onWheel(event) {
	        setTimeout(function() {
	            if (win.pageYOffset != scroll.top) {
	                scroll.top = win.pageYOffset;
	                recalcAllPos();
	            }
	        }, 0);
	    }
	
	    function recalcAllPos() {
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            recalcElementPos(watchArray[i]);
	        }
	    }
	
	    function recalcElementPos(el) {
	        if (!el.inited) return;
	
	        var currentMode = (scroll.top <= el.limit.start? 0: scroll.top >= el.limit.end? 2: 1);
	
	        if (el.mode != currentMode) {
	            switchElementMode(el, currentMode);
	        }
	    }
	
	    //checks whether stickies start or stop positions have changed
	    function fastCheck() {
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            if (!watchArray[i].inited) continue;
	
	            var deltaTop = Math.abs(getDocOffsetTop(watchArray[i].clone) - watchArray[i].docOffsetTop),
	                deltaHeight = Math.abs(watchArray[i].parent.node.offsetHeight - watchArray[i].parent.height);
	
	            if (deltaTop >= 2 || deltaHeight >= 2) return false;
	        }
	        return true;
	    }
	
	    function initElement(el) {
	        if (isNaN(parseFloat(el.computed.top)) || el.isCell) return;
	
	        el.inited = true;
	
	        if (!el.clone) clone(el);
	        if (el.parent.computed.position != 'absolute' &&
	            el.parent.computed.position != 'relative') el.parent.node.style.position = 'relative';
	
	        recalcElementPos(el);
	
	        el.parent.height = el.parent.node.offsetHeight;
	        el.docOffsetTop = getDocOffsetTop(el.clone);
	    }
	
	    function deinitElement(el) {
	        var deinitParent = true;
	
	        el.clone && killClone(el);
	        mergeObjects(el.node.style, el.css);
	
	        //check whether element's parent is used by other stickies
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            if (watchArray[i].node !== el.node && watchArray[i].parent.node === el.parent.node) {
	                deinitParent = false;
	                break;
	            }
	        };
	
	        if (deinitParent) el.parent.node.style.position = el.parent.css.position;
	        el.mode = -1;
	    }
	
	    function initAll() {
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            initElement(watchArray[i]);
	        }
	    }
	
	    function deinitAll() {
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            deinitElement(watchArray[i]);
	        }
	    }
	
	    function switchElementMode(el, mode) {
	        var nodeStyle = el.node.style;
	
	        switch (mode) {
	            case 0:
	                nodeStyle.position = 'absolute';
	                nodeStyle.left = el.offset.left + 'px';
	                nodeStyle.right = el.offset.right + 'px';
	                nodeStyle.top = el.offset.top + 'px';
	                nodeStyle.bottom = 'auto';
	                nodeStyle.width = 'auto';
	                nodeStyle.marginLeft = 0;
	                nodeStyle.marginRight = 0;
	                nodeStyle.marginTop = 0;
	                break;
	
	            case 1:
	                nodeStyle.position = 'fixed';
	                nodeStyle.left = el.box.left + 'px';
	                nodeStyle.right = el.box.right + 'px';
	                nodeStyle.top = el.css.top;
	                nodeStyle.bottom = 'auto';
	                nodeStyle.width = 'auto';
	                nodeStyle.marginLeft = 0;
	                nodeStyle.marginRight = 0;
	                nodeStyle.marginTop = 0;
	                break;
	
	            case 2:
	                nodeStyle.position = 'absolute';
	                nodeStyle.left = el.offset.left + 'px';
	                nodeStyle.right = el.offset.right + 'px';
	                nodeStyle.top = 'auto';
	                nodeStyle.bottom = 0;
	                nodeStyle.width = 'auto';
	                nodeStyle.marginLeft = 0;
	                nodeStyle.marginRight = 0;
	                break;
	        }
	
	        el.mode = mode;
	    }
	
	    function clone(el) {
	        el.clone = document.createElement('div');
	
	        var refElement = el.node.nextSibling || el.node,
	            cloneStyle = el.clone.style;
	
	        cloneStyle.height = el.height + 'px';
	        cloneStyle.width = el.width + 'px';
	        cloneStyle.marginTop = el.computed.marginTop;
	        cloneStyle.marginBottom = el.computed.marginBottom;
	        cloneStyle.marginLeft = el.computed.marginLeft;
	        cloneStyle.marginRight = el.computed.marginRight;
	        cloneStyle.padding = cloneStyle.border = cloneStyle.borderSpacing = 0;
	        cloneStyle.fontSize = '1em';
	        cloneStyle.position = 'static';
	        cloneStyle.cssFloat = el.computed.cssFloat;
	
	        el.node.parentNode.insertBefore(el.clone, refElement);
	    }
	
	    function killClone(el) {
	        el.clone.parentNode.removeChild(el.clone);
	        el.clone = undefined;
	    }
	
	    function getElementParams(node) {
	        var computedStyle = getComputedStyle(node),
	            parentNode = node.parentNode,
	            parentComputedStyle = getComputedStyle(parentNode),
	            cachedPosition = node.style.position;
	
	        node.style.position = 'relative';
	
	        var computed = {
	                top: computedStyle.top,
	                marginTop: computedStyle.marginTop,
	                marginBottom: computedStyle.marginBottom,
	                marginLeft: computedStyle.marginLeft,
	                marginRight: computedStyle.marginRight,
	                cssFloat: computedStyle.cssFloat
	            },
	            numeric = {
	                top: parseNumeric(computedStyle.top),
	                marginBottom: parseNumeric(computedStyle.marginBottom),
	                paddingLeft: parseNumeric(computedStyle.paddingLeft),
	                paddingRight: parseNumeric(computedStyle.paddingRight),
	                borderLeftWidth: parseNumeric(computedStyle.borderLeftWidth),
	                borderRightWidth: parseNumeric(computedStyle.borderRightWidth)
	            };
	
	        node.style.position = cachedPosition;
	
	        var css = {
	                position: node.style.position,
	                top: node.style.top,
	                bottom: node.style.bottom,
	                left: node.style.left,
	                right: node.style.right,
	                width: node.style.width,
	                marginTop: node.style.marginTop,
	                marginLeft: node.style.marginLeft,
	                marginRight: node.style.marginRight
	            },
	            nodeOffset = getElementOffset(node),
	            parentOffset = getElementOffset(parentNode),
	            
	            parent = {
	                node: parentNode,
	                css: {
	                    position: parentNode.style.position
	                },
	                computed: {
	                    position: parentComputedStyle.position
	                },
	                numeric: {
	                    borderLeftWidth: parseNumeric(parentComputedStyle.borderLeftWidth),
	                    borderRightWidth: parseNumeric(parentComputedStyle.borderRightWidth),
	                    borderTopWidth: parseNumeric(parentComputedStyle.borderTopWidth),
	                    borderBottomWidth: parseNumeric(parentComputedStyle.borderBottomWidth)
	                }
	            },
	
	            el = {
	                node: node,
	                box: {
	                    left: nodeOffset.win.left,
	                    right: html.clientWidth - nodeOffset.win.right
	                },
	                offset: {
	                    top: nodeOffset.win.top - parentOffset.win.top - parent.numeric.borderTopWidth,
	                    left: nodeOffset.win.left - parentOffset.win.left - parent.numeric.borderLeftWidth,
	                    right: -nodeOffset.win.right + parentOffset.win.right - parent.numeric.borderRightWidth
	                },
	                css: css,
	                isCell: computedStyle.display == 'table-cell',
	                computed: computed,
	                numeric: numeric,
	                width: nodeOffset.win.right - nodeOffset.win.left,
	                height: nodeOffset.win.bottom - nodeOffset.win.top,
	                mode: -1,
	                inited: false,
	                parent: parent,
	                limit: {
	                    start: nodeOffset.doc.top - numeric.top,
	                    end: parentOffset.doc.top + parentNode.offsetHeight - parent.numeric.borderBottomWidth -
	                        node.offsetHeight - numeric.top - numeric.marginBottom
	                }
	            };
	
	        return el;
	    }
	
	    function getDocOffsetTop(node) {
	        var docOffsetTop = 0;
	
	        while (node) {
	            docOffsetTop += node.offsetTop;
	            node = node.offsetParent;
	        }
	
	        return docOffsetTop;
	    }
	
	    function getElementOffset(node) {
	        var box = node.getBoundingClientRect();
	
	            return {
	                doc: {
	                    top: box.top + win.pageYOffset,
	                    left: box.left + win.pageXOffset
	                },
	                win: box
	            };
	    }
	
	    function startFastCheckTimer() {
	        checkTimer = setInterval(function() {
	            !fastCheck() && rebuild();
	        }, 500);
	    }
	
	    function stopFastCheckTimer() {
	        clearInterval(checkTimer);
	    }
	
	    function handlePageVisibilityChange() {
	        if (!initialized) return;
	
	        if (document[hiddenPropertyName]) {
	            stopFastCheckTimer();
	        }
	        else {
	            startFastCheckTimer();
	        }
	    }
	
	    function init() {
	        if (initialized) return;
	
	        updateScrollPos();
	        initAll();
	
	        win.addEventListener('scroll', onScroll);
	        win.addEventListener('wheel', onWheel);
	
	        //watch for width changes
	        win.addEventListener('resize', rebuild);
	        win.addEventListener('orientationchange', rebuild);
	
	        //watch for page visibility
	        doc.addEventListener(visibilityChangeEventName, handlePageVisibilityChange);
	
	        startFastCheckTimer();
	
	        initialized = true;
	    }
	
	    function rebuild() {
	        if (!initialized) return;
	
	        deinitAll();
	        
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            watchArray[i] = getElementParams(watchArray[i].node);
	        }
	        
	        initAll();
	    }
	
	    function pause() {
	        win.removeEventListener('scroll', onScroll);
	        win.removeEventListener('wheel', onWheel);
	        win.removeEventListener('resize', rebuild);
	        win.removeEventListener('orientationchange', rebuild);
	        doc.removeEventListener(visibilityChangeEventName, handlePageVisibilityChange);
	
	        stopFastCheckTimer();
	
	        initialized = false;
	    }
	
	    function stop() {
	        pause();
	        deinitAll(); 
	    }
	
	    function kill() {
	        stop();
	
	        //empty the array without loosing the references,
	        //the most performant method according to http://jsperf.com/empty-javascript-array
	        while (watchArray.length) {
	            watchArray.pop();
	        }
	    }
	
	    function add(node) {
	        //check if Stickyfill is already applied to the node
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            if (watchArray[i].node === node) return;
	        };
	
	        var el = getElementParams(node);
	
	        watchArray.push(el);
	
	        if (!initialized) {
	            init();
	        }
	        else {
	            initElement(el);
	        }
	    }
	
	    function remove(node) {
	        for (var i = watchArray.length - 1; i >= 0; i--) {
	            if (watchArray[i].node === node) {
	                deinitElement(watchArray[i]);
	                watchArray.splice(i, 1);
	            }
	        };
	    }
	
	    //expose Stickyfill
	    return {
	        stickies: watchArray,
	        add: add,
	        remove: remove,
	        init: init,
	        rebuild: rebuild,
	        pause: pause,
	        stop: stop,
	        kill: kill
	    };
	})

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-sticky-fill.js.map
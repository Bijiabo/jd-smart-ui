/*! This file is created by Bijiabo and SecretCastle */
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StyleManager = __webpack_require__(17);

var _StyleManager2 = _interopRequireDefault(_StyleManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = __webpack_require__(1);
var jqueryFinger = __webpack_require__(20);

var UI = function () {
    function UI(options) {
        _classCallCheck(this, UI);

        this.options = options;
        this._unclickMap = [];
        this._visibility = true;
        this._enabled = true;
        this.create();
        this.initEventFn();
    }

    // 初始化方法


    _createClass(UI, [{
        key: 'create',
        value: function create() {}

        // 监听交互方法

    }, {
        key: 'initEventFn',
        value: function initEventFn() {}
        //显示

    }, {
        key: 'show',
        value: function show() {
            $(this.options.hook).show();
            this._visibility = true;
        }
    }, {
        key: 'hide',

        //隐藏
        value: function hide() {
            $(this.options.hook).hide();
            this._visibility = false;
        }
    }, {
        key: 'enable',

        //设置可用
        value: function enable() {
            this._enabled = true;
        }
    }, {
        key: 'disabled',

        //设置不可用
        value: function disabled() {
            this._enabled = false;
        }
    }, {
        key: 'visibility',

        //可见性
        get: function get() {
            return this._visibility;
        }
    }, {
        key: 'isEnabled',

        //是否可用
        get: function get() {
            return this._enabled;
        }
    }, {
        key: 'isDisabled',

        //是否不可用
        get: function get() {
            return !this._enabled;
        }
    }, {
        key: 'dom',
        get: function get() {
            return $(this.options.hook);
        }
    }, {
        key: 'getself',
        get: function get() {
            return this;
        }
    }, {
        key: 'value',
        get: function get() {
            return this._value;
        },
        set: function set(val) {
            this._value = val;
        }
    }, {
        key: 'el',
        get: function get() {
            return $(this.options.hook);
        }

        // 检测是否有对应的组件

    }], [{
        key: 'hasComponent',
        value: function hasComponent(name) {
            if (global.__JDUICache === undefined || global.__JDUICache.components === undefined) {
                return false;
            }

            var hasTargetComponent = !!global.__JDUICache.components[name];

            return hasTargetComponent;
        }
        // 注册组件方法

    }, {
        key: 'registerComponent',
        value: function registerComponent(componentName, componentClass) {
            var result = {
                success: false,
                error: 'unknow'
            };

            if (this.hasComponent(componentName)) {
                result.success = false;
                result.error = 'the component \'' + componentName + '\' has been registerted before';
                return result;
            }

            if (global.JDUI) {
                global.JDUI.instance[componentName] = componentClass;
            }
        }
    }]);

    return UI;
}();

var JDUI = {
    findComponent: UI.findComponent,
    hasComponent: UI.hasComponent,
    registerComponent: UI.registerComponent,
    instance: {}, // new JDUI.instance.componentName
    _themeColor: '#FF8650',
    style: _StyleManager2.default,
    class: UI
};
global.JDUI = JDUI;

exports.default = UI;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DateScroll = __webpack_require__(9);

var _DateScroll2 = _interopRequireDefault(_DateScroll);

var _DateScroll_Slide = __webpack_require__(10);

var _DateScroll_Slide2 = _interopRequireDefault(_DateScroll_Slide);

var _GridItem = __webpack_require__(11);

var _GridItem2 = _interopRequireDefault(_GridItem);

var _ListItem = __webpack_require__(12);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _MultiScroll = __webpack_require__(13);

var _MultiScroll2 = _interopRequireDefault(_MultiScroll);

var _SwiperSlide = __webpack_require__(14);

var _SwiperSlide2 = _interopRequireDefault(_SwiperSlide);

var _SwitchCell = __webpack_require__(15);

var _SwitchCell2 = _interopRequireDefault(_SwitchCell);

var _Toast = __webpack_require__(16);

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 此文件为自动生成，不需要手动修改@@。

exports.default = { DateScroll: _DateScroll2.default, DateScroll_Slide: _DateScroll_Slide2.default, GridItem: _GridItem2.default, ListItem: _ListItem2.default, MultiScroll: _MultiScroll2.default, SwiperSlide: _SwiperSlide2.default, SwitchCell: _SwitchCell2.default, Toast: _Toast2.default };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by huchunbo on 2017/2/23.
 */
var JDUICache = {
    components: {}

};

/*
JDUICache.components = {
    componentName: componentClass
};
*/
exports.default = JDUICache;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js??ref--1-1!./../../node_modules/sass-loader/lib/loader.js??ref--1-2!./DateSelector.scss", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js??ref--1-1!./../../node_modules/sass-loader/lib/loader.js??ref--1-2!./DateSelector.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js??ref--1-1!./../../node_modules/sass-loader/lib/loader.js??ref--1-2!./style.scss", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js??ref--1-1!./../../node_modules/sass-loader/lib/loader.js??ref--1-2!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UI = __webpack_require__(0);

var _UI2 = _interopRequireDefault(_UI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = __webpack_require__(1);

// function $class(name) {
//     return document.getElementsByClassName(name);
// }

// function loop(begin, length, fuc) {
//     for (var i = begin; i < length; i++) {
//         if (fuc(i)) break;
//     }
// }

// function on(action, selector, callback) {
//     document.addEventListener(action, function(e) {
//         if (selector == e.target.tagName.toLowerCase() || selector == e.target.className || selector == e.target.id) {
//             callback(e);
//         }
//     })
// }

var DateSelector = function () {
    function DateSelector(config) {
        _classCallCheck(this, DateSelector);

        this.input = config.input;
        this.container = config.container;
        this.type = config.type;
        this.param = config.type == 1 ? [1, 1, 1, 1, 1] : config.param;
        this.beginTime = config.beginTime;
        this.endTime = config.endTime;
        this.recentTime = config.recentTime;
        this.success = config.success;

        this.ulCount = 0;
        this.ulDomArr = [];
        this.idxArr = [];
        this.liHeight = 40;
        this.maxHeight = [];
        this.distance = [];
        this.start = {
            Y: 0,
            time: ''
        };
        this.move = {
            Y: 0,
            speed: []
        };
        this.end = {
            Y: 0,
            index: 0
        };
        this.resultArr = [];
        this.begin_time = [1970, 1, 1, 0, 0];
        this.end_time = [new Date().getFullYear() + 1, 12, 31, 23, 59];
        this.recent_time = [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), new Date().getHours(), new Date().getMinutes()];

        this.initDomFuc();
        this.initReady();
        this.initBinding();
    }

    _createClass(DateSelector, [{
        key: '$id',
        value: function $id(id) {
            return document.getElementById(id);
        }
    }, {
        key: '$class',
        value: function $class(name) {
            return document.getElementsByClassName(name);
        }
    }, {
        key: 'loop',
        value: function loop(begin, length, fuc) {
            for (var i = begin; i < length; i++) {
                if (fuc(i)) break;
            }
        }
    }, {
        key: 'on',
        value: function on(action, selector, callback) {
            document.addEventListener(action, function (e) {
                if (selector == e.target.tagName.toLowerCase() || selector == e.target.className || selector == e.target.id) {
                    callback(e);
                }
            });
        }
    }, {
        key: 'checkParam',
        value: function checkParam() {
            var idxArr = [];
            var _this = this;
            this.loop(0, _this.param.length, function (i) {
                if (_this.param[i] > 0) {
                    idxArr.push(i);
                }
            });
            this.ulCount = idxArr[idxArr.length - 1] - idxArr[0] + 1;
            this.loop(idxArr[0], idxArr[idxArr.length - 1] + 1, function (i) {
                _this.param[i] = 1;
                _this.idxArr.push(i);
            });
        }
    }, {
        key: 'checkTime',
        value: function checkTime() {
            var _this = this;
            var begin_time = this.begin_time;
            var end_time = this.end_time;
            var recent_time = this.recent_time;
            if (_this.beginTime.length == 0) {
                this.loop(0, _this.idxArr.length, function (i) {
                    _this.beginTime.push(begin_time[_this.idxArr[i]]);
                });
            }
            if (_this.endTime.length == 0) {
                this.loop(0, _this.idxArr.length, function (i) {
                    _this.endTime.push(end_time[_this.idxArr[i]]);
                });
            }
            if (_this.recentTime.length == 0) {
                this.loop(0, _this.idxArr.length, function (i) {
                    _this.recentTime.push(recent_time[_this.idxArr[i]]);
                });
            }
            if (_this.idxArr.length == _this.beginTime.length && _this.beginTime.length == _this.endTime.length && _this.endTime.length == _this.recentTime.length) {
                var _idxArrIndex = 0;
                this.loop(0, _this.param.length, function (i) {
                    if (_this.param[i] == 0) {
                        switch (i) {
                            case 0:
                                begin_time[i] = new Date().getFullYear();
                                end_time[i] = new Date().getFullYear();
                                break;
                            case 1:
                                begin_time[i] = new Date().getMonth() + 1;
                                end_time[i] = new Date().getMonth() + 1;
                                break;
                            case 2:
                                begin_time[i] = new Date().getDate();
                                end_time[i] = new Date().getDate();
                                break;
                            case 3:
                                begin_time[i] = new Date().getHours();
                                end_time[i] = new Date().getHours();
                                break;
                            case 4:
                                begin_time[i] = new Date().getMinutes();
                                end_time[i] = new Date().getMinutes();
                                break;
                        }
                    } else {
                        switch (i) {
                            case 0:
                                _this.beginTime[_idxArrIndex] = begin_time[i] = _this.beginTime[_idxArrIndex] >= 1900 ? _this.beginTime[_idxArrIndex] : new Date().getFullYear();
                                _this.endTime[_idxArrIndex] = end_time[i] = _this.endTime[_idxArrIndex] >= 1900 ? _this.endTime[_idxArrIndex] : new Date().getFullYear() + 1;
                                recent_time[i] = _this.recentTime[_idxArrIndex];
                                break;
                            case 1:
                                _this.beginTime[_idxArrIndex] = begin_time[i] = _this.beginTime[_idxArrIndex] > 0 && _this.beginTime[_idxArrIndex] <= 12 ? _this.beginTime[_idxArrIndex] : 1;
                                _this.endTime[_idxArrIndex] = end_time[i] = _this.endTime[_idxArrIndex] > 0 && _this.endTime[_idxArrIndex] <= 12 ? _this.endTime[_idxArrIndex] : 12;
                                recent_time[i] = _this.recentTime[_idxArrIndex];
                                break;
                            case 2:
                                _this.beginTime[_idxArrIndex] = begin_time[i] = _this.beginTime[_idxArrIndex] > 0 && _this.beginTime[_idxArrIndex] <= new Date(begin_time[0], begin_time[1], 0).getDate() ? _this.beginTime[_idxArrIndex] : 1;
                                _this.endTime[_idxArrIndex] = end_time[i] = _this.endTime[_idxArrIndex] > 0 && _this.endTime[_idxArrIndex] <= new Date(end_time[0], end_time[1], 0).getDate() ? _this.endTime[_idxArrIndex] : new Date(end_time[0], end_time[1], 0).getDate();
                                recent_time[i] = _this.recentTime[_idxArrIndex];
                                break;
                            case 3:
                                _this.beginTime[_idxArrIndex] = begin_time[i] = _this.beginTime[_idxArrIndex] >= 0 && _this.beginTime[_idxArrIndex] <= 23 ? _this.beginTime[_idxArrIndex] : 0;
                                _this.endTime[_idxArrIndex] = end_time[i] = _this.endTime[_idxArrIndex] >= 0 && _this.endTime[_idxArrIndex] <= 23 ? _this.endTime[_idxArrIndex] : 23;
                                recent_time[i] = _this.recentTime[_idxArrIndex];
                                break;
                            case 4:
                                _this.beginTime[_idxArrIndex] = begin_time[i] = _this.beginTime[_idxArrIndex] >= 0 && _this.beginTime[_idxArrIndex] <= 59 ? _this.beginTime[_idxArrIndex] : 0;
                                _this.endTime[_idxArrIndex] = end_time[i] = _this.endTime[_idxArrIndex] >= 0 && _this.endTime[_idxArrIndex] <= 59 ? _this.endTime[_idxArrIndex] : 59;
                                recent_time[i] = _this.recentTime[_idxArrIndex];
                                break;
                        }
                        _idxArrIndex++;
                    }
                });
                var bt = new Date(begin_time[0], begin_time[1], begin_time[2], begin_time[3], begin_time[4]).getTime();
                var et = new Date(end_time[0], end_time[1], end_time[2], end_time[3], end_time[4]).getTime();
                var rt = new Date(recent_time[0], recent_time[1], recent_time[2], recent_time[3], recent_time[4]).getTime();
                rt < bt ? alert('当前时间小于开始时间') : "";
                rt > et ? alert('当前时间超过结束时间') : "";
                return bt <= rt && rt <= et;
            } else {
                alert('error,please open the console to see the errmsg');
                console.warn('type为1时,时间数组长度为0或5');
                console.warn('构造函数的参数param或recentTime设置有误');
                console.warn('param必须是连续的1，recentTime的值必须与param中的值对应');
                console.warn('构造函数调用失败，请重新设置参数');
                return false;
            }
        }
    }, {
        key: 'checkTimeArr',
        value: function checkTimeArr(arr1, arr2, length) {
            var checkStatus = true;
            this.loop(0, length, function (i) {
                if (arr1[i] != arr2[i]) checkStatus = false;
            });
            return checkStatus;
        }
    }, {
        key: 'initDomFuc',
        value: function initDomFuc() {
            var _this = this;
            this.checkParam();
            if (!this.checkTime()) return;
            var html = '';
            html += '<div class="date-selector-bg" id="date-selector-bg-' + _this.container + '">' + '<div  class="date-selector-container" id="date-selector-container-' + _this.container + '">' + '<div class="date-selector-btn-box">' + '<div class="date-selector-btn" id="date-selector-btn-cancel">返回</div>';

            if (this.type == 1) {
                html += '<div class="date-selector-tab-box">' + '<div class="date-selector-tab date-selector-tab-active">年月日</div>' + '<div class="date-selector-tab">时分</div>' + '</div>';
            }

            html += '<div class="date-selector-btn" id="date-selector-btn-save-' + _this.container + '">提交</div>' + '</div>' + '<div class="date-selector-content">';

            if (_this.type == 0) {
                this.loop(0, _this.idxArr.length, function (i) {
                    html += '<div class="date-selector date-selector-left">' + '<ul id="date-selector-' + _this.container + '-' + _this.idxArr[i] + '"></ul>' + '</div>';
                });
                html += '<div class="date-selector-up-shadow"></div>' + '<div class="date-selector-down-shadow"></div>' + '<div class="date-selector-line"></div>' + '</div>';
                html += '</div></div>';

                this.$id(_this.container).innerHTML = html;
                this.loop(0, _this.ulCount, function (i) {
                    _this.$id('date-selector-container-' + _this.container).querySelectorAll(".date-selector")[i].style.width = (100 / _this.ulCount).toFixed(2) + '%';
                });
            } else if (_this.type == 1) {
                html += '<div class="date-selector date-selector-left">' + '<ul id="date-selector-' + _this.container + '-0"></ul>' + '</div>' + '<div class="date-selector date-selector-left">' + '<ul id="date-selector-' + _this.container + '-1"></ul>' + '</div>' + '<div class="date-selector date-selector-left">' + '<ul id="date-selector-' + _this.container + '-2"></ul>' + '</div>' + '<div class="date-selector-up-shadow"></div>' + '<div class="date-selector-down-shadow"></div>' + '<div class="date-selector-line"></div>' + '</div>' + '<div class="date-selector-content date-selector-content-right">' + '<div class="date-selector date-selector-right">' + '<ul id="date-selector-' + _this.container + '-3"></ul>' + '</div>' + '<div class="date-selector date-selector-right">' + '<ul id="date-selector-' + _this.container + '-4"></ul>' + '</div>' + '<div class="date-selector-up-shadow"></div>' + '<div class="date-selector-down-shadow"></div>' + '<div class="date-selector-line"></div>' + '</div>';
                html += '</div></div>';
                this.$id(_this.container).innerHTML = html;
            }
        }
    }, {
        key: 'initReady',
        value: function initReady() {
            var _this = this;
            var realIdx = 0;
            this.loop(0, _this.ulCount, function (i) {
                realIdx = _this.idxArr[i];
                var min = 0;
                var max = 0;
                var tempDomUl = _this.$id('date-selector-' + _this.container + '-' + _this.idxArr[i]);
                var tempArray = _this['array' + _this.idxArr[i]] = [];
                switch (realIdx) {
                    case 0:
                        _this.initCommonArr(tempDomUl, tempArray, _this.beginTime[i], _this.endTime[i], '年', i);
                        break;
                    case 1:
                        min = _this.checkTimeArr(_this.begin_time, _this.recent_time, 1) ? _this.beginTime[i] : 1;
                        max = _this.checkTimeArr(_this.end_time, _this.recent_time, 1) ? _this.endTime[i] : 12;
                        _this.initCommonArr(tempDomUl, tempArray, min, max, '月', i);
                        break;
                    case 2:
                        min = _this.checkTimeArr(_this.begin_time, _this.recent_time, 2) ? _this.beginTime[i] : 1;
                        max = _this.checkTimeArr(_this.end_time, _this.recent_time, 2) ? _this.endTime[i] : new Date(_this.recent_time[0], _this.recent_time[1], 0).getDate();
                        _this.initCommonArr(tempDomUl, tempArray, min, max, '日', i);
                        break;
                    case 3:
                        min = _this.checkTimeArr(_this.begin_time, _this.recent_time, 3) ? _this.beginTime[i] : 0;
                        max = _this.checkTimeArr(_this.end_time, _this.recent_time, 3) ? _this.endTime[i] : 23;
                        _this.initCommonArr(tempDomUl, tempArray, min, max, '时', i);
                        break;
                    case 4:
                        min = _this.checkTimeArr(_this.begin_time, _this.recent_time, 4) ? _this.beginTime[i] : 0;
                        max = _this.checkTimeArr(_this.end_time, _this.recent_time, 4) ? _this.endTime[i] : 59;
                        _this.initCommonArr(tempDomUl, tempArray, min, max, '分', i);
                        break;
                }
                tempDomUl.addEventListener('touchstart', function (event) {
                    _this.touch(event, _this, tempDomUl, _this['array' + _this.idxArr[i]], i);
                }, false);
                tempDomUl.addEventListener('touchmove', function (event) {
                    _this.touch(event, _this, tempDomUl, _this['array' + _this.idxArr[i]], i);
                }, false);
                tempDomUl.addEventListener('touchend', function (event) {
                    _this.touch(event, _this, tempDomUl, _this['array' + _this.idxArr[i]], i);
                }, true);
            });
        }
    }, {
        key: 'initBinding',
        value: function initBinding() {
            var _this = this;
            var bg = this.$id('date-selector-bg-' + _this.container);
            var container = this.$id('date-selector-container-' + _this.container);
            var body = document.body;
            this.on('touchstart', _this.input, function () {
                bg.classList.add('date-selector-bg-up');
                container.classList.add('date-selector-container-up');
                body.classList.add('date-selector-locked');
            }, false);

            this.on('touchstart', 'date-selector-btn-save-' + _this.container, function () {
                _this.success(_this.resultArr);
                bg.classList.remove('date-selector-bg-up');
                container.classList.remove('date-selector-container-up');
                body.classList.remove('date-selector-locked');
            }, false);

            this.on('touchstart', 'date-selector-bg-' + _this.container, function () {
                bg.classList.remove('date-selector-bg-up');
                container.classList.remove('date-selector-container-up');
                body.classList.remove('date-selector-locked');
            }, false);

            this.on('touchstart', 'date-selector-btn-cancel', function () {
                bg.classList.remove('date-selector-bg-up');
                container.classList.remove('date-selector-container-up');
                body.classList.remove('date-selector-locked');
            }, false);

            this.on('touchstart', 'date-selector-tab', function (event) {
                var tab = _this.$class('date-selector-tab');
                var content = _this.$class('date-selector-content');
                _this.loop(0, tab.length, function (i) {
                    tab[i].classList.remove('date-selector-tab-active');
                });
                event.target.classList.add('date-selector-tab-active');
                if (event.target.innerHTML == '年月日') {
                    content[0].classList.remove('date-selector-content-left');
                    content[1].classList.add('date-selector-content-right');
                } else {
                    content[0].classList.add('date-selector-content-left');
                    content[1].classList.remove('date-selector-content-right');
                }
            }, false);
        }
    }, {
        key: 'initCommonArr',
        value: function initCommonArr(tempDomUl, tempArr, min, max, str, idx) {
            var _this = this;
            var Html = '';
            this.loop(min, max + 1, function (i) {
                tempArr.push(i);
            });
            _this.maxHeight.push(_this.liHeight * (max - min));
            var res = _this.recentTime[idx];
            _this.resultArr.push(res);
            tempArr.unshift('', '');
            tempArr.push('', '');
            tempDomUl.style.transform = 'translate3d(0,-' + this.liHeight * (tempArr.indexOf(res) - 2) + 'px, 0)';
            tempDomUl.style.webkitTransform = 'translate3d(0,-' + this.liHeight * (tempArr.indexOf(res) - 2) + 'px, 0)';
            _this.distance.push(this.liHeight * (tempArr.indexOf(res) - 2));
            this.loop(0, tempArr.length, function (j) {
                Html += '<li>' + tempArr[j] + (tempArr[j] === '' ? '' : str) + '</li>';
            });
            tempDomUl.innerHTML = Html;
        }
    }, {
        key: 'initRangeArr',
        value: function initRangeArr(min, max, str, checkIdx, dir) {
            var _this = this;
            var realIdx = _this.idxArr[checkIdx];
            var arr = [];
            var $selector = this.$id('date-selector-' + _this.container + '-' + realIdx);
            var targetLong = 0;
            this.loop(min, max + 1, function (k) {
                arr.push(k);
            });
            var Html = '';
            arr.unshift('', '');
            arr.push('', '');
            for (var i = 0; i < arr.length; i++) {
                Html += '<li>' + arr[i] + (arr[i] === '' ? '' : str) + '</li>';
            }
            _this['array' + realIdx] = [];
            _this['array' + realIdx] = arr;
            $selector.innerHTML = Html;

            if (dir == 0) {
                targetLong = min > this.resultArr[checkIdx] ? 0 : -arr.indexOf(this.resultArr[checkIdx]) * this.liHeight + this.liHeight * 2;
                this.resultArr[checkIdx] = this.resultArr[checkIdx] < min ? min : this.resultArr[checkIdx];
                this.recent_time[_this.idxArr[checkIdx]] = _this.resultArr[checkIdx];
            } else if (dir == 1) {
                targetLong = max > this.resultArr[checkIdx] ? -arr.indexOf(this.resultArr[checkIdx]) * this.liHeight + this.liHeight * 2 : -arr.indexOf(max) * this.liHeight + this.liHeight * 2;
                this.resultArr[checkIdx] = this.resultArr[checkIdx] > max ? max : this.resultArr[checkIdx];
                this.recent_time[_this.idxArr[checkIdx]] = _this.resultArr[checkIdx];
            } else {
                if (arr.indexOf(this.resultArr[checkIdx]) == -1) {
                    targetLong = this.maxHeight[checkIdx] > this.liHeight * (max - min) ? -this.liHeight * (max - min) : -this.distance[checkIdx];
                } else {
                    targetLong = -arr.indexOf(this.resultArr[checkIdx]) * this.liHeight + 2 * this.liHeight;
                }
                this.recent_time[realIdx] = -targetLong / this.liHeight + 1;
                this.resultArr[checkIdx] = arr[-targetLong / this.liHeight + 2];
            }

            $selector.style.transform = 'translate3d(0,' + targetLong + 'px, 0)';
            $selector.style.webkitTransform = 'translate3d(0,' + targetLong + 'px, 0)';
            $selector.style.transition = 'transform 0.15s ease-out';
            $selector.style.webkitTransition = '-webkit-transform 0.15s ease-out';
            this.maxHeight[checkIdx] = this.liHeight * (max - min);
            this.distance[checkIdx] = Math.abs(targetLong);
        }
    }, {
        key: 'checkRange',
        value: function checkRange(checkIdx) {
            var _this = this;
            if (checkIdx >= _this.ulCount - 1) return;
            var min = 0;
            var max = 0;
            var str = '';
            var dir = 0; //0在顶部,1在底部,-1在中间
            var realIdx = _this.idxArr[checkIdx];
            switch (realIdx) {
                case 0:
                    min = 1;
                    max = 12;
                    str = '月';
                    break;
                case 1:
                    min = 1;
                    max = new Date(_this.recent_time[0], _this.recent_time[1], 0).getDate();
                    str = '日';
                    break;
                case 2:
                    min = 0;
                    max = 23;
                    str = '时';
                    break;
                case 3:
                    min = 0;
                    max = 59;
                    str = '分';
                    break;
            }

            this.loop(0, checkIdx + 1, function (p) {
                if (_this.beginTime[p] != _this.resultArr[p]) {
                    dir = 1;
                    _this.loop(0, checkIdx + 1, function (q) {
                        if (_this.endTime[q] != _this.resultArr[q]) dir = -1;
                    });
                }
            });

            if (dir == 0) {
                min = _this.beginTime[checkIdx + 1] >= min ? _this.beginTime[checkIdx + 1] : 0;
            } else if (dir == 1) {
                max = _this.endTime[checkIdx + 1] <= max ? _this.endTime[checkIdx + 1] : 0;
            }
            _this.initRangeArr(min, max, str, checkIdx + 1, dir);
            _this.checkRange(checkIdx + 1);
        }
    }, {
        key: 'initPosition',
        value: function initPosition(dis, max, idx) {
            dis = dis < 0 ? 0 : dis;
            dis = dis > max ? max : dis;
            var sub = dis % this.liHeight;
            if (sub < this.liHeight / 2) {
                this.distance[idx] = dis - sub;
            } else {
                this.distance[idx] = dis + (this.liHeight - sub);
            }
            return this;
        }
    }, {
        key: 'initSpeed',
        value: function initSpeed(arr, dir, max, idx) {
            var variance = 0;
            var sum = 0;
            for (var i in arr) {
                sum += arr[i] - 0;
            }
            for (var j in arr) {
                variance += (arr[j] - sum / arr.length) * (arr[j] - sum / arr.length);
            }
            var rate = 0;
            if ((variance / arr.length).toFixed(2) > .1) {
                rate = max > this.liHeight * 15 ? dir * 2 : 0;
                this.initPosition(this.distance[idx] + rate, max, idx);
                this.move.speed[0] = .2;
            } else {
                this.initPosition(this.distance[idx], max, idx);
                this.move.speed[0] = this.move.speed[0] > 0.2 ? .2 : this.move.speed[0];
            }
            return this;
        }
    }, {
        key: 'touch',
        value: function touch(event, that, $selector, array, idx) {
            event = event || window.event;
            event.preventDefault();
            switch (event.type) {
                case "touchstart":
                    that.move.speed = [];
                    that.start.Y = event.touches[0].clientY;
                    that.start.time = Date.now();
                    break;
                case "touchend":
                    that.end.Y = event.changedTouches[0].clientY;
                    var tempDis = that.distance[idx] + (that.start.Y - that.end.Y);
                    that.distance[idx] = tempDis < 0 ? 0 : tempDis < that.maxHeight[idx] ? tempDis : that.maxHeight[idx];
                    that.initSpeed(that.move.speed, that.start.Y - that.end.Y, that.maxHeight[idx], idx);
                    var tempRes = that.end.index = that.distance[idx] / that.liHeight + 2;

                    $selector.style.transform = 'translate3d(0,-' + that.distance[idx] + 'px, 0)';
                    $selector.style.webkitTransform = 'translate3d(0,-' + that.distance[idx] + 'px, 0)';
                    $selector.style.transition = 'transform ' + that.move.speed[0] + 's ease-out';
                    $selector.style.webkitTransition = '-webkit-transform ' + that.move.speed[0] + 's ease-out';

                    that.recent_time[that.idxArr[idx]] = that.resultArr[idx] = that['array' + that.idxArr[idx]][tempRes];
                    that.checkRange(0);

                    break;
                case "touchmove":
                    event.preventDefault();
                    that.move.Y = event.touches[0].clientY;
                    var offset = that.start.Y - that.move.Y;
                    if (that.distance[idx] == 0 && offset < 0) {
                        $selector.style.transform = 'translate3d(0,' + 1.5 * that.liHeight + 'px, 0)';
                        $selector.style.webkitTransform = 'translate3d(0,' + 1.5 * that.liHeight + 'px, 0)';
                        $selector.style.transition = 'transform 0.3s ease-out';
                        $selector.style.webkitTransition = '-webkit-transform 0.3s ease-out';
                    } else {
                        $selector.style.transform = 'translate3d(0,-' + (offset + that.distance[idx]) + 'px, 0)';
                        $selector.style.webkitTransform = 'translate3d(0,-' + (offset + that.distance[idx]) + 'px, 0)';
                    }
                    if (this.distance[idx] <= -that.maxHeight[idx]) {
                        $selector.style.transform = 'translate3d(0, -' + that.liHeight + 'px, 0)';
                        $selector.style.webkitTransform = 'translate3d(0, -' + that.liHeight + 'px, 0)';
                        $selector.style.transition = 'transform 0.3s ease-out';
                        $selector.style.webkitTransition = '-webkit-transform 0.3s ease-out';
                    }
                    if (Math.abs(offset).toFixed(0) % 5 === 0) {
                        var time = Date.now();
                        that.move.speed.push((Math.abs(offset) / (time - that.start.time)).toFixed(2));
                    }
                    break;
            }
        }
    }]);

    return DateSelector;
}();

_UI2.default.registerComponent('DateSelector', DateSelector);
exports.default = DateSelector;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UI = __webpack_require__(0);

var _UI2 = _interopRequireDefault(_UI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = __webpack_require__(1);

// function $class(name) {
//     return document.getElementsByClassName(name);
// }

// function loop(begin, length, fuc) {
//     for (var i = begin; i < length; i++) {
//         if (fuc(i)) break;
//     }
// }

// function on(action, selector, callback) {
//     document.addEventListener(action, function(e) {
//         if (selector == e.target.tagName.toLowerCase() || selector == e.target.className || selector == e.target.id) {
//             callback(e);
//         }
//     })
// }

var DateSelector_Slide = function () {
    function DateSelector_Slide(config) {
        _classCallCheck(this, DateSelector_Slide);

        this.input = config.input;
        this.container = config.container;
        this.type = config.type;
        this.param = config.type == 1 ? [1, 1, 1, 1, 1] : config.param;
        this.beginTime = config.beginTime;
        this.endTime = config.endTime;
        this.recentTime = config.recentTime;
        this.success = config.success;

        this.ulCount = 0;
        this.ulDomArr = [];
        this.idxArr = [];
        this.liHeight = 40;
        this.maxHeight = [];
        this.distance = [];
        this.start = {
            Y: 0,
            time: ''
        };
        this.move = {
            Y: 0,
            speed: []
        };
        this.end = {
            Y: 0,
            index: 0
        };
        this.resultArr = [];
        this.begin_time = [1970, 1, 1, 0, 0];
        this.end_time = [new Date().getFullYear() + 10, 12, 31, 23, 59];
        this.recent_time = [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(), new Date().getHours(), new Date().getMinutes()];

        this.initDomFuc();
        this.initReady();
        this.initBinding();
    }

    _createClass(DateSelector_Slide, [{
        key: '$id',
        value: function $id(id) {
            return document.getElementById(id);
        }
    }, {
        key: '$class',
        value: function $class(name) {
            return document.getElementsByClassName(name);
        }
    }, {
        key: 'loop',
        value: function loop(begin, length, fuc) {
            for (var i = begin; i < length; i++) {
                if (fuc(i)) break;
            }
        }
    }, {
        key: 'on',
        value: function on(action, selector, callback) {
            document.addEventListener(action, function (e) {
                if (selector == e.target.tagName.toLowerCase() || selector == e.target.className || selector == e.target.id) {
                    callback(e);
                }
            });
        }
    }, {
        key: 'checkParam',
        value: function checkParam() {
            var idxArr = [];
            var _this = this;
            this.loop(0, _this.param.length, function (i) {
                if (_this.param[i] > 0) {
                    idxArr.push(i);
                }
            });
            this.ulCount = idxArr[idxArr.length - 1] - idxArr[0] + 1;
            this.loop(idxArr[0], idxArr[idxArr.length - 1] + 1, function (i) {
                _this.param[i] = 1;
                _this.idxArr.push(i);
            });
        }
    }, {
        key: 'checkTime',
        value: function checkTime() {
            var _this = this;
            var begin_time = this.begin_time;
            var end_time = this.end_time;
            var recent_time = this.recent_time;
            if (_this.beginTime.length == 0) {
                this.loop(0, _this.idxArr.length, function (i) {
                    _this.beginTime.push(begin_time[_this.idxArr[i]]);
                });
            }
            if (_this.endTime.length == 0) {
                this.loop(0, _this.idxArr.length, function (i) {
                    _this.endTime.push(end_time[_this.idxArr[i]]);
                });
            }
            if (_this.recentTime.length == 0) {
                this.loop(0, _this.idxArr.length, function (i) {
                    _this.recentTime.push(recent_time[_this.idxArr[i]]);
                });
            }
            if (_this.idxArr.length == _this.beginTime.length && _this.beginTime.length == _this.endTime.length && _this.endTime.length == _this.recentTime.length) {
                var _idxArrIndex = 0;
                this.loop(0, _this.param.length, function (i) {
                    if (_this.param[i] == 0) {
                        switch (i) {
                            case 0:
                                begin_time[i] = new Date().getFullYear();
                                end_time[i] = new Date().getFullYear();
                                break;
                            case 1:
                                begin_time[i] = new Date().getMonth() + 1;
                                end_time[i] = new Date().getMonth() + 1;
                                break;
                            case 2:
                                begin_time[i] = new Date().getDate();
                                end_time[i] = new Date().getDate();
                                break;
                            case 3:
                                begin_time[i] = new Date().getHours();
                                end_time[i] = new Date().getHours();
                                break;
                            case 4:
                                begin_time[i] = new Date().getMinutes();
                                end_time[i] = new Date().getMinutes();
                                break;
                        }
                    } else {
                        switch (i) {
                            case 0:
                                _this.beginTime[_idxArrIndex] = begin_time[i] = _this.beginTime[_idxArrIndex] >= 1900 ? _this.beginTime[_idxArrIndex] : new Date().getFullYear();
                                _this.endTime[_idxArrIndex] = end_time[i] = _this.endTime[_idxArrIndex] >= 1900 ? _this.endTime[_idxArrIndex] : new Date().getFullYear() + 1;
                                recent_time[i] = _this.recentTime[_idxArrIndex];
                                break;
                            case 1:
                                _this.beginTime[_idxArrIndex] = begin_time[i] = _this.beginTime[_idxArrIndex] > 0 && _this.beginTime[_idxArrIndex] <= 12 ? _this.beginTime[_idxArrIndex] : 1;
                                _this.endTime[_idxArrIndex] = end_time[i] = _this.endTime[_idxArrIndex] > 0 && _this.endTime[_idxArrIndex] <= 12 ? _this.endTime[_idxArrIndex] : 12;
                                recent_time[i] = _this.recentTime[_idxArrIndex];
                                break;
                            case 2:
                                _this.beginTime[_idxArrIndex] = begin_time[i] = _this.beginTime[_idxArrIndex] > 0 && _this.beginTime[_idxArrIndex] <= new Date(begin_time[0], begin_time[1], 0).getDate() ? _this.beginTime[_idxArrIndex] : 1;
                                _this.endTime[_idxArrIndex] = end_time[i] = _this.endTime[_idxArrIndex] > 0 && _this.endTime[_idxArrIndex] <= new Date(end_time[0], end_time[1], 0).getDate() ? _this.endTime[_idxArrIndex] : new Date(end_time[0], end_time[1], 0).getDate();
                                recent_time[i] = _this.recentTime[_idxArrIndex];
                                break;
                            case 3:
                                _this.beginTime[_idxArrIndex] = begin_time[i] = _this.beginTime[_idxArrIndex] >= 0 && _this.beginTime[_idxArrIndex] <= 23 ? _this.beginTime[_idxArrIndex] : 0;
                                _this.endTime[_idxArrIndex] = end_time[i] = _this.endTime[_idxArrIndex] >= 0 && _this.endTime[_idxArrIndex] <= 23 ? _this.endTime[_idxArrIndex] : 23;
                                recent_time[i] = _this.recentTime[_idxArrIndex];
                                break;
                            case 4:
                                _this.beginTime[_idxArrIndex] = begin_time[i] = _this.beginTime[_idxArrIndex] >= 0 && _this.beginTime[_idxArrIndex] <= 59 ? _this.beginTime[_idxArrIndex] : 0;
                                _this.endTime[_idxArrIndex] = end_time[i] = _this.endTime[_idxArrIndex] >= 0 && _this.endTime[_idxArrIndex] <= 59 ? _this.endTime[_idxArrIndex] : 59;
                                recent_time[i] = _this.recentTime[_idxArrIndex];
                                break;
                        }
                        _idxArrIndex++;
                    }
                });
                var bt = new Date(begin_time[0], begin_time[1], begin_time[2], begin_time[3], begin_time[4]).getTime();
                var et = new Date(end_time[0], end_time[1], end_time[2], end_time[3], end_time[4]).getTime();
                var rt = new Date(recent_time[0], recent_time[1], recent_time[2], recent_time[3], recent_time[4]).getTime();
                rt < bt ? alert('当前时间小于开始时间') : "";
                rt > et ? alert('当前时间超过结束时间') : "";
                return bt <= rt && rt <= et;
            } else {
                alert('error,please open the console to see the errmsg');
                console.warn('type为1时,时间数组长度为0或5');
                console.warn('构造函数的参数param或recentTime设置有误');
                console.warn('param必须是连续的1，recentTime的值必须与param中的值对应');
                console.warn('构造函数调用失败，请重新设置参数');
                return false;
            }
        }
    }, {
        key: 'checkTimeArr',
        value: function checkTimeArr(arr1, arr2, length) {
            var checkStatus = true;
            this.loop(0, length, function (i) {
                if (arr1[i] != arr2[i]) checkStatus = false;
            });
            return checkStatus;
        }
    }, {
        key: 'initDomFuc',
        value: function initDomFuc() {
            var _this = this;
            this.checkParam();
            if (!this.checkTime()) return;
            var html = '';
            html += '<div class="date-selector-bg2 date-selector-bg-up2" id="date-selector-bg-' + _this.container + '">' + '<div  class="date-selector-container2" id="date-selector-container-' + _this.container + '">';

            // if (this.type == 1) {
            //     html += '<div class="date-selector-tab-box">' +
            //         '<div class="date-selector-tab date-selector-tab-active">年月日</div>' +
            //         '<div class="date-selector-tab">时分</div>' +
            //         '</div>';
            // }


            html += '<div class="date-selector-content">';

            if (_this.type == 0) {
                this.loop(0, _this.idxArr.length, function (i) {
                    html += '<div class="date-selector date-selector-left">' + '<ul id="date-selector-' + _this.container + '-' + _this.idxArr[i] + '"></ul>' + '</div>';
                });
                html += '<div class="date-selector-up-shadow"></div>' + '<div class="date-selector-down-shadow"></div>' + '<div class="date-selector-line"></div>' + '</div>';
                html += '</div></div>';

                this.$id(_this.container).innerHTML = html;
                this.loop(0, _this.ulCount, function (i) {
                    _this.$id('date-selector-container-' + _this.container).querySelectorAll(".date-selector")[i].style.width = (100 / _this.ulCount).toFixed(2) + '%';
                });
            } else if (_this.type == 1) {
                html += '<div class="date-selector date-selector-left">' + '<ul id="date-selector-' + _this.container + '-0"></ul>' + '</div>' + '<div class="date-selector date-selector-left">' + '<ul id="date-selector-' + _this.container + '-1"></ul>' + '</div>' + '<div class="date-selector date-selector-left">' + '<ul id="date-selector-' + _this.container + '-2"></ul>' + '</div>' + '<div class="date-selector-up-shadow"></div>' + '<div class="date-selector-down-shadow"></div>' + '<div class="date-selector-line"></div>' + '</div>' + '<div class="date-selector-content date-selector-content-right">' + '<div class="date-selector date-selector-right">' + '<ul id="date-selector-' + _this.container + '-3"></ul>' + '</div>' + '<div class="date-selector date-selector-right">' + '<ul id="date-selector-' + _this.container + '-4"></ul>' + '</div>' + '<div class="date-selector-up-shadow"></div>' + '<div class="date-selector-down-shadow"></div>' + '<div class="date-selector-line"></div>' + '</div>';
                html += '</div></div>';
                this.$id(_this.container).innerHTML = html;
            }
        }
    }, {
        key: 'initReady',
        value: function initReady() {
            var _this = this;
            var realIdx = 0;
            this.loop(0, _this.ulCount, function (i) {
                realIdx = _this.idxArr[i];
                var min = 0;
                var max = 0;
                var tempDomUl = _this.$id('date-selector-' + _this.container + '-' + _this.idxArr[i]);
                var tempArray = _this['array' + _this.idxArr[i]] = [];
                switch (realIdx) {
                    case 0:
                        _this.initCommonArr(tempDomUl, tempArray, _this.beginTime[i], _this.endTime[i], '年', i);
                        break;
                    case 1:
                        min = _this.checkTimeArr(_this.begin_time, _this.recent_time, 1) ? _this.beginTime[i] : 1;
                        max = _this.checkTimeArr(_this.end_time, _this.recent_time, 1) ? _this.endTime[i] : 12;
                        _this.initCommonArr(tempDomUl, tempArray, min, max, '月', i);
                        break;
                    case 2:
                        min = _this.checkTimeArr(_this.begin_time, _this.recent_time, 2) ? _this.beginTime[i] : 1;
                        max = _this.checkTimeArr(_this.end_time, _this.recent_time, 2) ? _this.endTime[i] : new Date(_this.recent_time[0], _this.recent_time[1], 0).getDate();
                        _this.initCommonArr(tempDomUl, tempArray, min, max, '日', i);
                        break;
                    case 3:
                        min = _this.checkTimeArr(_this.begin_time, _this.recent_time, 3) ? _this.beginTime[i] : 0;
                        max = _this.checkTimeArr(_this.end_time, _this.recent_time, 3) ? _this.endTime[i] : 23;
                        _this.initCommonArr(tempDomUl, tempArray, min, max, '时', i);
                        break;
                    case 4:
                        min = _this.checkTimeArr(_this.begin_time, _this.recent_time, 4) ? _this.beginTime[i] : 0;
                        max = _this.checkTimeArr(_this.end_time, _this.recent_time, 4) ? _this.endTime[i] : 59;
                        _this.initCommonArr(tempDomUl, tempArray, min, max, '分', i);
                        break;
                }
                tempDomUl.addEventListener('touchstart', function (event) {
                    _this.touch(event, _this, tempDomUl, _this['array' + _this.idxArr[i]], i);
                }, false);
                tempDomUl.addEventListener('touchmove', function (event) {
                    _this.touch(event, _this, tempDomUl, _this['array' + _this.idxArr[i]], i);
                }, false);
                tempDomUl.addEventListener('touchend', function (event) {
                    _this.touch(event, _this, tempDomUl, _this['array' + _this.idxArr[i]], i);
                }, true);
            });
        }
    }, {
        key: 'initBinding',
        value: function initBinding() {
            var _this = this;
            var bg = this.$id('date-selector-bg-' + _this.container);
            var container = this.$id('date-selector-container-' + _this.container);
            var body = document.body;
            this.on('touchstart', _this.input, function () {
                bg.classList.add('date-selector-bg-up');
                container.classList.add('date-selector-container-up');
                body.classList.add('date-selector-locked');
            }, false);

            this.on('touchstart', 'date-selector-btn-save-' + _this.container, function () {
                _this.success(_this.resultArr);
                bg.classList.remove('date-selector-bg-up');
                container.classList.remove('date-selector-container-up');
                body.classList.remove('date-selector-locked');
            }, false);

            this.on('touchstart', 'date-selector-bg-' + _this.container, function () {
                bg.classList.remove('date-selector-bg-up');
                container.classList.remove('date-selector-container-up');
                body.classList.remove('date-selector-locked');
            }, false);

            this.on('touchstart', 'date-selector-btn-cancel', function () {
                bg.classList.remove('date-selector-bg-up');
                container.classList.remove('date-selector-container-up');
                body.classList.remove('date-selector-locked');
            }, false);

            this.on('touchstart', 'date-selector-tab', function (event) {
                var tab = _this.$class('date-selector-tab');
                var content = _this.$class('date-selector-content');
                _this.loop(0, tab.length, function (i) {
                    tab[i].classList.remove('date-selector-tab-active');
                });
                event.target.classList.add('date-selector-tab-active');
                if (event.target.innerHTML == '年月日') {
                    content[0].classList.remove('date-selector-content-left');
                    content[1].classList.add('date-selector-content-right');
                } else {
                    content[0].classList.add('date-selector-content-left');
                    content[1].classList.remove('date-selector-content-right');
                }
            }, false);
        }
    }, {
        key: 'initCommonArr',
        value: function initCommonArr(tempDomUl, tempArr, min, max, str, idx) {
            var _this = this;
            var Html = '';
            this.loop(min, max + 1, function (i) {
                tempArr.push(i);
            });
            _this.maxHeight.push(_this.liHeight * (max - min));
            var res = _this.recentTime[idx];
            _this.resultArr.push(res);
            tempArr.unshift('', '');
            tempArr.push('', '');
            tempDomUl.style.transform = 'translate3d(0,-' + this.liHeight * (tempArr.indexOf(res) - 2) + 'px, 0)';
            tempDomUl.style.webkitTransform = 'translate3d(0,-' + this.liHeight * (tempArr.indexOf(res) - 2) + 'px, 0)';
            _this.distance.push(this.liHeight * (tempArr.indexOf(res) - 2));
            this.loop(0, tempArr.length, function (j) {
                Html += '<li>' + tempArr[j] + (tempArr[j] === '' ? '' : str) + '</li>';
            });
            tempDomUl.innerHTML = Html;
        }
    }, {
        key: 'initRangeArr',
        value: function initRangeArr(min, max, str, checkIdx, dir) {
            var _this = this;
            var realIdx = _this.idxArr[checkIdx];
            var arr = [];
            var $selector = this.$id('date-selector-' + _this.container + '-' + realIdx);
            var targetLong = 0;
            this.loop(min, max + 1, function (k) {
                arr.push(k);
            });
            var Html = '';
            arr.unshift('', '');
            arr.push('', '');
            for (var i = 0; i < arr.length; i++) {
                Html += '<li>' + arr[i] + (arr[i] === '' ? '' : str) + '</li>';
            }
            _this['array' + realIdx] = [];
            _this['array' + realIdx] = arr;
            $selector.innerHTML = Html;

            if (dir == 0) {
                targetLong = min > this.resultArr[checkIdx] ? 0 : -arr.indexOf(this.resultArr[checkIdx]) * this.liHeight + this.liHeight * 2;
                this.resultArr[checkIdx] = this.resultArr[checkIdx] < min ? min : this.resultArr[checkIdx];
                this.recent_time[_this.idxArr[checkIdx]] = _this.resultArr[checkIdx];
            } else if (dir == 1) {
                targetLong = max > this.resultArr[checkIdx] ? -arr.indexOf(this.resultArr[checkIdx]) * this.liHeight + this.liHeight * 2 : -arr.indexOf(max) * this.liHeight + this.liHeight * 2;
                this.resultArr[checkIdx] = this.resultArr[checkIdx] > max ? max : this.resultArr[checkIdx];
                this.recent_time[_this.idxArr[checkIdx]] = _this.resultArr[checkIdx];
            } else {
                if (arr.indexOf(this.resultArr[checkIdx]) == -1) {
                    targetLong = this.maxHeight[checkIdx] > this.liHeight * (max - min) ? -this.liHeight * (max - min) : -this.distance[checkIdx];
                } else {
                    targetLong = -arr.indexOf(this.resultArr[checkIdx]) * this.liHeight + 2 * this.liHeight;
                }
                this.recent_time[realIdx] = -targetLong / this.liHeight + 1;
                this.resultArr[checkIdx] = arr[-targetLong / this.liHeight + 2];
            }

            $selector.style.transform = 'translate3d(0,' + targetLong + 'px, 0)';
            $selector.style.webkitTransform = 'translate3d(0,' + targetLong + 'px, 0)';
            $selector.style.transition = 'transform 0.15s ease-out';
            $selector.style.webkitTransition = '-webkit-transform 0.15s ease-out';
            this.maxHeight[checkIdx] = this.liHeight * (max - min);
            this.distance[checkIdx] = Math.abs(targetLong);
        }
    }, {
        key: 'checkRange',
        value: function checkRange(checkIdx) {
            var _this = this;
            if (checkIdx >= _this.ulCount - 1) return;
            var min = 0;
            var max = 0;
            var str = '';
            var dir = 0; //0在顶部,1在底部,-1在中间
            var realIdx = _this.idxArr[checkIdx];
            switch (realIdx) {
                case 0:
                    min = 1;
                    max = 12;
                    str = '月';
                    break;
                case 1:
                    min = 1;
                    max = new Date(_this.recent_time[0], _this.recent_time[1], 0).getDate();
                    str = '日';
                    break;
                case 2:
                    min = 0;
                    max = 23;
                    str = '时';
                    break;
                case 3:
                    min = 0;
                    max = 59;
                    str = '分';
                    break;
            }

            this.loop(0, checkIdx + 1, function (p) {
                if (_this.beginTime[p] != _this.resultArr[p]) {
                    dir = 1;
                    _this.loop(0, checkIdx + 1, function (q) {
                        if (_this.endTime[q] != _this.resultArr[q]) dir = -1;
                    });
                }
            });

            if (dir == 0) {
                min = _this.beginTime[checkIdx + 1] >= min ? _this.beginTime[checkIdx + 1] : 0;
            } else if (dir == 1) {
                max = _this.endTime[checkIdx + 1] <= max ? _this.endTime[checkIdx + 1] : 0;
            }
            _this.initRangeArr(min, max, str, checkIdx + 1, dir);
            _this.checkRange(checkIdx + 1);
        }
    }, {
        key: 'initPosition',
        value: function initPosition(dis, max, idx) {
            dis = dis < 0 ? 0 : dis;
            dis = dis > max ? max : dis;
            var sub = dis % this.liHeight;
            if (sub < this.liHeight / 2) {
                this.distance[idx] = dis - sub;
            } else {
                this.distance[idx] = dis + (this.liHeight - sub);
            }
            return this;
        }
    }, {
        key: 'initSpeed',
        value: function initSpeed(arr, dir, max, idx) {
            var variance = 0;
            var sum = 0;
            for (var i in arr) {
                sum += arr[i] - 0;
            }
            for (var j in arr) {
                variance += (arr[j] - sum / arr.length) * (arr[j] - sum / arr.length);
            }
            var rate = 0;
            if ((variance / arr.length).toFixed(2) > .1) {
                rate = max > this.liHeight * 15 ? dir * 2 : 0;
                this.initPosition(this.distance[idx] + rate, max, idx);
                this.move.speed[0] = .2;
            } else {
                this.initPosition(this.distance[idx], max, idx);
                this.move.speed[0] = this.move.speed[0] > 0.2 ? .2 : this.move.speed[0];
            }
            return this;
        }
    }, {
        key: 'touch',
        value: function touch(event, that, $selector, array, idx) {
            event = event || window.event;
            event.preventDefault();
            switch (event.type) {
                case "touchstart":
                    that.move.speed = [];
                    that.start.Y = event.touches[0].clientY;
                    that.start.time = Date.now();
                    break;
                case "touchend":
                    that.end.Y = event.changedTouches[0].clientY;
                    var tempDis = that.distance[idx] + (that.start.Y - that.end.Y);
                    that.distance[idx] = tempDis < 0 ? 0 : tempDis < that.maxHeight[idx] ? tempDis : that.maxHeight[idx];
                    that.initSpeed(that.move.speed, that.start.Y - that.end.Y, that.maxHeight[idx], idx);
                    var tempRes = that.end.index = that.distance[idx] / that.liHeight + 2;

                    $selector.style.transform = 'translate3d(0,-' + that.distance[idx] + 'px, 0)';
                    $selector.style.webkitTransform = 'translate3d(0,-' + that.distance[idx] + 'px, 0)';
                    $selector.style.transition = 'transform ' + that.move.speed[0] + 's ease-out';
                    $selector.style.webkitTransition = '-webkit-transform ' + that.move.speed[0] + 's ease-out';

                    that.recent_time[that.idxArr[idx]] = that.resultArr[idx] = that['array' + that.idxArr[idx]][tempRes];
                    that.checkRange(0);
                    that.success(that.resultArr);
                    break;
                case "touchmove":
                    event.preventDefault();
                    that.move.Y = event.touches[0].clientY;
                    var offset = that.start.Y - that.move.Y;
                    if (that.distance[idx] == 0 && offset < 0) {
                        $selector.style.transform = 'translate3d(0,' + 1.5 * that.liHeight + 'px, 0)';
                        $selector.style.webkitTransform = 'translate3d(0,' + 1.5 * that.liHeight + 'px, 0)';
                        $selector.style.transition = 'transform 0.3s ease-out';
                        $selector.style.webkitTransition = '-webkit-transform 0.3s ease-out';
                    } else {
                        $selector.style.transform = 'translate3d(0,-' + (offset + that.distance[idx]) + 'px, 0)';
                        $selector.style.webkitTransform = 'translate3d(0,-' + (offset + that.distance[idx]) + 'px, 0)';
                    }
                    if (this.distance[idx] <= -that.maxHeight[idx]) {
                        $selector.style.transform = 'translate3d(0, -' + that.liHeight + 'px, 0)';
                        $selector.style.webkitTransform = 'translate3d(0, -' + that.liHeight + 'px, 0)';
                        $selector.style.transition = 'transform 0.3s ease-out';
                        $selector.style.webkitTransition = '-webkit-transform 0.3s ease-out';
                    }
                    if (Math.abs(offset).toFixed(0) % 5 === 0) {
                        var time = Date.now();
                        that.move.speed.push((Math.abs(offset) / (time - that.start.time)).toFixed(2));
                    }

                    break;
            }
        }
    }]);

    return DateSelector_Slide;
}();

_UI2.default.registerComponent('DateSelector_Slide', DateSelector_Slide);
exports.default = DateSelector_Slide;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _UI2 = __webpack_require__(0);

var _UI3 = _interopRequireDefault(_UI2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = __webpack_require__(1);

/**
 *  options中的参数
 *      title => 要显示的标题
 *      hook  => dom的钩子
 *      gridNum => 一行的数量
 *      map => 要添加的子元素
 *          {
 *              icon => iconfont编码，
 *              text => 子元素模块名称,
 *              val => 对应的下发的值
 *          }
 *     
 */

var activeClass = 'active-block active-border';

var GridItem = function (_UI) {
    _inherits(GridItem, _UI);

    function GridItem(options) {
        _classCallCheck(this, GridItem);

        return _possibleConstructorReturn(this, (GridItem.__proto__ || Object.getPrototypeOf(GridItem)).call(this, options));
    }

    _createClass(GridItem, [{
        key: 'create',
        value: function create() {
            var html = "";
            var _map = this.options.map;
            var _gridNum = this.options.gridNum;
            var _hook = this.options.hook;

            var splitLineHTML = '<div class="list-item-split-line"></div>';

            if (this.options.value) {
                this._value = this.options.value;
            }

            if (this.options.title) {
                html += '<div class="panel-title">' + this.options.title + '</div>' + splitLineHTML;
            }

            html += '<div class="panel-body ui_wrap flex-left">';
            for (var i in _map) {
                html += '<div\n             class="\n             unit-1-' + _gridNum + ' \n             site-box text-center grid-item \n             ' + (_map[i].value === this._value ? activeClass : '') + '\n             ' + (i % _gridNum === _gridNum - 1 ? 'no-right-border' : '') + '\n             ' + (_map.length - i <= _map.length % _gridNum ? 'no-bottom-border' : '') + '\n             " \n             data-mode-index = "' + _map[i].value + '"\n             value = "' + _map[i].value + '"\n             >\n                <span class="iconfont">' + _map[i].icon + '</span>\n                <span class="mode_name">' + _map[i].text + '</span>\n            </div>';
            }

            html = '<div class="panel">' + html + '</div>';
            $(_hook).append(html);
        }
    }, {
        key: 'initEventFn',
        value: function initEventFn() {
            var _this3 = this;

            var selector = this.selectorDom();
            // 绑定点击事件
            $(document).on('tap', selector, function (e) {
                _this3.fn(e);
            });
            // 绑定触摸事件
            var hoverClass = 'grid-item-hover';
            $(document).on('touchstart', selector, function (e) {
                var $this = $(e.currentTarget);
                $this.addClass(hoverClass);
            });
            $(document).on('touchend', selector, function (e) {
                var $this = $(e.currentTarget);
                $this.removeClass(hoverClass);
            });
        }
    }, {
        key: 'fn',
        value: function fn(e) {
            var _this = $(e.currentTarget);
            var index = _this.data('mode-index');
            var item = this.options.map[Number(index)];
            var _map = this._unclickMap;

            if (_map.indexOf(index.toString()) === -1) {
                this.selected(index, _this);
                //before
                if (this.options.beforeTap) {
                    this.options.beforeTap();
                }
                //tap
                if (this.options.onTap) {
                    this.options.onTap(item, index, _this);
                }
                //after
                if (this.options.afterTap) {
                    this.options.afterTap();
                }
            }
        }
    }, {
        key: 'selectorDom',
        value: function selectorDom() {
            return this.options.hook + " .grid-item";
        }
    }, {
        key: 'selected',
        value: function selected(index, dom) {
            var selector = this.selectorDom();
            $(selector).removeClass(activeClass);
            if (dom) {
                $(dom).addClass(activeClass);
            } else {
                var selectedItem = this.selectorDom() + '[value=' + index + ']';
                $(selectedItem).addClass(activeClass);
            }
        }
    }, {
        key: 'setValueFn',
        value: function setValueFn(val) {
            var _map = this.options.map;
            var check = this.checkVal(val, _map);
            if (check) {
                for (var i in _map) {
                    if (_map[i].value === val) {
                        this._value = val;
                        this.selected(i);
                    }
                }
            } else {
                throw "error";
            }
        }
    }, {
        key: 'checkVal',
        value: function checkVal(val, _map) {
            var a = false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    if (i["value"] === val) {
                        a = true;
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return a;
        }
    }, {
        key: 'setItemDisabled',
        value: function setItemDisabled(map) {
            var _map = map.index;
            this._unclickMap = _map;
            var selector = this.selectorDom();

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = _map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var i = _step2.value;

                    var _item = selector + '[value=' + i + ']';
                    $(_item).addClass("disabled");
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: 'disabled',
        value: function disabled() {
            _get(GridItem.prototype.__proto__ || Object.getPrototypeOf(GridItem.prototype), 'disabled', this).call(this);
            var selector = this.selectorDom();
            $(selector).addClass("disabled");
            $(document).off("click", selector);
        }
    }, {
        key: 'enable',
        value: function enable() {
            var _this4 = this;

            _get(GridItem.prototype.__proto__ || Object.getPrototypeOf(GridItem.prototype), 'enable', this).call(this);
            var selector = this.selectorDom();
            $(selector).removeClass("disabled");
            $(document).on("click", selector, function (e) {
                _this4.fn(e);
            });
        }
    }, {
        key: 'value',
        get: function get() {
            return this._value;
        },
        set: function set(val) {
            this.setValueFn(val);
        }
    }]);

    return GridItem;
}(_UI3.default);

;

_UI3.default.registerComponent('GridItem', GridItem);

exports.default = GridItem;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _UI2 = __webpack_require__(0);

var _UI3 = _interopRequireDefault(_UI2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = __webpack_require__(1);

/**
 * 
 * 
 * @class ListItem
 * @extends {UI}
 */

var ListItem = function (_UI) {
    _inherits(ListItem, _UI);

    function ListItem(options) {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, options));
    }

    _createClass(ListItem, [{
        key: 'create',
        value: function create() {
            var html = "";
            var _map = this.options.map;
            var _hook = this.options.hook;

            var splitLineHTML = '<div class="list-item-split-line"></div>';

            if (this.options.title) {
                html += '<div class="panel-title">' + this.options.title + '</div>' + splitLineHTML;
            }

            //first line
            html += '<div class="panel-body flex-vertical site-box wrap">';

            for (var i in _map) {

                html += '<div class="unit-0 site-box flex-left list-item" data-index = ' + i + ' value = ' + i + '>\n                        <span class="iconfont">' + _map[i].icon + '</span>\n                        <div class="title">\n                            <span class="' + (_map[i].subTitle ? 'maint' : 'maint_nosub') + '">' + _map[i].title + '</span>\n                            <span class="sub">' + _map[i].subTitle + '</span>\n                        </div>\n                        <div class="rightPart flex-right">\n                            <span class="rightw">' + _map[i].rightTitle + '</span>\n                            <span class="iconfont rightarrow">&#xe655;</span>\n                        </div>\n                    </div>';

                if (i + 1 < this.options.map.length) {
                    html += splitLineHTML;
                }
            }

            html = '<div class="panel">' + html + '</div>';

            $(_hook).append(html);
        }
    }, {
        key: 'initEventFn',
        value: function initEventFn() {
            var _this2 = this;

            var item = this.selector();
            $(document).on('click', item, function (e) {
                _this2.fn(e);
            });
            // 绑定触摸事件
            var hoverClass = 'list-item-hover';
            $(document).on('touchstart', item, function (e) {
                var $this = $(e.currentTarget);
                $this.addClass(hoverClass);
            });
            $(document).on('touchend', item, function (e) {
                var $this = $(e.currentTarget);
                $this.removeClass(hoverClass);
            });
        }
    }, {
        key: 'fn',
        value: function fn(e) {
            var $this = $(e.currentTarget);
            var index = $this.data('index');
            var selected = this.options.map[index];
            var _map = this._unclickMap;
            if (_map.indexOf(index.toString()) === -1) {
                if (this.options.beforeTap) {
                    this.options.beforeTap();
                }
                if (this.options.onTap) {
                    this.options.onTap(selected, $this);
                }
                if (this.options.afterTap) {
                    this.options.afterTap();
                }
            }
        }
    }, {
        key: 'selector',
        value: function selector() {
            return this.options.hook + ' .list-item';
        }
    }, {
        key: 'setItemDisabled',
        value: function setItemDisabled(arr) {
            this._unclickMap = arr.index;
            var _map = arr.index;
            var _selector = this.selector();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    var _item = _selector + '[value=' + i + ']';
                    $(_item).addClass("disabled");
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'updateItem',
        value: function updateItem(updateOption) {
            var _index = Number(updateOption.index);
            var _upMap = updateOption.map;
            var _curMap = this.options.map;
            //判断是否含有这个item
            var has = this.check(_index);
            if (has) {
                _curMap[_index].icon = _upMap.icon;
                _curMap[_index].title = _upMap.title;
                _curMap[_index].subTitle = _upMap.subTitle;
                _curMap[_index].rightTitle = _upMap.rightTitle;
                this.refresh();
            } else {
                throw 'do not has this item ' + _index;
            }
        }
    }, {
        key: 'check',
        value: function check(index) {
            var length = this.options.map.length;
            if (index + 1 > length) {
                return false;
            } else {
                return true;
            }
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            var _hook = this.options.hook;
            $(_hook).empty();
            this.create();
        }
    }, {
        key: 'disabled',
        value: function disabled() {
            _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'disabled', this).call(this);
            var selector = this.selector();
            $(selector).addClass("disabled");
            $(document).off("click", selector);
        }
    }, {
        key: 'enable',
        value: function enable() {
            var _this3 = this;

            _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'enable', this).call(this);
            var selector = this.selector();
            $(selector).removeClass("disabled");
            $(document).on("click", selector, function (e) {
                _this3.fn(e);
            });
        }
    }]);

    return ListItem;
}(_UI3.default);

_UI3.default.registerComponent('ListItem', ListItem);

exports.default = ListItem;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UI = __webpack_require__(0);

var _UI2 = _interopRequireDefault(_UI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = __webpack_require__(1);

var win = window;
var doc = document;

var MultiScroll = function () {
    function MultiScroll(config) {
        _classCallCheck(this, MultiScroll);

        this.input = config.input;
        this.container = config.container;
        this.jsonData = config.jsonData;
        this.success = config.success;

        this.ulCount = 0;
        this.ulIdx = 0;
        this.ulDomArr = [];
        this.idxArr = [];
        this.jsonArr = [];
        this.liHeight = 40;
        this.maxHeight = [];
        this.distance = [];
        this.start = {
            Y: 0,
            time: ''
        };
        this.move = {
            Y: 0,
            speed: []
        };
        this.end = {
            Y: 0,
            status: true
        };
        this.resultArr = [];
        this.initDomFuc();
        this.initReady(0, this.jsonData[0]);
        this.initBinding();
    }

    _createClass(MultiScroll, [{
        key: '$id',
        value: function $id(id) {
            return doc.getElementById(id);
        }
    }, {
        key: '$class',
        value: function $class(name) {
            return doc.getElementsByClassName(name);
        }
    }, {
        key: 'loop',
        value: function loop(begin, length, fuc) {
            for (var i = begin; i < length; i++) {
                if (fuc(i)) break;
            }
        }
    }, {
        key: 'on',
        value: function on(action, selector, callback) {
            doc.addEventListener(action, function (e) {
                if (selector == e.target.tagName.toLowerCase() || selector == e.target.className || selector == e.target.id) {
                    callback(e);
                }
            });
        }
    }, {
        key: 'generateArrData',
        value: function generateArrData(targetArr) {
            var tempArr = [];
            loop(0, targetArr.length, function (i) {
                tempArr.push({
                    "id": targetArr[i].id,
                    "value": targetArr[i].value
                });
            });
            return tempArr;
        }
    }, {
        key: 'checkArrDeep',
        value: function checkArrDeep(parent) {
            var _this = this;
            if ('child' in parent && parent.child.length > 0) {
                _this.jsonArr.push(_this.generateArrData(parent.child));
                _this.checkArrDeep(parent.child[0]);
            }
            _this.idxArr.push(this.ulIdx++);
        }
    }, {
        key: 'insertLiArr',
        value: function insertLiArr(targetUl, arr) {
            var html = '';
            var nullObj = {
                id: '-99',
                value: ''
            };
            arr.unshift(nullObj, nullObj);
            arr.push(nullObj, nullObj);
            this.loop(0, arr.length, function (i) {
                html += '<li data-id="' + arr[i].id + '">' + arr[i].value + '</li>';
            });
            targetUl.innerHTML = html;
        }
    }, {
        key: 'initDomFuc',
        value: function initDomFuc() {
            var _this = this;
            var html = '';
            html += '<div class="multi-picker-bg" id="multi-picker-bg-' + _this.container + '">' + '<div  class="multi-picker-container" id="multi-picker-container-' + _this.container + '">' + '<div class="multi-picker-btn-box">' + '<div class="multi-picker-btn" id="multi-picker-btn-cancel">返回</div>' + '<div class="multi-picker-btn" id="multi-picker-btn-save-' + _this.container + '">提交</div>' + '</div>' + '<div class="multi-picker-content">' + '<div class="multi-picker-up-shadow"></div>' + '<div class="multi-picker-down-shadow"></div>' + '<div class="multi-picker-line"></div>' + '</div></div></div>';
            this.$id(_this.container).innerHTML = html;
            _this.jsonArr.push(_this.generateArrData(_this.jsonData));
        }
    }, {
        key: 'initReady',
        value: function initReady(idx, target) {
            var _this = this;
            this.ulIdx = 0;
            this.idxArr.length = idx;
            _this.jsonArr.length = idx + 1;
            _this.checkArrDeep(target);
            var parentNode = this.$id('multi-picker-container-' + _this.container).children[1];
            var tempMax = _this.ulCount <= _this.idxArr.length ? _this.ulCount : _this.idxArr.length;
            this.loop(idx + 1, tempMax, function (i) {
                var $picker = _this.$id('multi-picker-' + _this.container + '-' + i);
                _this.insertLiArr($picker, _this.jsonArr[i]);
                _this.distance[i] = 0;
                $picker.style.transform = 'translate3d(0, 0, 0)';
                $picker.style.webkitTransform = 'translate3d(0, 0, 0)';
            });
            if (_this.ulCount <= _this.idxArr.length) {
                this.loop(_this.ulCount, _this.idxArr.length, function (i) {
                    var newPickerDiv = document.createElement('div');
                    newPickerDiv.setAttribute('class', 'multi-picker');
                    newPickerDiv.innerHTML = '<ul id="multi-picker-' + _this.container + '-' + i + '"></ul>';
                    parentNode.insertBefore(newPickerDiv, parentNode.children[parentNode.children.length - 3]);
                    var tempDomUl = _this.$id('multi-picker-' + _this.container + '-' + i);
                    _this.ulDomArr.push(tempDomUl);
                    _this.distance.push(0);
                    _this.insertLiArr(tempDomUl, _this.jsonArr[i]);

                    var tempArray = _this.jsonArr[i];
                    tempDomUl.addEventListener('touchstart', function () {
                        _this.touch(event, _this, tempDomUl, tempArray, i);
                    }, false);
                    tempDomUl.addEventListener('touchmove', function () {
                        _this.touch(event, _this, tempDomUl, tempArray, i);
                    }, false);
                    tempDomUl.addEventListener('touchend', function () {
                        _this.touch(event, _this, tempDomUl, tempArray, i);
                    }, true);
                });
            } else {
                for (var j = _this.ulCount - 1; j > _this.idxArr.length - 1; j--) {
                    var oldPicker = this.$id(_this.container).querySelectorAll('.multi-picker')[j];
                    oldPicker.parentNode.removeChild(oldPicker);
                    _this.ulDomArr.pop();
                    _this.distance.pop();
                }
            }

            _this.maxHeight.length = 0;
            _this.resultArr.length = 0;
            this.loop(0, _this.idxArr.length, function (i) {
                _this.$id(_this.container).querySelectorAll('.multi-picker')[i].style.width = 100 / _this.idxArr.length + '%';
                _this.maxHeight.push(_this.$id('multi-picker-' + _this.container + '-' + i).childNodes.length * _this.liHeight);
                _this.resultArr.push({
                    "id": _this.jsonArr[i][_this.distance[i] / _this.liHeight + 2].id,
                    "value": _this.jsonArr[i][_this.distance[i] / _this.liHeight + 2].value
                });
            });
            _this.ulCount = _this.idxArr.length;
        }
    }, {
        key: 'initBinding',
        value: function initBinding() {
            var _this = this;
            var bg = this.$id('multi-picker-bg-' + _this.container);
            var container = _this.$id('multi-picker-container-' + _this.container);
            var body = doc.body;
            this.on('touchstart', _this.input, function () {
                bg.classList.add('multi-picker-bg-up');
                container.classList.add('multi-picker-container-up');
                body.classList.add('multi-picker-locked');
            }, false);

            this.on('touchstart', 'multi-picker-btn-save-' + _this.container, function () {
                _this.success(_this.resultArr);
                bg.classList.remove('multi-picker-bg-up');
                container.classList.remove('multi-picker-container-up');
                body.classList.remove('multi-picker-locked');
            }, false);

            this.on('touchstart', 'multi-picker-bg-' + _this.container, function () {
                bg.classList.remove('multi-picker-bg-up');
                container.classList.remove('multi-picker-container-up');
                body.classList.remove('multi-picker-locked');
            }, false);

            this.on('touchstart', 'multi-picker-btn-cancel', function () {
                bg.classList.remove('multi-picker-bg-up');
                container.classList.remove('multi-picker-container-up');
                body.classList.remove('multi-picker-locked');
            }, false);
        }
    }, {
        key: 'checkRange',
        value: function checkRange(idx) {
            var _this = this;
            var tempObj = _this.jsonData;
            var targetIdx = 0;
            this.loop(0, idx + 1, function (i) {
                targetIdx = _this.distance[i] / _this.liHeight;
                tempObj = i == 0 ? tempObj[targetIdx] : tempObj.child[targetIdx];
            });
            _this.initReady(idx, tempObj);
        }
    }, {
        key: 'initPosition',
        value: function initPosition(dis, max, idx) {
            dis = dis < 0 ? 0 : dis;
            dis = dis > max ? max : dis;
            var sub = dis % this.liHeight;
            if (sub < this.liHeight / 2) {
                this.distance[idx] = dis - sub;
            } else {
                this.distance[idx] = dis + (this.liHeight - sub);
            }
            return this;
        }
    }, {
        key: 'initSpeed',
        value: function initSpeed(arr, dir, max, idx) {
            var variance = 0;
            var sum = 0;
            var rate = 0;
            for (var i in arr) {
                sum += arr[i] - 0;
            }
            for (var j in arr) {
                variance += (arr[j] - sum / arr.length) * (arr[j] - sum / arr.length);
            }
            if ((variance / arr.length).toFixed(2) > .1) {
                rate = max > this.liHeight * 15 ? dir * 2 : 0;
                this.initPosition(this.distance[idx] + rate, max - this.liHeight * 5, idx);
                this.move.speed[0] = .2;
            } else {
                this.initPosition(this.distance[idx], max, idx);
                this.move.speed[0] = this.move.speed[0] > 0.2 ? .2 : this.move.speed[0];
            }
        }
    }, {
        key: 'touch',
        value: function touch(event, that, $picker, array, idx) {
            event = event || window.event;
            event.preventDefault();
            switch (event.type) {
                case "touchstart":
                    if (that.end.status) {
                        that.end.status = !that.end.status;
                        event.preventDefault();
                        that.move.speed = [];
                        that.start.Y = event.touches[0].clientY;
                        that.start.time = Date.now();
                    }

                    break;
                case "touchend":
                    that.end.Y = Math.abs(event.changedTouches[0].clientY);
                    var tempDis = that.distance[idx] + (that.start.Y - that.end.Y);
                    var temp = that.distance[idx];
                    that.distance[idx] = tempDis < 0 ? 0 : tempDis < that.maxHeight[idx] - this.liHeight * 5 ? tempDis : that.maxHeight[idx] - this.liHeight * 5;
                    that.initSpeed(that.move.speed, that.start.Y - that.end.Y, that.maxHeight[idx], idx);

                    $picker.style.transform = 'translate3d(0,-' + that.distance[idx] + 'px, 0)';
                    $picker.style.webkitTransform = 'translate3d(0,-' + that.distance[idx] + 'px, 0)';
                    $picker.style.transition = 'transform ' + that.move.speed[0] + 's ease-out';
                    $picker.style.webkitTransition = '-webkit-transform ' + that.move.speed[0] + 's ease-out';
                    if (temp != that.distance[idx]) that.checkRange(idx);
                    setTimeout(function () {
                        that.end.status = true;
                    }, that.move.speed[0] * 1000);
                    break;
                case "touchmove":
                    event.preventDefault();
                    that.move.Y = event.touches[0].clientY;
                    var offset = that.start.Y - that.move.Y;
                    if (that.distance[idx] == 0 && offset < 0) {
                        $picker.style.transform = 'translate3d(0,' + 1.5 * that.liHeight + 'px, 0)';
                        $picker.style.webkitTransform = 'translate3d(0,' + 1.5 * that.liHeight + 'px, 0)';
                        $picker.style.transition = 'transform 0.2s ease-out';
                        $picker.style.webkitTransition = '-webkit-transform 0.2s ease-out';
                    } else {
                        $picker.style.transform = 'translate3d(0,-' + (offset + that.distance[idx]) + 'px, 0)';
                        $picker.style.webkitTransform = 'translate3d(0,-' + (offset + that.distance[idx]) + 'px, 0)';
                    }
                    if (Math.abs(offset).toFixed(0) % 5 === 0) {
                        var time = Date.now();
                        that.move.speed.push((Math.abs(offset) / (time - that.start.time)).toFixed(2));
                    }
                    break;
            }
        }
    }]);

    return MultiScroll;
}();

_UI2.default.registerComponent('MultiScroll', MultiScroll);
exports.default = MultiScroll;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _UI2 = __webpack_require__(0);

var _UI3 = _interopRequireDefault(_UI2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = __webpack_require__(1);

/**
 *
 * @class SwiperSlide
 * @extends {UI}
 */

var SwiperSlide = function (_UI) {
    _inherits(SwiperSlide, _UI);

    function SwiperSlide(options) {
        _classCallCheck(this, SwiperSlide);

        // TODO: 添加配置检测方法
        // TODO: 预处理配置数据
        return _possibleConstructorReturn(this, (SwiperSlide.__proto__ || Object.getPrototypeOf(SwiperSlide)).call(this, options));
    }

    _createClass(SwiperSlide, [{
        key: 'create',
        value: function create() {
            this._hook = this.options.hook;
            this._title = this.options.title;
            this._type = this.getIndexOfType(this.options.type);
            this._showTip = this.options.showTip || false;

            this.setDefaultValue();
            this.sliderCommon();

            // 这里dom渲染后设置值
            if (this.options.map.defaultValue && this._type !== 3) {
                this.value = this.options.map.defaultValue;
            } else if (this.options.map.defaultValue && this._type === 3) {
                this.value = this.getIndexFromPointsTypeValueMap(this.options.map.defaultValue);
            }
        }
    }, {
        key: 'getIndexOfType',
        value: function getIndexOfType(type) {
            var TypeArr = ['common', 'widthBtn', 'withPoints'];
            var index = TypeArr.indexOf(type);
            if (index !== -1) {
                return index + 1;
            } else {
                throw 'check the type param again';
            }
        }
    }, {
        key: 'sliderCommon',
        value: function sliderCommon() {
            var html = '';
            var type = Number(this._type);

            var innerNode = this.createInner();
            var bottomVal = this.createBtm();

            html += '<div class="panel">';
            if (this.options.title) {
                html += '<div class="panel-title">' + this.options.title + '</div>';
            }

            html += '<div class="swiper-control">\n                    <div class="inner" id = "innerTrack">\n                        <!-- \u8F68\u9053 -->\n                        <div class="' + (type === 3 ? 'swiper-step-track flex-left' : 'swiper-track theme-block') + '"\n                            id = "track-inner"\n                            min="' + this.options.map.min + '"\n                            max="' + this.options.map.max + '"\n                            data-now = \'\'>\n                            ' + (type === 3 ? innerNode : "") + '\n                        </div>\n                        <!-- \u62C7\u6307 -->\n                        <div class="swiper-thumb theme-border" data-content =\'\'></div>\n                        <!-- \u6570\u503C -->\n                        <div class="swiper-num' + (type === 3 ? '2' : '') + ' flex-left">\n                            ' + bottomVal + '\n                        </div>\n                    </div>\n                </div>';

            if (type === 2) {
                html += '\n                    <!-- \u63A7\u5236 -->\n                    <div class="contorlPanel flex-right">\n                        <span class="plus-button" data-value ="plusBtn">+</span>\n                        <span class="minus-button" data-value ="minusBtn">-</span>\n                    </div>\n                    ';
            }

            $(this._hook).append(html);
        }
    }, {
        key: 'initEventFn',
        value: function initEventFn() {

            this.bindEvent_touchEvent_Group();
            this.bindEvent_tapEvent_Group();
        }
    }, {
        key: 'bindEvent_touchEvent_Group',
        value: function bindEvent_touchEvent_Group() {
            this.bindEvent_touchStart();
            this.bindEvent_touchMove();
            this.bindEvent_touchEnd();
        }
    }, {
        key: 'bindEvent_tapEvent_Group',
        value: function bindEvent_tapEvent_Group() {
            this.bindEvent_tapPlusButton();
            this.bindEvent_tapMinusButton();
        }
    }, {
        key: 'createInner',
        value: function createInner() {
            var html = "";
            if (this._type === 3 && this._valMap !== undefined) {
                for (var index = 0; index < this.options.map.max; index++) {
                    html += '<li></li>';
                }
            }
            return html;
        }
    }, {
        key: 'createBtm',
        value: function createBtm() {
            var html = "";
            if (this._type === 3 && this._nameMap !== undefined) {
                var arr = this._nameMap;
                for (var index = 0; index < this.options.map.max + 1; index++) {
                    html += '<span style = "width:' + 110 / arr.length + '%">' + arr[index] + '</span>';
                }
            } else {
                html += '\n                <span>' + this.options.map.min + '</span>\n                <span>' + this.options.map.max + '</span>\n            ';
            }
            return html;
        }
    }, {
        key: 'setDefaultValue',
        value: function setDefaultValue() {
            // 带刻度的步长
            if (this.options.map.step) {
                this._step = this.options.map.step;
            }
            if (this.options.map.valMap) {
                this._valMap = this.options.map.valMap;
            }
            if (this.options.map.nameMap) {
                this._nameMap = this.options.map.nameMap;
            }
        }
    }, {
        key: 'getIndexFromPointsTypeValueMap',
        value: function getIndexFromPointsTypeValueMap(value) {
            if (this._type === 3 && this._valMap.indexOf(value) !== -1) {
                return this._valMap.indexOf(value);
            } else {
                throw "please check your input value in valMap of options map";
            }
        }
    }, {
        key: 'bindEvent_touchStart',
        value: function bindEvent_touchStart() {
            var _this2 = this;

            $(document).on('touchstart', this.handlePoint.selector, function () {
                _this2.onSliding = true;
            });
        }
    }, {
        key: 'bindEvent_touchMove',
        value: function bindEvent_touchMove() {
            var self = this;
            $(document).on('touchmove', this.handlePoint.selector, function (event) {
                if (!self.onSliding) {
                    return;
                }
                if (event.cancelable) {
                    if (!event.defaultPrevented) {
                        event.preventDefault();
                    }
                }
                // TODO: 判断手指与控件的垂直距离，若太远，则设定 self.onSliding = false;
                console.log('[' + new Date() + '] touchmoving...');
                var handleElementPersentage = self.percentageForHandlePoint(event.touches[0].pageX);
                var targetValue = Math.round(handleElementPersentage * (self.options.map.max - self.options.map.min) + self.options.map.min);
                self.value = targetValue;
            });
        }
    }, {
        key: 'bindEvent_touchEnd',
        value: function bindEvent_touchEnd() {
            var _this3 = this;

            $(document).on('touchend', this.handlePoint.selector, function () {
                _this3.onSliding = false;
                if (_this3.options.onChange) {
                    if (_this3._type === 3) {
                        var targetIndex = _this3.options.map.valMap[_this3.value];
                        var targetName = _this3.options.map.nameMap[_this3.value];
                        _this3.options.onChange(_this3.value, targetIndex, targetName);
                    } else {
                        _this3.options.onChange(_this3.value);
                    }
                }
            });
        }
    }, {
        key: 'bindEvent_tapPlusButton',
        value: function bindEvent_tapPlusButton() {
            var _this4 = this;

            $(document).on('tap', this.handleButton.plus.selector, function () {
                _this4.value += 1;
                if (_this4.options.onPlus) {
                    _this4.options.onPlus(_this4.value);
                }
            });
        }
    }, {
        key: 'bindEvent_tapMinusButton',
        value: function bindEvent_tapMinusButton() {
            var _this5 = this;

            $(document).on('tap', this.handleButton.minus.selector, function () {
                _this5.value -= 1;
                if (_this5.options.onMinus) {
                    _this5.options.onMinus(_this5.value);
                }
            });
        }
    }, {
        key: 'percentageForHandlePoint',
        value: function percentageForHandlePoint(currentX) {
            // 根据传入的手指触摸点的 X 坐标，返回对应的控制点百分比
            var slideElement = $(this._hook + ' .inner');
            console.log(slideElement.width(), slideElement.offset().left);
            return (currentX - slideElement.offset().left) / slideElement.width();
        }
    }, {
        key: 'unbindEvent_touchFunction',
        value: function unbindEvent_touchFunction() {
            var trigger = this.handlePoint.selector;
            $(document).off('touchstart touchmove touchend', trigger);
        }
    }, {
        key: 'unbindEvent_tapFunction',
        value: function unbindEvent_tapFunction() {
            var trigger1 = this.handleButton.plus.selector;
            var trigger2 = this.handleButton.minus.selector;
            $(document).off('tap', trigger1);
            $(document).off('tap', trigger2);
        }
    }, {
        key: 'disabled',
        value: function disabled() {
            _get(SwiperSlide.prototype.__proto__ || Object.getPrototypeOf(SwiperSlide.prototype), 'disabled', this).call(this);
            $(this._hook).addClass('disabled');
            this.unbindEvent_touchFunction();
            this.unbindEvent_tapFunction();
        }
    }, {
        key: 'enable',
        value: function enable() {
            _get(SwiperSlide.prototype.__proto__ || Object.getPrototypeOf(SwiperSlide.prototype), 'enable', this).call(this);
            $(this._hook).removeClass('disabled');
            this.bindEvent_touchEvent_Group();
            this.bindEvent_tapEvent_Group();
        }
    }, {
        key: 'value',
        get: function get() {
            return _get(SwiperSlide.prototype.__proto__ || Object.getPrototypeOf(SwiperSlide.prototype), 'value', this);
        },
        set: function set(targetValue) {
            targetValue = Number(targetValue);
            console.warn('targetValue: ' + targetValue);
            var min = this.options.map.min;
            var max = this.options.map.max;
            var slideElement = $(this._hook + ' .inner');
            var innerTrack = document.getElementById('innerTrack').clientLeft;

            if (targetValue < min || targetValue > max) {
                return;
            }

            if (targetValue == this.value) {
                return;
            }

            if (this._type === 3 || !this._showTip) {
                var handleElementLeftPercentage = (targetValue - min) / (max - min) * 100;

                this.handlePoint.element.css('left', handleElementLeftPercentage + '%');
                // this.handlePoint.element
                //     .css({
                //         'transform': `translate3d(${handleElementLeftPercentage}px,0,0)`,
                //         '-webkit-transform': `translate3d(${handleElementLeftPercentage}px,0,0)`
                //     });
            } else {
                var _handleElementLeftPercentage = (targetValue - min) / (max - min) * 100;
                // this.handlePoint.element
                //     .css({
                //         'transform': `translate3d(${handleElementLeftPercentage}px,0,0)`,
                //         '-webkit-transform': `translate3d(${handleElementLeftPercentage}px,0,0)`
                //     })
                this.handlePoint.element.css('left', _handleElementLeftPercentage + '%').attr('data-content', targetValue);
            }
            _set(SwiperSlide.prototype.__proto__ || Object.getPrototypeOf(SwiperSlide.prototype), 'value', targetValue, this);
        }
    }, {
        key: 'handlePoint',
        get: function get() {
            // 用户给用户滑动操控的圆点
            return {
                element: $(this._hook + ' .swiper-thumb'),
                selector: this._hook + ' .swiper-thumb'
            };
        }
    }, {
        key: 'onSliding',
        get: function get() {
            return this._onSliding || false;
        },
        set: function set(v) {
            console.log(v);
            this._onSliding = !!v;
        }
    }, {
        key: 'handleButton',
        get: function get() {
            return {
                plus: {
                    selector: this._hook + ' .plus-button'
                },
                minus: {
                    selector: this._hook + ' .minus-button'
                }
            };
        }
    }]);

    return SwiperSlide;
}(_UI3.default);

_UI3.default.registerComponent('SwiperSlide', SwiperSlide);

exports.default = SwiperSlide;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _UI2 = __webpack_require__(0);

var _UI3 = _interopRequireDefault(_UI2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = __webpack_require__(1);

var SwitchCell = function (_UI) {
    _inherits(SwitchCell, _UI);

    function SwitchCell(options) {
        _classCallCheck(this, SwitchCell);

        return _possibleConstructorReturn(this, (SwitchCell.__proto__ || Object.getPrototypeOf(SwitchCell)).call(this, options));
    }

    _createClass(SwitchCell, [{
        key: 'create',
        value: function create() {
            this._hook = this.options.hook;
            this._title = this.options.title || '电源开关';
            this._type = this.getTypeIndexFn(this.options.type);

            this._map = this.options.map;
            var html = '';

            html = '<div class="panel">\n                    <div class="switch-control flex-left">\n                        <div class="switch-title">' + this._title + '</div>\n                        <div class="switch-btn-main">\n                            <input type="checkbox" name= "switch-cell-' + (this._type === 1 ? 'jd' : 'ali') + '">\n                            <label for="switch-cell-' + (this._type === 1 ? 'jd' : 'ali') + '"\n                                class="tapbtn iconfont">' + (this._type === 1 ? '&#xe6c5;' : '') + '</label>\n                        </div>\n\n                    </div>\n                </div>';

            $(this._hook).append(html);
        }
    }, {
        key: 'getTypeIndexFn',
        value: function getTypeIndexFn(type) {
            var typeArr = ['JD', 'Ali'];
            if (typeArr.indexOf(type) !== -1) {
                return typeArr.indexOf(type) + 1;
            } else {
                throw 'please check the type param again!';
            }
        }
    }, {
        key: 'getCheckBox',
        value: function getCheckBox() {
            if (this._type === 1) {
                return this._hook + ' :checkbox';
            } else {
                return this._hook + ' :checkbox';
            }
        }
    }, {
        key: 'getTapDom',
        value: function getTapDom() {
            var domSelector = this._hook + ' .tapbtn';
            return domSelector;
        }
    }, {
        key: 'bindSwitch_tap',
        value: function bindSwitch_tap() {
            var _this2 = this;

            var trigger = this.getTapDom();
            var that = this;
            $(document).on('tap', trigger, function (e) {
                if (that.isChecked) {
                    _this2.value = "1";
                } else {
                    _this2.value = "0";
                }

                if (_this2.options.onTap) {
                    _this2.options.onTap(_this2.value);
                }
            });
        }
    }, {
        key: 'unbindSwitch_tap',
        value: function unbindSwitch_tap() {
            var trigger = this.getTapDom();
            $(document).off('tap', trigger);
        }
    }, {
        key: 'initEventFn',
        value: function initEventFn() {
            this.bindSwitch_tap();
        }
    }, {
        key: 'disabled',
        value: function disabled() {
            _get(SwitchCell.prototype.__proto__ || Object.getPrototypeOf(SwitchCell.prototype), 'disabled', this).call(this);
            $(this._hook).addClass('disabled');
            this.unbindSwitch_tap();
            $(this.getCheckBox()).attr('disabled', 'disabled');
        }
    }, {
        key: 'enable',
        value: function enable() {
            _get(SwitchCell.prototype.__proto__ || Object.getPrototypeOf(SwitchCell.prototype), 'enable', this).call(this);
            $(this._hook).removeClass('disabled');
            this.bindSwitch_tap();
            $(this.getCheckBox()).removeAttr('disabled');
        }
    }, {
        key: 'isChecked',
        get: function get() {
            return !$(this.getCheckBox()).is(':checked');
        }
    }, {
        key: 'value',
        get: function get() {
            return this._value;
        },
        set: function set(nowValue) {
            // console.warn($(this.getCheckBox()));
            var labelElement = $(this._hook + ' label');
            if (nowValue === "1") {
                $(this.getCheckBox()).attr('checked', 'checked');
                labelElement.addClass('checked');
            } else {
                $(this.getCheckBox()).attr('checked', false);
                labelElement.removeClass('checked');
            }
            this._value = nowValue;
        }
    }]);

    return SwitchCell;
}(_UI3.default);

_UI3.default.registerComponent('SwitchCell', SwitchCell);
exports.default = SwitchCell;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UI2 = __webpack_require__(0);

var _UI3 = _interopRequireDefault(_UI2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_UI) {
    _inherits(Toast, _UI);

    function Toast(options) {
        _classCallCheck(this, Toast);

        return _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, options));
    }

    _createClass(Toast, [{
        key: 'create',
        value: function create() {
            this.initParam();
            this.initDom();
        }
    }, {
        key: 'initParam',
        value: function initParam() {
            this._hook = this.options.hook;
            this._type = this.options.type;
            this._teplMap = this.options.teplMap;
        }
    }, {
        key: 'initDom',
        value: function initDom() {
            var html = '';

            var btnWrap = '';

            if (this._type === 'one') {
                btnWrap = '<span class = "toast_confirmBtn">\u6211\u77E5\u9053\u4E86</span>';
            } else if (this._type === 'two') {
                btnWrap = '<span class = "toast_okBtn">\u786E\u5B9A</span>\n                        <span class = "toast_cancelbtn">\u53D6\u6D88</span>';
            }

            html += '<div class="confirmHover">\n                    <div class="confirmWrap">\n                        <div class="cfm_main">\n                            <div class="cfm_title">' + this._teplMap.title + '</div>\n                            <div class="cfm_content">' + this._teplMap.content + '</div>\n                        </div>\n                        <div class="cfm_btnWrap flex-left">\n                            ' + btnWrap + '\n                        </div>\n                    </div>\n                </div>';
            $(this._hook).append(html);
        }
    }, {
        key: 'initEventFn',
        value: function initEventFn() {
            var _this2 = this;

            var hovers = 'list-item-hover';
            $(document).on('tap', this.getBtnDom().spanWrap, function (e) {
                var $this = $(e.currentTarget);
                if (e.target.classList[0] === 'toast_okBtn') {
                    _this2.options.letBtnFn(e);
                } else if (e.target.classList[0] === 'toast_cancelbtn') {
                    _this2.options.rightBtnFn(e);
                } else {
                    _this2.options.confirmBtn(e);
                }
            });
            $(document).on('touchstart', this.getBtnDom().spanWrap, function (e) {
                var $this = $(e.currentTarget);
                $this.addClass('hovers');
            });
            $(document).on('touchend', this.getBtnDom().spanWrap, function (e) {
                var $this = $(e.currentTarget);
                $this.removeClass('hovers');
            });
        }
    }, {
        key: 'getBtnDom',
        value: function getBtnDom() {
            return {
                spanWrap: this._hook + ' .cfm_btnWrap span',
                dom: this._hook + ' .confirmHover'
            };
        }
    }, {
        key: 'openConfirm',
        value: function openConfirm() {
            $(this.getBtnDom().dom).show();
            document.body.classList.add('bg_hover');
        }
    }, {
        key: 'closeConfirm',
        value: function closeConfirm() {
            $(this.getBtnDom().dom).hide();
            document.body.classList.remove('bg_hover');
        }
    }]);

    return Toast;
}(_UI3.default);

_UI3.default.registerComponent('Toast', Toast);
exports.default = Toast;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by huchunbo on 2017/2/26.
 */
var rules = {
    themeColor: function themeColor(value) {
        return ['.active-block { background-color: ' + value + '}', '.active-text { color: ' + value + '}', '.active-border { border-color: ' + value + '}', '.theme-block { background-color: ' + value + '}', '.theme-text { color: ' + value + '}', '.theme-border { border-color: ' + value + '}'];
    }
};

// 用于缓存已经设定的值
var styleValue = {
    themeColor: '#FF8650'
};

var ruleCount = 0;

// 更新样式方法
function updateStyle() {
    // alert('update style!');
    // 检测是否已创建 stylesheets，若没有，则创建
    var id = 'jd-ui-style';
    var styleElement = $('#' + id);
    if (styleElement.length === 0) {
        $('body').append('<style id="' + id + '"></style>');
    }
    var styleSheet = $('#' + id)[0].sheet;

    // 清除已有 stylesheets 内容
    for (var i = 0; i < ruleCount; i++) {

        if (styleSheet.removeRule) {
            styleSheet.removeRule(0);
        } else if (styleSheet.deleteRule) {
            styleSheet.deleteRule(0);
        }
    }

    // 添加 rules 到 stylesheets
    ruleCount = 0;

    for (var key in rules) {
        if (styleValue[key]) {
            var result = rules[key](styleValue[key]);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var resultItem = _step.value;

                    console.log('ruleCount = ' + ruleCount);
                    styleSheet.insertRule(resultItem, ruleCount);
                    ruleCount++;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }
};

// 对外开放接口，用于更新样式
var styleManager = {
    update: updateStyle
};

var _loop = function _loop(key) {
    Object.defineProperty(styleManager, key, {
        set: function set(targetValue) {
            styleValue[key] = targetValue;
            updateStyle();
        }
    });
};

for (var key in rules) {
    _loop(key);
}

exports.default = styleManager;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0; }\n\n.date-selector-locked {\n  height: 100% !important;\n  overflow: hidden !important; }\n\n.date-selector-bg2 {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 250px;\n  background: rgba(75, 75, 75, 0);\n  width: 100%;\n  overflow: hidden;\n  transition: all .3s ease;\n  -webkit-transition: all .3s ease;\n  z-index: -1; }\n\n.date-selector-bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(75, 75, 75, 0);\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  transition: all .3s ease;\n  -webkit-transition: all .3s ease;\n  z-index: -1; }\n\n.date-selector-bg-up {\n  z-index: 999 !important;\n  background: rgba(75, 75, 75, 0.65) !important; }\n\n.date-selector-bg-up2 {\n  z-index: 1 !important;\n  background: rgba(75, 75, 75, 0.65) !important; }\n\n.date-selector-container {\n  width: 100%;\n  height: 250px;\n  position: absolute;\n  bottom: 0;\n  transform: translate3d(0, 250px, 0);\n  -webkit-transform: translate3d(0, 250px, 0);\n  left: 0;\n  background-color: #FFF;\n  transition: transform .3s ease;\n  -webkit-transition: -webkit-transform .3s ease;\n  z-index: -1; }\n\n.date-selector-container2 {\n  width: 100%;\n  height: 250px;\n  position: absolute;\n  bottom: 0;\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n  left: 0;\n  background-color: #FFF;\n  transition: transform .3s ease;\n  -webkit-transition: -webkit-transform .3s ease;\n  z-index: -1; }\n\n.date-selector-container-up {\n  transform: translate3d(0, 0, 0) !important;\n  -webkit-transform: translate3d(0, 0, 0) !important; }\n\n.date-selector-btn-box {\n  display: block;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  background: rgba(218, 218, 218, 0.7);\n  z-index: 10; }\n  .date-selector-btn-box .date-selector-btn {\n    position: absolute;\n    display: inline-block;\n    margin: 0 20px;\n    color: #fff;\n    right: 0; }\n  .date-selector-btn-box .date-selector-btn:nth-child(1) {\n    left: 0;\n    right: initial; }\n\n.date-selector-tab-box {\n  display: inline-block;\n  border-radius: 10px;\n  margin: 9px 0;\n  height: 32px;\n  box-sizing: border-box;\n  line-height: 30px;\n  color: rgba(218, 218, 218, 0.7);\n  background: #fff;\n  border: 1px solid #fff; }\n  .date-selector-tab-box .date-selector-tab {\n    display: inline-block;\n    padding: 0 10px;\n    transition: all .3s ease; }\n    .date-selector-tab-box .date-selector-tab:first-child {\n      border-right: 1px solid #fff; }\n  .date-selector-tab-box .date-selector-tab-active {\n    color: #fff;\n    border-radius: 10px;\n    background: #dbdbdb; }\n\n.date-selector-content-left {\n  transform: translate3d(-100%, 0, 0) !important;\n  -webkit-transform: translate3d(-100%, 0, 0) !important; }\n\n.date-selector-content-right {\n  transform: translate3d(100%, 0, 0) !important;\n  -webkit-transform: translate3d(100%, 0, 0) !important; }\n\n.date-selector-content {\n  position: absolute;\n  width: 100%;\n  background: #fff;\n  font-size: 0;\n  top: 50px;\n  z-index: 10;\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n  transition: transform .3s ease;\n  -webkit-transition: -webkit-transform .3s ease; }\n  .date-selector-content .date-selector {\n    display: inline-block;\n    height: 200px;\n    overflow: hidden;\n    position: relative;\n    z-index: -1;\n    top: 0;\n    vertical-align: top; }\n  .date-selector-content .date-selector-left {\n    width: 33.33%; }\n  .date-selector-content .date-selector-right {\n    width: 50%; }\n  .date-selector-content ul::-webkit-scrollbar {\n    display: none; }\n  .date-selector-content li {\n    height: 40px;\n    text-align: center;\n    font-size: 16px;\n    line-height: 40px;\n    list-style: none; }\n  .date-selector-content .date-selector-up-shadow,\n  .date-selector-content .date-selector-down-shadow {\n    width: 100%;\n    height: 80px;\n    position: absolute;\n    pointer-events: none;\n    background-image: linear-gradient(to bottom, #FFF, rgba(255, 255, 255, 0));\n    z-index: 50; }\n  .date-selector-content .date-selector-up-shadow {\n    top: 0; }\n  .date-selector-content .date-selector-down-shadow {\n    bottom: 0;\n    z-index: 50;\n    background-image: linear-gradient(to top, #FFF, rgba(255, 255, 255, 0)); }\n  .date-selector-content .date-selector-line {\n    width: 95%;\n    height: 40px;\n    position: absolute;\n    top: 92px;\n    left: 50%;\n    pointer-events: none;\n    box-sizing: border-box;\n    border-top: 1px solid #DCDCDC;\n    border-bottom: 1px solid #DCDCDC;\n    transform: translate3d(-50%, 0, 0);\n    -webkit-transform: translate3d(-50%, 0, 0); }\n", "", {"version":3,"sources":["/./app/assets/DateSelector.scss"],"names":[],"mappings":"AAKA;EACI,WAAU;EACV,UAAS,EACZ;;AAED;EACI,wBAAsB;EACtB,4BAA0B,EAC7B;;AAED;EACI,mBAAkB;EAClB,OAAM;EACN,QAAO;EACP,cAAa;EACb,gCAA+B;EAE/B,YAAW;EACX,iBAAgB;EAChB,yBAAwB;EACxB,iCAAgC;EAChC,YAAW,EACd;;AAED;EACI,gBAAe;EACf,OAAM;EACN,QAAO;EACP,gCAA+B;EAC/B,aAAY;EACZ,YAAW;EACX,iBAAgB;EAChB,yBAAwB;EACxB,iCAAgC;EAChC,YAAW,EACd;;AAED;EACI,wBAAsB;EACtB,8CAA2C,EAC9C;;AAED;EACI,sBAAoB;EACpB,8CAA2C,EAC9C;;AAED;EACI,YAAW;EACX,cAAa;EACb,mBAAkB;EAClB,UAAS;EACT,oCAAmC;EACnC,4CAA2C;EAC3C,QAAO;EACP,uBAAsB;EACtB,+BAA8B;EAC9B,+CAA8C;EAC9C,YAAW,EACd;;AAED;EACI,YAAW;EACX,cAAa;EACb,mBAAkB;EAClB,UAAS;EACT,gCAA+B;EAC/B,wCAAuC;EACvC,QAAO;EACP,uBAAsB;EACtB,+BAA8B;EAC9B,+CAA8C;EAC9C,YAAW,EACd;;AAED;EACI,2CAAyC;EACzC,mDAAiD,EACpD;;AAED;EACI,eAAc;EACd,mBAAkB;EAClB,mBAAkB;EAClB,YAAW;EACX,aAzFa;EA0Fb,kBA1Fa;EA2Fb,qCAzFgC;EA0FhC,YAAW,EAYd;EApBD;IAUQ,mBAAkB;IAClB,sBAAqB;IACrB,eAAc;IACd,YAAW;IACX,SAAQ,EACX;EAfL;IAiBQ,QAAO;IACP,eAAc,EACjB;;AAGL;EACI,sBAAqB;EACrB,oBAAmB;EACnB,cAAa;EACb,aAAY;EACZ,uBAAsB;EACtB,kBAAiB;EACjB,gCA/GgC;EAgHhC,iBAAgB;EAChB,uBAAsB,EAczB;EAvBD;IAWQ,sBAAqB;IACrB,gBAAe;IACf,yBAAwB,EAI3B;IAjBL;MAeY,6BAA4B,EAC/B;EAhBT;IAmBQ,YAAW;IACX,oBAAmB;IACnB,oBA5HkC,EA6HrC;;AAGL;EACI,+CAA6C;EAC7C,uDAAqD,EACxD;;AAED;EACI,8CAA4C;EAC5C,sDAAoD,EACvD;;AAED;EACI,mBAAkB;EAClB,YAAW;EACX,iBAAgB;EAChB,aAAY;EACZ,UAAS;EACT,YAAW;EACX,gCAA+B;EAC/B,wCAAuC;EACvC,+BAA8B;EAC9B,+CAA8C,EAyDjD;EAnED;IAYQ,sBAAqB;IACrB,cAAqB;IACrB,iBAAgB;IAChB,mBAAkB;IAClB,YAAW;IACX,OAAM;IACN,oBAAmB,EACtB;EAnBL;IAqBQ,cAAa,EAChB;EAtBL;IAwBQ,WAAU,EACb;EAzBL;IA2BQ,cAAa,EAChB;EA5BL;IA8BQ,aA1KO;IA2KP,mBAAkB;IAClB,gBAAe;IACf,kBA7KO;IA8KP,iBAAgB,EACnB;EAnCL;;IAsCQ,YAAW;IACX,aAAqB;IACrB,mBAAkB;IAClB,qBAAoB;IACpB,2EAA0E;IAC1E,YAAW,EACd;EA5CL;IA8CQ,OAAM,EACT;EA/CL;IAiDQ,UAAS;IACT,YAAW;IACX,wEAAuE,EAC1E;EApDL;IAsDQ,WAAU;IACV,aAnMO;IAoMP,mBAAkB;IAElB,UAAS;IACT,UAAS;IACT,qBAAoB;IACpB,uBAAsB;IACtB,8BAA6B;IAC7B,iCAAgC;IAChC,mCAAkC;IAClC,2CAA0C,EAC7C","file":"DateSelector.scss","sourcesContent":["@charset \"UTF-8\";\n$headHeight: 50px;\n$liHeight: 40px;\n$styleColor: rgba(218, 218, 218, .7);\n$styleColorOpacity: rgba(219, 219, 219, 1);\n* {\n    padding: 0;\n    margin: 0;\n}\n\n.date-selector-locked {\n    height: 100%!important;\n    overflow: hidden!important;\n}\n\n.date-selector-bg2 {\n    position: relative;\n    top: 0;\n    left: 0;\n    height: 250px;\n    background: rgba(75, 75, 75, 0);\n    // height: 100%;\n    width: 100%;\n    overflow: hidden;\n    transition: all .3s ease;\n    -webkit-transition: all .3s ease;\n    z-index: -1;\n}\n\n.date-selector-bg {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(75, 75, 75, 0);\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    transition: all .3s ease;\n    -webkit-transition: all .3s ease;\n    z-index: -1;\n}\n\n.date-selector-bg-up {\n    z-index: 999!important;\n    background: rgba(75, 75, 75, .65)!important;\n}\n\n.date-selector-bg-up2 {\n    z-index: 1!important;\n    background: rgba(75, 75, 75, .65)!important;\n}\n\n.date-selector-container {\n    width: 100%;\n    height: 250px;\n    position: absolute;\n    bottom: 0;\n    transform: translate3d(0, 250px, 0);\n    -webkit-transform: translate3d(0, 250px, 0);\n    left: 0;\n    background-color: #FFF;\n    transition: transform .3s ease;\n    -webkit-transition: -webkit-transform .3s ease;\n    z-index: -1;\n}\n\n.date-selector-container2 {\n    width: 100%;\n    height: 250px;\n    position: absolute;\n    bottom: 0;\n    transform: translate3d(0, 0, 0);\n    -webkit-transform: translate3d(0, 0, 0);\n    left: 0;\n    background-color: #FFF;\n    transition: transform .3s ease;\n    -webkit-transition: -webkit-transform .3s ease;\n    z-index: -1;\n}\n\n.date-selector-container-up {\n    transform: translate3d(0, 0, 0)!important;\n    -webkit-transform: translate3d(0, 0, 0)!important;\n}\n\n.date-selector-btn-box {\n    display: block;\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    height: $headHeight;\n    line-height: $headHeight;\n    background: $styleColor;\n    z-index: 10;\n    & .date-selector-btn {\n        position: absolute;\n        display: inline-block;\n        margin: 0 20px;\n        color: #fff;\n        right: 0;\n    }\n    & .date-selector-btn:nth-child(1) {\n        left: 0;\n        right: initial;\n    }\n}\n\n.date-selector-tab-box {\n    display: inline-block;\n    border-radius: 10px;\n    margin: 9px 0;\n    height: 32px;\n    box-sizing: border-box;\n    line-height: 30px;\n    color: $styleColor;\n    background: #fff;\n    border: 1px solid #fff;\n    & .date-selector-tab {\n        display: inline-block;\n        padding: 0 10px;\n        transition: all .3s ease;\n        &:first-child {\n            border-right: 1px solid #fff;\n        }\n    }\n    & .date-selector-tab-active {\n        color: #fff;\n        border-radius: 10px;\n        background: $styleColorOpacity;\n    }\n}\n\n.date-selector-content-left {\n    transform: translate3d(-100%, 0, 0)!important;\n    -webkit-transform: translate3d(-100%, 0, 0)!important;\n}\n\n.date-selector-content-right {\n    transform: translate3d(100%, 0, 0)!important;\n    -webkit-transform: translate3d(100%, 0, 0)!important;\n}\n\n.date-selector-content {\n    position: absolute;\n    width: 100%;\n    background: #fff;\n    font-size: 0;\n    top: 50px;\n    z-index: 10;\n    transform: translate3d(0, 0, 0);\n    -webkit-transform: translate3d(0, 0, 0);\n    transition: transform .3s ease;\n    -webkit-transition: -webkit-transform .3s ease;\n    & .date-selector {\n        display: inline-block;\n        height: $liHeight * 5;\n        overflow: hidden;\n        position: relative;\n        z-index: -1;\n        top: 0;\n        vertical-align: top;\n    }\n    & .date-selector-left {\n        width: 33.33%;\n    }\n    & .date-selector-right {\n        width: 50%;\n    }\n    & ul::-webkit-scrollbar {\n        display: none;\n    }\n    & li {\n        height: $liHeight;\n        text-align: center;\n        font-size: 16px;\n        line-height: $liHeight;\n        list-style: none;\n    }\n    & .date-selector-up-shadow,\n    .date-selector-down-shadow {\n        width: 100%;\n        height: $liHeight * 2;\n        position: absolute;\n        pointer-events: none;\n        background-image: linear-gradient(to bottom, #FFF, rgba(255, 255, 255, 0));\n        z-index: 50;\n    }\n    & .date-selector-up-shadow {\n        top: 0;\n    }\n    & .date-selector-down-shadow {\n        bottom: 0;\n        z-index: 50;\n        background-image: linear-gradient(to top, #FFF, rgba(255, 255, 255, 0));\n    }\n    .date-selector-line {\n        width: 95%;\n        height: $liHeight;\n        position: absolute;\n        // top: $liHeight * 2;\n        top: 92px;\n        left: 50%;\n        pointer-events: none;\n        box-sizing: border-box;\n        border-top: 1px solid #DCDCDC;\n        border-bottom: 1px solid #DCDCDC;\n        transform: translate3d(-50%, 0, 0);\n        -webkit-transform: translate3d(-50%, 0, 0);\n    }\n}"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);\n  text-size-adjust: 100%; }\n\nbody {\n  background-color: #f3f3f3;\n  color: #333;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Hiragino Sans GB\", \"Microsoft Yahei\", \"\\5FAE\\8F6F\\96C5\\9ED1\", Arial, Helvetica, STHeiti, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1.8rem;\n  line-height: 1.5;\n  margin: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 32px 0 0; }\n\np,\nblockquote,\ntable,\nhr,\ndl,\nul,\nol,\npre,\naddress,\nfigure {\n  margin: 14px 0 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600; }\n\nh1 {\n  font-size: 3.2rem; }\n\nh2 {\n  font-size: 2.6rem; }\n\nh3 {\n  font-size: 2.4rem; }\n\nh4 {\n  font-size: 2.2rem; }\n\nh5 {\n  font-size: 2rem; }\n\nh6 {\n  font-size: 1.8rem; }\n\na {\n  color: #0080ff;\n  text-decoration: none;\n  -webkit-text-decoration-skip: objects; }\n  a:active, a:hover {\n    text-decoration: underline; }\n\nb,\nstrong,\ndt {\n  font-weight: 600; }\n\ncode,\nkbd,\nsamp {\n  background-color: rgba(0, 0, 0, 0.05);\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 85%;\n  padding: 0.1em 0.2em; }\n\npre {\n  max-height: 300px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: rgba(0, 0, 0, 0.05);\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1.3rem;\n  line-height: 1.2;\n  margin-left: -14px;\n  margin-right: -14px;\n  padding: 14px; }\n  pre code {\n    background-color: transparent;\n    font-size: 1.3rem;\n    padding: 0; }\n  @media (min-width: 740px) {\n    pre {\n      margin-left: 0;\n      margin-right: 0; } }\n\nblockquote {\n  border-left: 5px solid #ddd;\n  color: #777;\n  padding-left: 14px; }\n\nul,\nol {\n  padding-left: 28px; }\n\ndt,\ndd,\nol ol,\nul ul,\nol ul,\nul ol {\n  margin: 0; }\n\nhr {\n  border: 0;\n  border-top: 1px solid #ddd; }\n\nsmall {\n  font-size: 85%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\naddress,\ntime {\n  color: #777;\n  font-style: normal; }\n\nmark {\n  background-color: #ff0;\n  color: #333;\n  padding: 0 .2em; }\n\nabbr[title] {\n  border-bottom: 0;\n  text-decoration: underline;\n  text-decoration: underline dotted; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\nimg {\n  max-width: 100%;\n  vertical-align: middle; }\n\naudio,\nvideo {\n  width: 100%; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  outline: 0;\n  touch-action: manipulation; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit; }\n\nbutton,\nhtml [type=button],\n[type=reset],\n[type=submit],\n::-webkit-file-upload-button {\n  appearance: button; }\n\n[type=search] {\n  appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit; }\n\n[hidden] {\n  display: none; }\n\nfieldset {\n  border: 1px solid #ddd;\n  margin: 14px 0 0;\n  padding: 0 14px 14px; }\n\nlegend {\n  padding: 0 3px; }\n\noptgroup {\n  color: #777;\n  font-style: normal;\n  font-weight: normal; }\n\noption {\n  color: #333; }\n\nprogress {\n  width: 100%; }\n\n.container {\n  background-color: #fff;\n  max-width: 740px;\n  min-width: 320px;\n  outline: 14px solid #fff;\n  overflow: hidden;\n  padding: 0 14px 14px;\n  width: 100%; }\n\n@media (min-width: 1041px) {\n  .container {\n    max-width: 768px;\n    outline: 0;\n    padding: 0 28px 14px; } }\n\n.top-gap-big,\n.form .top-gap-big {\n  margin-top: 32px; }\n\n.top-gap,\n.form .top-gap {\n  margin-top: 14px; }\n\n.top-gap-0,\n.form .top-gap-0 {\n  margin-top: 0; }\n\n.flex-left,\n.flex-center,\n.flex-right,\n.flex-top,\n.flex-middle,\n.flex-bottom,\n.flex-vertical {\n  display: flex;\n  flex-flow: row nowrap; }\n\n.flex-left,\n.flex-center,\n.flex-right,\n.flex-top,\n.flex-middle,\n.flex-bottom,\n.flex-vertical.flex-left,\n.flex-vertical.flex-center,\n.flex-vertical.flex-right,\n.flex-vertical.flex-top,\n.flex-vertical.flex-middle,\n.flex-vertical.flex-bottom {\n  align-items: stretch;\n  justify-content: flex-start; }\n\n.flex-center,\n.flex-vertical.flex-middle {\n  justify-content: center; }\n\n.flex-right,\n.flex-vertical.flex-bottom {\n  justify-content: flex-end; }\n\n.flex-top,\n.flex-vertical.flex-left {\n  align-items: flex-start; }\n\n.flex-middle,\n.flex-vertical.flex-center {\n  align-items: center; }\n\n.flex-bottom,\n.flex-vertical.flex-right {\n  align-items: flex-end; }\n\n.units-gap {\n  margin-left: -7px;\n  margin-right: -7px; }\n  .units-gap > .unit,\n  .units-gap > .unit-0,\n  .units-gap > .unit-1-2,\n  .units-gap > .unit-1-3,\n  .units-gap > .unit-2-3,\n  .units-gap > .unit-1-4,\n  .units-gap > .unit-3-4 {\n    padding-left: 7px;\n    padding-right: 7px; }\n\n.unit {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.unit-1-2,\n.unit-1-3,\n.unit-2-3,\n.unit-1-4,\n.unit-3-4 {\n  flex-shrink: 0; }\n\n.unit-1-2 {\n  flex-basis: 50%;\n  max-width: 50%; }\n\n.unit-1-3 {\n  flex-basis: 33.33%;\n  max-width: 33.33%; }\n\n.unit-2-3 {\n  flex-basis: 66.67%;\n  max-width: 66.67%; }\n\n.unit-1-4 {\n  flex-basis: 25%;\n  max-width: 25%; }\n\n.unit-3-4 {\n  flex-basis: 75%;\n  max-width: 75%; }\n\n.flex-vertical {\n  flex-direction: column; }\n  .flex-vertical > .unit,\n  .flex-vertical > .unit-0,\n  .flex-vertical > .unit-1-2,\n  .flex-vertical > .unit-1-3,\n  .flex-vertical > .unit-2-3,\n  .flex-vertical > .unit-1-4,\n  .flex-vertical > .unit-3-4 {\n    max-width: none; }\n  .flex-vertical > .unit-1-2 {\n    max-height: 50%; }\n  .flex-vertical > .unit-1-3 {\n    max-height: 33.33%; }\n  .flex-vertical > .unit-2-3 {\n    max-height: 66.67%; }\n  .flex-vertical > .unit-1-4 {\n    max-height: 25%; }\n  .flex-vertical > .unit-3-4 {\n    max-height: 75%; }\n\n.table {\n  background-color: #fff;\n  border: 0;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%; }\n  .table caption {\n    caption-side: bottom;\n    color: #777;\n    padding: 5px;\n    text-align: left; }\n  .table th,\n  .table td {\n    border: 0;\n    border-bottom: 1px solid #ddd;\n    padding: 5px;\n    text-align: left; }\n  .table th {\n    background-color: rgba(0, 0, 0, 0.05);\n    font-weight: 600; }\n\n.form {\n  margin: 0; }\n  .form label {\n    cursor: pointer;\n    display: block;\n    line-height: 1.25;\n    margin-top: 14px;\n    padding-bottom: 6px;\n    padding-top: 6px; }\n  .form [type=text],\n  .form [type=password],\n  .form [type=email],\n  .form [type=search],\n  .form [type=url],\n  .form [type=tel],\n  .form [type=number],\n  .form textarea,\n  .form select {\n    appearance: none;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 3px;\n    color: #333;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Hiragino Sans GB\", \"Microsoft Yahei\", \"\\5FAE\\8F6F\\96C5\\9ED1\", Arial, Helvetica, STHeiti, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 1.8rem;\n    padding: 5px 10px;\n    display: block;\n    line-height: 1.25;\n    margin: 14px 0 0;\n    width: 100%; }\n    .form [type=text]:focus,\n    .form [type=password]:focus,\n    .form [type=email]:focus,\n    .form [type=search]:focus,\n    .form [type=url]:focus,\n    .form [type=tel]:focus,\n    .form [type=number]:focus,\n    .form textarea:focus,\n    .form select:focus {\n      border-color: #3399ff; }\n  @media (max-width: 1040px) {\n    .form [type=time],\n    .form [type=week],\n    .form [type=month],\n    .form [type=date],\n    .form [type=datetime-local] {\n      margin: 14px 0 0; } }\n  @media (min-width: 1041px) {\n    .form [type=time],\n    .form [type=week],\n    .form [type=month],\n    .form [type=date],\n    .form [type=datetime-local] {\n      appearance: none;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 3px;\n      color: #333;\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Hiragino Sans GB\", \"Microsoft Yahei\", \"\\5FAE\\8F6F\\96C5\\9ED1\", Arial, Helvetica, STHeiti, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n      font-size: 1.8rem;\n      padding: 5px 10px;\n      display: block;\n      line-height: 1.25;\n      margin: 14px 0 0;\n      width: 100%; }\n      .form [type=time]:focus,\n      .form [type=week]:focus,\n      .form [type=month]:focus,\n      .form [type=date]:focus,\n      .form [type=datetime-local]:focus {\n        border-color: #3399ff; } }\n  .form [type=checkbox],\n  .form [type=radio] {\n    cursor: pointer;\n    margin: 0 5px 0 0; }\n  .form select {\n    background: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'><path fill='#333' d='M0 0h32L16 20z'/></svg>\") right 8px center no-repeat;\n    background-size: 8px 8px;\n    padding-right: 25px;\n    cursor: pointer; }\n  .form [type=file],\n  .form [type=range] {\n    display: block;\n    line-height: 1.25;\n    margin: 14px 0 0;\n    width: 100%;\n    cursor: pointer;\n    padding: 6px 0; }\n  .form [type=color],\n  .form [type=image] {\n    cursor: pointer;\n    display: block;\n    margin: 14px 0 0; }\n  .form [disabled] {\n    cursor: default;\n    opacity: .5;\n    pointer-events: none; }\n  .form [readonly] {\n    background-color: #f3f3f3; }\n\n.btn {\n  display: block;\n  line-height: 1.25;\n  margin: 14px 0 0;\n  width: 100%;\n  appearance: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  color: #333;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Hiragino Sans GB\", \"Microsoft Yahei\", \"\\5FAE\\8F6F\\96C5\\9ED1\", Arial, Helvetica, STHeiti, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1.8rem;\n  padding: 5px 10px;\n  text-align: center;\n  background-color: #f3f3f3;\n  cursor: pointer; }\n  .btn:focus {\n    border-color: #3399ff; }\n  .btn:hover, .btn:active {\n    text-decoration: none; }\n  .btn[disabled] {\n    cursor: default;\n    opacity: .5;\n    pointer-events: none; }\n\n.btn-primary {\n  background-color: #40bf40;\n  border-color: #40bf40;\n  color: #fff; }\n  .btn-primary[disabled] {\n    cursor: default;\n    opacity: .5;\n    pointer-events: none; }\n\n.btn-danger {\n  color: #cc0000; }\n  .btn-danger[disabled] {\n    cursor: default;\n    opacity: .5;\n    pointer-events: none; }\n\n@media (max-width: 1040px) {\n  .hide-on-mobile {\n    display: none; } }\n\n@media (min-width: 1041px) {\n  .show-on-mobile {\n    display: none; } }\n\n.scroll-view {\n  max-height: 300px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.text-muted {\n  color: #777; }\n\na.text-muted {\n  color: #777;\n  text-decoration: underline; }\n\n/* public */\nbody {\n  background-color: #F0F0F0; }\n\nul,\nli,\ndl,\ndt,\ndd {\n  list-style: none; }\n\n.active-block {\n  color: #ffffff; }\n\n.animation-quick, .grid-item, .swiper-control .inner .swiper-thumb {\n  transition: all 0.1s ease; }\n\n.animation, .grid-item:before, .list-item:before, label[for=\"switch-cell-jd\"] {\n  transition: all 0.3s ease; }\n\n.animation-slow {\n  transition: all 0.8s ease; }\n\n.animation-switch, label[for=\"switch-cell-ali\"], label[for=\"switch-cell-ali\"]::after {\n  transition: all 0.4s ease; }\n\n.bg_hover {\n  height: 100% !important;\n  overflow: hidden !important; }\n\n.testSpan {\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  margin: 0 5px; }\n\n/* panel */\n.panel {\n  background-color: #ffffff;\n  margin: 8px;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  overflow: hidden; }\n\n.panel-title {\n  height: 48px;\n  padding-left: 12px;\n  padding-right: 12px;\n  line-height: 48px;\n  font-size: 16px;\n  color: #464646; }\n\n.ui_wrap {\n  flex-wrap: wrap; }\n\n.ui_wrap div[class~=\"unit-1-4\"].disabled,\n.ui_wrap div[class~=\"unit-1-3\"].disabled {\n  opacity: 0.5; }\n\n.ui_wrap div[class~=\"unit-1-4\"] .mode_name,\n.ui_wrap div[class~=\"unit-1-3\"] .mode_name {\n  display: block;\n  font-size: 1.4rem; }\n\n@font-face {\n  font-family: 'iconfont';\n  /* project id 87760 */\n  src: url(\"https://at.alicdn.com/t/font_svndvyyea8fo5hfr.eot\");\n  src: url(\"https://at.alicdn.com/t/font_svndvyyea8fo5hfr.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://at.alicdn.com/t/font_svndvyyea8fo5hfr.woff\") format(\"woff\"), url(\"https://at.alicdn.com/t/font_svndvyyea8fo5hfr.ttf\") format(\"truetype\"), url(\"https://at.alicdn.com/t/font_svndvyyea8fo5hfr.svg#iconfont\") format(\"svg\"); }\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 26px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale; }\n\n.wrap {\n  background: #fff; }\n\ndiv[class~=\"unit-0\"].disabled {\n  opacity: 0.5; }\n\ndiv[class~=\"unit-0\"] .title {\n  width: 65%;\n  line-height: 30px;\n  padding-left: 10px; }\n\ndiv[class~=\"unit-0\"] .title .maint {\n  font-size: 16px;\n  line-height: 30px;\n  display: block; }\n\ndiv[class~=\"unit-0\"] .title .maint_nosub {\n  display: block;\n  line-height: 40px; }\n\ndiv[class~=\"unit-0\"] .title .sub {\n  font-size: 12px;\n  line-height: 12px;\n  display: block; }\n\ndiv[class~=\"unit-0\"] .rightPart {\n  width: 25%;\n  font-size: 16px;\n  line-height: 40px; }\n\ndiv[class~=\"unit-0\"] .rightPart .rightarrow {\n  font-size: 16px; }\n\n/* Grid Item */\n.grid-item {\n  position: relative;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-color: #E5E5E5;\n  border-width: 0;\n  border-right-width: 1px;\n  border-bottom-width: 1px;\n  border-style: solid;\n  color: #A6A6A6; }\n\n.grid-item.active-block {\n  color: #ffffff; }\n\n.grid-item.no-right-border {\n  border-right-width: 0; }\n\n.grid-item.no-bottom-border {\n  border-bottom-width: 0; }\n\n.grid-item:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent; }\n\n.grid-item.grid-item-hover:before {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n/* List Item */\n.list-item {\n  position: relative;\n  padding: 8px 10px; }\n\n.list-item:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent; }\n\n.list-item.list-item-hover:before {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.list-item-split-line {\n  width: 100%;\n  height: 1px;\n  background-color: #E5E5E5; }\n\n/* Swiper Slide */\n.swiper-wrap-normal,\n.swiper-wrap-controlpanel,\n.swiper-wrap-hasbar,\n.swiper-step,\n.switch-cell {\n  position: relative; }\n\n.swiper-wrap-normal.disabled,\n.swiper-wrap-controlpanel.disabled,\n.swiper-wrap-hasbar.disabled,\n.swiper-step.disabled,\n.switch-cell.disabled {\n  opacity: 0.5; }\n\n.disabled {\n  opacity: 0.5; }\n\n.swiper-control {\n  margin: 25px 20px;\n  position: relative; }\n\n.swiper-control .inner {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1; }\n\n.swiper-control .inner .swiper-track,\n.swiper-control .inner .swiper-step-track {\n  position: relative;\n  top: 2px;\n  height: 1px;\n  border-radius: 5px; }\n\n.swiper-control .inner .swiper-step-track {\n  background: #ccc; }\n\n.swiper-control .inner .swiper-step-track li {\n  width: 20%; }\n\n.swiper-control .inner .swiper-step-track li:first-child::before {\n  content: '';\n  float: left;\n  width: 5px;\n  height: 5px;\n  background: green; }\n\n.swiper-control .inner .swiper-step-track li::after {\n  content: '';\n  float: right;\n  width: 5px;\n  height: 5px;\n  background: green; }\n\n.swiper-control .inner .swiper-thumb {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #f1f1f1;\n  border-width: 2px;\n  border-style: solid;\n  top: -9px;\n  z-index: 2;\n  cursor: pointer;\n  left: 0;\n  margin-left: -12px;\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n  transition: transform 0.1s linear;\n  -webkit-transition: transform 0.1s linear;\n  background-image: linear-gradient(-180deg, #FEFFFF 0%, #F6F1F1 100%); }\n\n.swiper-control .inner .swiper-thumb::before {\n  position: absolute;\n  content: attr(data-content);\n  left: 0;\n  bottom: -24px;\n  width: 100px;\n  text-align: center;\n  margin-left: -38px;\n  font-size: 15px;\n  color: #A6A6A6;\n  line-height: 20px; }\n\n.swiper-control .inner .swiper-num {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 15px;\n  color: #A6A6A6;\n  line-height: 20px; }\n\n.swiper-control .inner .swiper-num2 {\n  margin-top: 15px;\n  color: #464646;\n  font-size: 12px;\n  width: 120%;\n  margin-left: -10%;\n  text-align: center; }\n\n.contorlPanel {\n  width: 120px;\n  position: absolute;\n  right: 20px;\n  top: 10px; }\n\n.contorlPanel span {\n  width: 50px;\n  padding: 2px 15px;\n  border: 1px solid #E5E5E5;\n  border-radius: 10px;\n  text-align: center;\n  border-radius: 33px; }\n\n.contorlPanel .plus-button {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.contorlPanel .minus-button {\n  border-left: none;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n/* Switch Cell */\n.switch-control {\n  padding-left: 12px;\n  padding-right: 12px;\n  margin: 10px 0; }\n\n.switch-title {\n  line-height: 52px;\n  width: 86%; }\n\n.switch-btn {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  text-align: center;\n  line-height: 45px; }\n\n.switch-btn.on {\n  background: #ff6600;\n  color: #fff; }\n\n.switch-btn-main {\n  position: relative; }\n\ninput[type='checkbox'] {\n  display: none; }\n\nlabel[for=\"switch-cell-jd\"] {\n  width: 45px;\n  height: 45px;\n  display: inline-block;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  position: relative;\n  top: 4px;\n  text-align: center;\n  line-height: 45px; }\n\ninput[type='checkbox']:checked + label[for=\"switch-cell-jd\"] {\n  background: #ff6600;\n  color: #fff; }\n\nlabel[for=\"switch-cell-ali\"] {\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  border: 1px solid #ccc;\n  border-radius: 30px;\n  position: relative;\n  top: 11px;\n  background: #f0f0f0; }\n\nlabel[for=\"switch-cell-ali\"]::after {\n  display: block;\n  position: relative;\n  content: '';\n  width: 50%;\n  height: 100%;\n  background: #fff;\n  border-radius: 50%;\n  left: 0;\n  box-shadow: 0 0 2px #eee; }\n\ninput[type='checkbox']:checked, label[for='switch-cell-ali'].checked {\n  background: #9FD6AE; }\n\ninput[type='checkbox']:checked, label[for='switch-cell-ali'].checked::after {\n  left: 50%; }\n\n/*time scroll*/\n.scrollLine {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  height: 250px; }\n\n.scrollLine ul {\n  padding: 0;\n  width: 100%;\n  margin-top: 0;\n  overflow: hidden;\n  height: 200px; }\n\n.scrollLine li {\n  padding: 0;\n  text-align: center;\n  line-height: 28px;\n  font-size: 20px; }\n\n.scrollLine li.active {\n  font-size: 24px; }\n\n.scrollLine .topMask {\n  width: 100%;\n  height: 110px;\n  position: absolute;\n  top: 0;\n  background: -moz-linear-gradient(top, #f1f1f1, #fff);\n  background: -webkit-linear-gradient(top, #f1f1f1, #fff);\n  opacity: 0.9;\n  border-bottom: 1px solid #ccc; }\n\n.scrollLine .bottomMask {\n  width: 100%;\n  height: 110px;\n  position: absolute;\n  bottom: 0;\n  background: -moz-linear-gradient(bottom, #f1f1f1, #fff);\n  background: -webkit-linear-gradient(bottom, #f1f1f1, #fff);\n  opacity: 0.9;\n  border-top: 1px solid #ccc; }\n\n/*confirm toast*/\n.confirmHover {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(75, 75, 75, 0.65) !important;\n  z-index: 998;\n  top: 0;\n  left: 0;\n  display: none; }\n\n.confirmWrap {\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  left: 50%;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 0 2px #ccc;\n  z-index: 999; }\n\n.confirmWrap .cfm_main {\n  padding: 10px; }\n\n.confirmWrap .cfm_title {\n  text-align: center; }\n\n.confirmWrap .cfm_content {\n  padding: 10px 0;\n  font-size: 14px; }\n\n.confirmWrap .cfm_btnWrap {\n  position: relative; }\n\n.confirmWrap .cfm_btnWrap span {\n  width: 100%;\n  text-align: center;\n  line-height: 40px;\n  border-top: 1px solid #eee; }\n\n.confirmWrap .cfm_btnWrap span:first-child {\n  border-bottom-left-radius: 10px; }\n\n.confirmWrap .cfm_btnWrap span:last-child {\n  border-bottom-right-radius: 10px;\n  border-left: 1px solid #eee; }\n\n.hovers {\n  background: #eee; }\n", "", {"version":3,"sources":["/./app/assets/style.scss","/./app/assets/node_modules/mobi.css/src/_resets.scss","/./app/assets/node_modules/mobi.css/src/_variables.scss","/./app/assets/node_modules/mobi.css/src/_mixins.scss","/./app/assets/node_modules/mobi.css/src/_layout.scss","/./app/assets/node_modules/mobi.css/src/_flexbox.scss","/./app/assets/node_modules/mobi.css/src/_table.scss","/./app/assets/node_modules/mobi.css/src/_form.scss","/./app/assets/node_modules/mobi.css/src/_utilities.scss","/./app/assets/style.scss"],"names":[],"mappings":"AAAA,iBAAiB;ACcjB;EACE,uBAAsB,EACvB;;AAED;;;EAGE,oBAAmB,EACpB;;AAED;EAEE,gBCwEa;EDtEb,gDCIyC;EDFzC,uBAAsB,EACvB;;AAED;EACE,0BCf6B;EDgB7B,YCrBe;EDsBf,iSCiHuC;EDhHvC,kBC+DgB;ED9DhB,iBC+Ee;ED9Ef,UAAS,EACV;;AAOD;;;;;;EAME,iBAA0B,EAC3B;;AAED;;;;;;;;;;EAUE,iBAAsB,EACvB;;AAED;;;;;;EAME,iBCgDoB,ED/CrB;;AAED;EAAK,kBC0BgB,ED1BY;;AACjC;EAAK,kBC0BgB,ED1BY;;AACjC;EAAK,kBC0BgB,ED1BY;;AACjC;EAAK,kBC0BgB,ED1BY;;AACjC;EAAK,gBC0Bc,ED1Bc;;AACjC;EAAK,kBC0BgB,ED1BY;;AAEjC;EACE,eCxDmC;EDyDnC,sBAAqB;EAErB,sCAAqC,EAMtC;EAVD;IAQI,2BAA0B,EAC3B;;AAGH;;;EAGE,iBCuBoB,EDtBrB;;AAED;;;EAGE,sCCxFwC;EDyFxC,kFC8C0F;ED7C1F,eCKmB;EDJnB,qBC8CsB,ED7CvB;;AAED;EE/GE,kBDiK4B;EChK5B,eAAc;EACd,kCAAiC;EFiHjC,sCClGwC;EDmGxC,kFCoC0F;EDnC1F,kBCPoB;EDQpB,iBCEmB;EDAnB,mBCxDc;EDyDd,oBCzDc;ED0Dd,cC1Dc,EDuEf;EAxBD;IAeI,8BAA6B;IAC7B,kBCjBkB;IDkBlB,WAAU,EACX;EAED;IApBF;MAqBI,eAAc;MACd,gBAAe,EAElB,EAAA;;AAED;EACE,4BCtHiB;EDuHjB,YC7HqB;ED8HrB,mBC5Ec,ED6Ef;;AAED;;EAEE,mBChFqB,EDiFtB;;AAED;;;;;;EAME,UAAS,EACV;;AAED;EACE,UAAS;EACT,2BC3IiB,ED4IlB;;AAED;EACE,eCnDmB,EDoDpB;;AAGD;;EAEE,eCvDqB;EDwDrB,eAAc;EACd,mBAAkB;EAClB,yBAAwB,EACzB;;AAED;EACE,eAAc,EACf;;AAED;EACE,WAAU,EACX;;AAED;;EAEE,YC3KqB;ED4KrB,mBAAkB,EACnB;;AAED;EACE,uBCrJ0B;EDsJ1B,YClLe;EDmLf,gBAAe,EAChB;;AAED;EACE,iBAAgB;EAChB,2BAA0B;EAC1B,kCAAiC,EAClC;;AAQD;EACE,cAAa;EACb,UAAS,EACV;;AAED;EACE,gBAAe;EACf,uBAAsB,EACvB;;AAED;;EAEE,YAAW,EACZ;;ADjDD;EC8DE,gBAAe,EAChB;;AAGD;;;;;;;;;EASE,WAAU;EACV,2BAA0B,EAC3B;;AAED;;;;EAIE,cAAa,EACd;;AAED;;;;;EAOE,mBAAkB,EACnB;;ADlED;ECsEE,iBAAgB,EACjB;;AAGD;EACE,cAAa,EACd;;ADtED;ECyEE,cAAa,EACd;;AAED;EACE,uBCtQiB;EDuQjB,iBAAsB;EACtB,qBC5Nc,ED6Nf;;AAED;EACE,eCpGoB,EDqGrB;;AAED;EACE,YCtRqB;EDuRrB,mBAAkB;EAClB,oBAAmB,EACpB;;AAED;EACE,YC7Re,ED8RhB;;AAED;EACE,YAAW,EACZ;;AGhTD;EACE,uBFgBqB;EEfrB,iBAAmD;EACnD,iBFoFyB;EEnFzB,yBFaqB;EEZrB,iBAAgB;EAChB,qBF2Dc;EE1Dd,YAAW,EACZ;;AAED;EACE;IACE,iBF4EuB;IE3EvB,WAAU;IACV,qBFmDY,EElDb,EAAA;;AAGH;;EAEE,iBFiDkB,EEhDnB;;AAED;;EAEE,iBFwCc,EEvCf;;AAED;;EAEE,cAAa,EACd;;AC/BD;;;;;;;EFaE,cAAa;EACb,sBAAqB,EENtB;;AAED;;;;;;;;;;;;EAYE,qBAAoB;EACpB,4BAA2B,EAC5B;;AAED;;EAEE,wBAAuB,EACxB;;AAED;;EAEE,0BAAyB,EAC1B;;AAED;;EAEE,wBAAuB,EACxB;;AAED;;EAEE,oBAAmB,EACpB;;AAED;;EAEE,sBAAqB,EACtB;;AAED;EACE,kBHekB;EGdlB,mBHckB,EGFnB;EAdD;;;;;;;IAWI,kBHKgB;IGJhB,mBHIgB,EGHjB;;AAGH;EACE,cAAa;EACb,aAAY;EACZ,gBAAe,EAChB;;AAED;;;;;EAKE,eAAc,EACf;;AAED;EF/DE,gBEgEuB;EF/DvB,eE+DuB,EACxB;;AAED;EFnEE,mBEoE0B;EFnE1B,kBEmE0B,EAC3B;;AAED;EFvEE,mBEwE0B;EFvE1B,kBEuE0B,EAC3B;;AAED;EF3EE,gBE4EuB;EF3EvB,eE2EuB,EACxB;;AAED;EF/EE,gBEgFuB;EF/EvB,eE+EuB,EACxB;;AAED;EACE,uBAAsB,EA+BvB;EAhCD;;;;;;;IAUI,gBAAe,EAChB;EAXH;IAcI,gBAAe,EAChB;EAfH;IAkBI,mBAAkB,EACnB;EAnBH;IAsBI,mBAAkB,EACnB;EAvBH;IA0BI,gBAAe,EAChB;EA3BH;IA8BI,gBAAe,EAChB;;ACpIH;EAEE,uBJeqB;EIdrB,UAAS;EACT,0BAAyB;EACzB,kBAAiB;EAEjB,YAAW,EAqBZ;EA5BD;IAUI,qBAAoB;IACpB,YJImB;IIHnB,aJ2DqB;II1DrB,iBAAgB,EACjB;EAdH;;IAkBI,UAAS;IACT,8BJEe;IIDf,aJmDqB;IIlDrB,iBAAgB,EACjB;EAtBH;IAyBI,sCJPsC;IIQtC,iBJiGkB,EIhGnB;;AC3BH;EACE,UAAS,EA+EV;EAhFD;IAII,gBAAe;IACf,eAAc;IACd,kBLiHoB;IKhHpB,iBL0DY;IKzDZ,oBLoE4B;IKnE5B,iBLmE4B,EKlE7B;EAVH;;;;;;;;;IJ4BE,iBAAgB;IAChB,uBDZqB;ICarB,uBDTiB;ICUjB,mBDkJuB;IChJvB,YDnBe;ICoBf,iSDmHuC;IClHvC,kBDiEgB;IChEhB,kBD8I2D;ICtI3D,eAAc;IACd,kBD0EsB;ICzEtB,iBAAsB;IACtB,YAAW,EIvBV;IAxBH;;;;;;;;;MJuCI,sBDa0C,ECZ3C;EIdD;IA1BF;;;;;MAgCM,iBAAsB,EACvB,EAAA;EAGH;IApCF;;;;;MJ4BE,iBAAgB;MAChB,uBDZqB;MCarB,uBDTiB;MCUjB,mBDkJuB;MChJvB,YDnBe;MCoBf,iSDmHuC;MClHvC,kBDiEgB;MChEhB,kBD8I2D;MCtI3D,eAAc;MACd,kBD0EsB;MCzEtB,iBAAsB;MACtB,YAAW,EIHR;MA5CL;;;;;QJuCI,sBDa0C,ECZ3C,EAAA;EIxCH;;IAiDI,gBAAe;IACf,kBLsI8C,EKrI/C;EAnDH;IJOE,+MAAmE;IACnE,yBAAwB;IACxB,oBAAmB;II+CjB,gBAAe,EAChB;EAzDH;;IJ4CE,eAAc;IACd,kBD0EsB;ICzEtB,iBAAsB;IACtB,YAAW;IIeT,gBAAe;IACf,eLsHwC,EKrHzC;EAhEH;;IAoEI,gBAAe;IACf,eAAc;IACd,iBAAsB,EACvB;EAvEH;IJ8DE,gBAAe;IACf,YAAW;IACX,qBAAoB,EIWnB;EA3EH;IA8EI,0BL3D2B,EK4D5B;;AAGH;EJtCE,eAAc;EACd,kBD0EsB;ECzEtB,iBAAsB;EACtB,YAAW;EAnBX,iBAAgB;EAChB,uBDZqB;ECarB,uBDTiB;ECUjB,mBDkJuB;EChJvB,YDnBe;ECoBf,iSDmHuC;EClHvC,kBDiEgB;EChEhB,kBD8I2D;EC/H3D,mBAAkB;EAClB,0BDjC6B;ECkC7B,gBAAe,EI+BhB;EJ9CC;IACE,sBDa0C,ECZ3C;EAeD;IAEE,sBAAqB,EACtB;EAcD;IAVA,gBAAe;IACf,YAAW;IACX,qBAAoB,EAUnB;;AIYH;EJRE,0BDtB+C;ECuB/C,sBDvB+C;ECwB/C,YD/DqB,EKuEtB;EJNC;IApBA,gBAAe;IACf,YAAW;IACX,qBAAoB,EAoBnB;;AIMH;EJFE,eD/BuC,EKmCxC;EJFC;IA5BA,gBAAe;IACf,YAAW;IACX,qBAAoB,EA4BnB;;AK5FH;EACE;IACE,cAAa,EACd,EAAA;;AAGH;EACE;IACE,cAAa,EACd,EAAA;;AAGH;ELXE,kBDiK4B;EChK5B,eAAc;EACd,kCAAiC,EKWlC;;AAED;EACE,iBAAgB,EACjB;;AAED;EACE,mBAAkB,EACnB;;AAED;EACE,kBAAiB,EAClB;;AAED;EACE,YNdqB,EMetB;;AAED;EACE,YNlBqB;EMmBrB,2BAA0B,EAC3B;;ACjCD,YAAY;AAKZ;EACI,0BAAyB,EAC5B;;AAED;;;;;EAKI,iBAAgB,EACnB;;AAED;EACI,eAAc,EACjB;;AAED;EACI,0BAAyB,EAC5B;;AAED;EACI,0BAAyB,EAC5B;;AAED;EACI,0BAAyB,EAC5B;;AAED;EACI,0BAAyB,EAC5B;;AAED;EACI,wBAAuB;EACvB,4BAA2B,EAC9B;;AAED;EACI,aAAY;EACZ,uBAAsB;EACtB,oBAAmB;EACnB,cAAa,EAChB;;AAGD,WAAW;AAEX;EACI,0BAAyB;EACzB,YAAW;EACX,mBAAkB;EAClB,4CAA2C;EAC3C,iBAAgB,EACnB;;AAED;EACI,aAAY;EACZ,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,gBAAe;EACf,eAAc,EACjB;;AAED;EACI,gBAAe,EAClB;;AAQD;;EAEI,aAAY,EACf;;AAED;;EAEI,eAAc;EACd,kBAAiB,EACpB;;AAOD;EACI,wBAAuB;EACvB,sBAAsB;EACtB,8DAA6D;EAC7D,yUAAwU,EAAA;;AAG5U;EACI,mCAAkC;EAClC,gBAAe;EACf,mBAAkB;EAClB,oCAAmC;EACnC,iCAAgC;EAChC,mCAAkC,EACrC;;AAED;EACI,iBAAgB,EACnB;;AAOD;EACI,aAAY,EACf;;AAED;EACI,WAAU;EACV,kBAAiB;EACjB,mBAAkB,EACrB;;AAED;EACI,gBAAe;EACf,kBAAiB;EACjB,eACJ,EAAE;;AAEF;EACI,eAAc;EACd,kBAAiB,EACpB;;AAED;EACI,gBAAe;EACf,kBAAiB;EACjB,eAAc,EACjB;;AAED;EACI,WAAU;EACV,gBAAe;EACf,kBAAiB,EACpB;;AAED;EACI,gBAAe,EAClB;;AAGD,eAAe;AAEf;EAEI,mBAAkB;EAClB,kBAAiB;EACjB,qBAAoB;EACpB,sBAnKoB;EAoKpB,gBAAe;EACf,wBAAuB;EACvB,yBAAwB;EACxB,oBAAmB;EACnB,eAAc,EACjB;;AAED;EACI,eAAc,EACjB;;AAED;EACI,sBAAqB,EACxB;;AAED;EACI,uBAAsB,EACzB;;AAED;EAEI,mBAAkB;EAClB,YAAW;EACX,OAAM;EACN,QAAO;EACP,YAAW;EACX,aAAY;EACZ,8BA7L+B,EA8LlC;;AAED;EACI,qCAlM2B,EAmM9B;;AAGD,eAAe;AAEf;EACI,mBAAkB;EAClB,kBAAiB,EACpB;;AAED;EAEI,mBAAkB;EAClB,YAAW;EACX,OAAM;EACN,QAAO;EACP,YAAW;EACX,aAAY;EACZ,8BApN+B,EAqNlC;;AAED;EACI,qCAzN2B,EA0N9B;;AAED;EACI,YAAW;EACX,YAAW;EACX,0BAhOoB,EAiOvB;;AAGD,kBAAkB;AAGlB;;;;;EAKI,mBAAkB,EACrB;;AAED;;;;;EAKI,aAAY,EACf;;AAED;EACI,aAAY,EACf;;AAED;EACI,kBAAiB;EACjB,mBAAkB,EACrB;;AAED;EACI,oBAAmB;EACnB,gBAAe;EACf,QAAO,EACV;;AAED;;EAEI,mBAAkB;EAClB,SAAQ;EACR,YAAW;EAEX,mBAtCoB,EAuCvB;;AAED;EACI,iBAAgB,EACnB;;AAED;EACI,WAAU,EACb;;AAED;EACI,YAAW;EACX,YAAW;EACX,WAAU;EACV,YAAW;EACX,kBAAiB,EACpB;;AAED;EACI,YAAW;EACX,aAAY;EACZ,WAAU;EACV,YAAW;EACX,kBAAiB,EACpB;;AAED;EAEI,mBAAkB;EAClB,YAAW;EACX,aAAY;EACZ,mBAAkB;EAClB,oBAAmB;EACnB,kBAAiB;EACjB,oBAAmB;EACnB,UAAS;EACT,WAAU;EACV,gBAAe;EACf,QAAO;EACP,mBAAkB;EAClB,gCAA+B;EAC/B,wCAAuC;EACvC,kCAAiC;EACjC,0CAAyC;EACzC,qEAAoE,EACvE;;AAED;EACI,mBAAkB;EAClB,4BAA2B;EAC3B,QAAO;EACP,cAAa;EACb,aAAY;EACZ,mBAAkB;EAClB,mBAAkB;EAClB,gBAAe;EACf,eAAc;EACd,kBAAiB,EACpB;;AAED;EACI,iBAAgB;EAChB,cAAa;EACb,+BAA8B;EAC9B,gBAAe;EACf,eAAc;EACd,kBAAiB,EACpB;;AAED;EACI,iBAAgB;EAChB,eAAc;EACd,gBAAe;EACf,YAAW;EACX,kBAAiB;EACjB,mBAAkB,EACrB;;AAED;EACI,aAAY;EACZ,mBAAkB;EAClB,YAAW;EACX,UAAS,EACZ;;AAED;EAEQ,YAAW;EACX,kBAAiB;EACjB,0BAtWgB;EAuWhB,oBAAmB;EACnB,mBAAkB;EAClB,oBAAmB,EACtB;;AARL;EAUQ,8BAA6B;EAC7B,2BAA0B,EAC7B;;AAZL;EAcQ,kBAAiB;EACjB,6BAA4B;EAC5B,0BAAyB,EAC5B;;AAIL,iBAAiB;AAEjB;EACI,mBAAkB;EAClB,oBAAmB;EACnB,eAAc,EACjB;;AAED;EACI,kBAAiB;EACjB,WAAU,EACb;;AAED;EACI,YAAW;EACX,aAAY;EACZ,mBAAkB;EAClB,uBAAsB;EACtB,mBAAkB;EAClB,kBAAiB,EACpB;;AAED;EACI,oBAA4B;EAC5B,YAAW,EACd;;AAED;EACI,mBACJ,EAAE;;AAEF;EACI,cAAa,EAChB;;AAED;EACI,YAAW;EACX,aAAY;EACZ,sBAAqB;EACrB,mBAAkB;EAClB,uBAAsB;EACtB,mBAAkB;EAClB,SAAQ;EACR,mBAAkB;EAClB,kBAAiB,EAEpB;;AAED;EACI,oBAA4B;EAC5B,YAAW,EACd;;AAED;EACI,sBAAqB;EACrB,YAAW;EACX,aAAY;EACZ,uBAAsB;EACtB,oBAAmB;EACnB,mBAAkB;EAClB,UAAS;EACT,oBAAmB,EAEtB;;AAED;EACI,eAAc;EACd,mBAAkB;EAClB,YAAW;EACX,WAAU;EACV,aAAY;EACZ,iBAAgB;EAChB,mBAAkB;EAClB,QAAO;EAEP,yBAAwB,EAC3B;;AAED;EACI,oBACJ,EAAE;;AAEF;EACI,UAAS,EACZ;;AAGD,eAAe;AAEf;EACI,mBAAkB;EAClB,cAAa;EACb,oBAAmB;EACnB,cAAa,EAChB;;AAED;EACI,WAAU;EACV,YAAW;EACX,cAAa;EACb,iBAAgB;EAChB,cAAa,EAChB;;AAED;EACI,WAAU;EACV,mBAAkB;EAClB,kBAAiB;EACjB,gBAAe,EAClB;;AAED;EACI,gBAAe,EAClB;;AAED;EACI,YAAW;EACX,cAAa;EACb,mBAAkB;EAClB,OAAM;EACN,qDAAqD;EACrD,wDAAuD;EACvD,aAAY;EACZ,8BAA6B,EAChC;;AAED;EACI,YAAW;EACX,cAAa;EACb,mBAAkB;EAClB,UAAS;EACT,wDAAwD;EACxD,2DAA0D;EAC1D,aAAY;EACZ,2BAA0B,EAC7B;;AAGD,iBAAiB;AAEjB;EACI,gBAAe;EACf,YAAW;EACX,aAAY;EACZ,8CAA6C;EAC7C,aAAY;EACZ,OAAM;EACN,QAAO;EACP,cAAa,EAChB;;AAED;EACI,aAAY;EACZ,mBAAkB;EAClB,SAAQ;EACR,sCAAqC;EACrC,UAAS;EACT,iBAAgB;EAChB,oBAAmB;EACnB,yBAAwB;EACxB,aAAY,EACf;;AAED;EAEQ,cAAa,EAChB;;AAHL;EAKQ,mBAAkB,EACrB;;AANL;EAQQ,gBAAe;EACf,gBAAe,EAClB;;AAVL;EAYQ,mBAAkB,EACrB;;AAbL;EAeQ,YAAW;EACX,mBAAkB;EAClB,kBAAiB;EACjB,2BAA0B,EAC7B;;AAnBL;EAqBQ,gCAA+B,EAClC;;AAtBL;EAwBQ,iCAAgC;EAChC,4BAA2B,EAC9B;;AAGL;EACI,iBAAgB,EACnB","file":"style.scss","sourcesContent":["@charset \"UTF-8\";\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);\n  text-size-adjust: 100%; }\n\nbody {\n  background-color: #f3f3f3;\n  color: #333;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Hiragino Sans GB\", \"Microsoft Yahei\", \"微软雅黑\", Arial, Helvetica, STHeiti, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1.8rem;\n  line-height: 1.5;\n  margin: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 32px 0 0; }\n\np,\nblockquote,\ntable,\nhr,\ndl,\nul,\nol,\npre,\naddress,\nfigure {\n  margin: 14px 0 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600; }\n\nh1 {\n  font-size: 3.2rem; }\n\nh2 {\n  font-size: 2.6rem; }\n\nh3 {\n  font-size: 2.4rem; }\n\nh4 {\n  font-size: 2.2rem; }\n\nh5 {\n  font-size: 2rem; }\n\nh6 {\n  font-size: 1.8rem; }\n\na {\n  color: #0080ff;\n  text-decoration: none;\n  -webkit-text-decoration-skip: objects; }\n  a:active, a:hover {\n    text-decoration: underline; }\n\nb,\nstrong,\ndt {\n  font-weight: 600; }\n\ncode,\nkbd,\nsamp {\n  background-color: rgba(0, 0, 0, 0.05);\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 85%;\n  padding: 0.1em 0.2em; }\n\npre {\n  max-height: 300px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: rgba(0, 0, 0, 0.05);\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1.3rem;\n  line-height: 1.2;\n  margin-left: -14px;\n  margin-right: -14px;\n  padding: 14px; }\n  pre code {\n    background-color: transparent;\n    font-size: 1.3rem;\n    padding: 0; }\n  @media (min-width: 740px) {\n    pre {\n      margin-left: 0;\n      margin-right: 0; } }\n\nblockquote {\n  border-left: 5px solid #ddd;\n  color: #777;\n  padding-left: 14px; }\n\nul,\nol {\n  padding-left: 28px; }\n\ndt,\ndd,\nol ol,\nul ul,\nol ul,\nul ol {\n  margin: 0; }\n\nhr {\n  border: 0;\n  border-top: 1px solid #ddd; }\n\nsmall {\n  font-size: 85%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\naddress,\ntime {\n  color: #777;\n  font-style: normal; }\n\nmark {\n  background-color: #ff0;\n  color: #333;\n  padding: 0 .2em; }\n\nabbr[title] {\n  border-bottom: 0;\n  text-decoration: underline;\n  text-decoration: underline dotted; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\nimg {\n  max-width: 100%;\n  vertical-align: middle; }\n\naudio,\nvideo {\n  width: 100%; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  outline: 0;\n  touch-action: manipulation; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit; }\n\nbutton,\nhtml [type=button],\n[type=reset],\n[type=submit],\n::-webkit-file-upload-button {\n  appearance: button; }\n\n[type=search] {\n  appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit; }\n\n[hidden] {\n  display: none; }\n\nfieldset {\n  border: 1px solid #ddd;\n  margin: 14px 0 0;\n  padding: 0 14px 14px; }\n\nlegend {\n  padding: 0 3px; }\n\noptgroup {\n  color: #777;\n  font-style: normal;\n  font-weight: normal; }\n\noption {\n  color: #333; }\n\nprogress {\n  width: 100%; }\n\n.container {\n  background-color: #fff;\n  max-width: 740px;\n  min-width: 320px;\n  outline: 14px solid #fff;\n  overflow: hidden;\n  padding: 0 14px 14px;\n  width: 100%; }\n\n@media (min-width: 1041px) {\n  .container {\n    max-width: 768px;\n    outline: 0;\n    padding: 0 28px 14px; } }\n\n.top-gap-big,\n.form .top-gap-big {\n  margin-top: 32px; }\n\n.top-gap,\n.form .top-gap {\n  margin-top: 14px; }\n\n.top-gap-0,\n.form .top-gap-0 {\n  margin-top: 0; }\n\n.flex-left,\n.flex-center,\n.flex-right,\n.flex-top,\n.flex-middle,\n.flex-bottom,\n.flex-vertical {\n  display: flex;\n  flex-flow: row nowrap; }\n\n.flex-left,\n.flex-center,\n.flex-right,\n.flex-top,\n.flex-middle,\n.flex-bottom,\n.flex-vertical.flex-left,\n.flex-vertical.flex-center,\n.flex-vertical.flex-right,\n.flex-vertical.flex-top,\n.flex-vertical.flex-middle,\n.flex-vertical.flex-bottom {\n  align-items: stretch;\n  justify-content: flex-start; }\n\n.flex-center,\n.flex-vertical.flex-middle {\n  justify-content: center; }\n\n.flex-right,\n.flex-vertical.flex-bottom {\n  justify-content: flex-end; }\n\n.flex-top,\n.flex-vertical.flex-left {\n  align-items: flex-start; }\n\n.flex-middle,\n.flex-vertical.flex-center {\n  align-items: center; }\n\n.flex-bottom,\n.flex-vertical.flex-right {\n  align-items: flex-end; }\n\n.units-gap {\n  margin-left: -7px;\n  margin-right: -7px; }\n  .units-gap > .unit,\n  .units-gap > .unit-0,\n  .units-gap > .unit-1-2,\n  .units-gap > .unit-1-3,\n  .units-gap > .unit-2-3,\n  .units-gap > .unit-1-4,\n  .units-gap > .unit-3-4 {\n    padding-left: 7px;\n    padding-right: 7px; }\n\n.unit {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.unit-1-2,\n.unit-1-3,\n.unit-2-3,\n.unit-1-4,\n.unit-3-4 {\n  flex-shrink: 0; }\n\n.unit-1-2 {\n  flex-basis: 50%;\n  max-width: 50%; }\n\n.unit-1-3 {\n  flex-basis: 33.33%;\n  max-width: 33.33%; }\n\n.unit-2-3 {\n  flex-basis: 66.67%;\n  max-width: 66.67%; }\n\n.unit-1-4 {\n  flex-basis: 25%;\n  max-width: 25%; }\n\n.unit-3-4 {\n  flex-basis: 75%;\n  max-width: 75%; }\n\n.flex-vertical {\n  flex-direction: column; }\n  .flex-vertical > .unit,\n  .flex-vertical > .unit-0,\n  .flex-vertical > .unit-1-2,\n  .flex-vertical > .unit-1-3,\n  .flex-vertical > .unit-2-3,\n  .flex-vertical > .unit-1-4,\n  .flex-vertical > .unit-3-4 {\n    max-width: none; }\n  .flex-vertical > .unit-1-2 {\n    max-height: 50%; }\n  .flex-vertical > .unit-1-3 {\n    max-height: 33.33%; }\n  .flex-vertical > .unit-2-3 {\n    max-height: 66.67%; }\n  .flex-vertical > .unit-1-4 {\n    max-height: 25%; }\n  .flex-vertical > .unit-3-4 {\n    max-height: 75%; }\n\n.table {\n  background-color: #fff;\n  border: 0;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%; }\n  .table caption {\n    caption-side: bottom;\n    color: #777;\n    padding: 5px;\n    text-align: left; }\n  .table th,\n  .table td {\n    border: 0;\n    border-bottom: 1px solid #ddd;\n    padding: 5px;\n    text-align: left; }\n  .table th {\n    background-color: rgba(0, 0, 0, 0.05);\n    font-weight: 600; }\n\n.form {\n  margin: 0; }\n  .form label {\n    cursor: pointer;\n    display: block;\n    line-height: 1.25;\n    margin-top: 14px;\n    padding-bottom: 6px;\n    padding-top: 6px; }\n  .form [type=text],\n  .form [type=password],\n  .form [type=email],\n  .form [type=search],\n  .form [type=url],\n  .form [type=tel],\n  .form [type=number],\n  .form textarea,\n  .form select {\n    appearance: none;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 3px;\n    color: #333;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Hiragino Sans GB\", \"Microsoft Yahei\", \"微软雅黑\", Arial, Helvetica, STHeiti, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 1.8rem;\n    padding: 5px 10px;\n    display: block;\n    line-height: 1.25;\n    margin: 14px 0 0;\n    width: 100%; }\n    .form [type=text]:focus,\n    .form [type=password]:focus,\n    .form [type=email]:focus,\n    .form [type=search]:focus,\n    .form [type=url]:focus,\n    .form [type=tel]:focus,\n    .form [type=number]:focus,\n    .form textarea:focus,\n    .form select:focus {\n      border-color: #3399ff; }\n  @media (max-width: 1040px) {\n    .form [type=time],\n    .form [type=week],\n    .form [type=month],\n    .form [type=date],\n    .form [type=datetime-local] {\n      margin: 14px 0 0; } }\n  @media (min-width: 1041px) {\n    .form [type=time],\n    .form [type=week],\n    .form [type=month],\n    .form [type=date],\n    .form [type=datetime-local] {\n      appearance: none;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 3px;\n      color: #333;\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Hiragino Sans GB\", \"Microsoft Yahei\", \"微软雅黑\", Arial, Helvetica, STHeiti, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n      font-size: 1.8rem;\n      padding: 5px 10px;\n      display: block;\n      line-height: 1.25;\n      margin: 14px 0 0;\n      width: 100%; }\n      .form [type=time]:focus,\n      .form [type=week]:focus,\n      .form [type=month]:focus,\n      .form [type=date]:focus,\n      .form [type=datetime-local]:focus {\n        border-color: #3399ff; } }\n  .form [type=checkbox],\n  .form [type=radio] {\n    cursor: pointer;\n    margin: 0 5px 0 0; }\n  .form select {\n    background: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'><path fill='#333' d='M0 0h32L16 20z'/></svg>\") right 8px center no-repeat;\n    background-size: 8px 8px;\n    padding-right: 25px;\n    cursor: pointer; }\n  .form [type=file],\n  .form [type=range] {\n    display: block;\n    line-height: 1.25;\n    margin: 14px 0 0;\n    width: 100%;\n    cursor: pointer;\n    padding: 6px 0; }\n  .form [type=color],\n  .form [type=image] {\n    cursor: pointer;\n    display: block;\n    margin: 14px 0 0; }\n  .form [disabled] {\n    cursor: default;\n    opacity: .5;\n    pointer-events: none; }\n  .form [readonly] {\n    background-color: #f3f3f3; }\n\n.btn {\n  display: block;\n  line-height: 1.25;\n  margin: 14px 0 0;\n  width: 100%;\n  appearance: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  color: #333;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Hiragino Sans GB\", \"Microsoft Yahei\", \"微软雅黑\", Arial, Helvetica, STHeiti, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1.8rem;\n  padding: 5px 10px;\n  text-align: center;\n  background-color: #f3f3f3;\n  cursor: pointer; }\n  .btn:focus {\n    border-color: #3399ff; }\n  .btn:hover, .btn:active {\n    text-decoration: none; }\n  .btn[disabled] {\n    cursor: default;\n    opacity: .5;\n    pointer-events: none; }\n\n.btn-primary {\n  background-color: #40bf40;\n  border-color: #40bf40;\n  color: #fff; }\n  .btn-primary[disabled] {\n    cursor: default;\n    opacity: .5;\n    pointer-events: none; }\n\n.btn-danger {\n  color: #cc0000; }\n  .btn-danger[disabled] {\n    cursor: default;\n    opacity: .5;\n    pointer-events: none; }\n\n@media (max-width: 1040px) {\n  .hide-on-mobile {\n    display: none; } }\n\n@media (min-width: 1041px) {\n  .show-on-mobile {\n    display: none; } }\n\n.scroll-view {\n  max-height: 300px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.text-muted {\n  color: #777; }\n\na.text-muted {\n  color: #777;\n  text-decoration: underline; }\n\n/* public */\nbody {\n  background-color: #F0F0F0; }\n\nul,\nli,\ndl,\ndt,\ndd {\n  list-style: none; }\n\n.active-block {\n  color: #ffffff; }\n\n.animation-quick, .grid-item, .swiper-control .inner .swiper-thumb {\n  transition: all 0.1s ease; }\n\n.animation, .grid-item:before, .list-item:before, label[for=\"switch-cell-jd\"] {\n  transition: all 0.3s ease; }\n\n.animation-slow {\n  transition: all 0.8s ease; }\n\n.animation-switch, label[for=\"switch-cell-ali\"], label[for=\"switch-cell-ali\"]::after {\n  transition: all 0.4s ease; }\n\n.bg_hover {\n  height: 100% !important;\n  overflow: hidden !important; }\n\n.testSpan {\n  padding: 5px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  margin: 0 5px; }\n\n/* panel */\n.panel {\n  background-color: #ffffff;\n  margin: 8px;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  overflow: hidden; }\n\n.panel-title {\n  height: 48px;\n  padding-left: 12px;\n  padding-right: 12px;\n  line-height: 48px;\n  font-size: 16px;\n  color: #464646; }\n\n.ui_wrap {\n  flex-wrap: wrap; }\n\n.ui_wrap div[class~=\"unit-1-4\"].disabled,\n.ui_wrap div[class~=\"unit-1-3\"].disabled {\n  opacity: 0.5; }\n\n.ui_wrap div[class~=\"unit-1-4\"] .mode_name,\n.ui_wrap div[class~=\"unit-1-3\"] .mode_name {\n  display: block;\n  font-size: 1.4rem; }\n\n@font-face {\n  font-family: 'iconfont';\n  /* project id 87760 */\n  src: url(\"https://at.alicdn.com/t/font_svndvyyea8fo5hfr.eot\");\n  src: url(\"https://at.alicdn.com/t/font_svndvyyea8fo5hfr.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://at.alicdn.com/t/font_svndvyyea8fo5hfr.woff\") format(\"woff\"), url(\"https://at.alicdn.com/t/font_svndvyyea8fo5hfr.ttf\") format(\"truetype\"), url(\"https://at.alicdn.com/t/font_svndvyyea8fo5hfr.svg#iconfont\") format(\"svg\"); }\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 26px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale; }\n\n.wrap {\n  background: #fff; }\n\ndiv[class~=\"unit-0\"].disabled {\n  opacity: 0.5; }\n\ndiv[class~=\"unit-0\"] .title {\n  width: 65%;\n  line-height: 30px;\n  padding-left: 10px; }\n\ndiv[class~=\"unit-0\"] .title .maint {\n  font-size: 16px;\n  line-height: 30px;\n  display: block; }\n\ndiv[class~=\"unit-0\"] .title .maint_nosub {\n  display: block;\n  line-height: 40px; }\n\ndiv[class~=\"unit-0\"] .title .sub {\n  font-size: 12px;\n  line-height: 12px;\n  display: block; }\n\ndiv[class~=\"unit-0\"] .rightPart {\n  width: 25%;\n  font-size: 16px;\n  line-height: 40px; }\n\ndiv[class~=\"unit-0\"] .rightPart .rightarrow {\n  font-size: 16px; }\n\n/* Grid Item */\n.grid-item {\n  position: relative;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-color: #E5E5E5;\n  border-width: 0;\n  border-right-width: 1px;\n  border-bottom-width: 1px;\n  border-style: solid;\n  color: #A6A6A6; }\n\n.grid-item.active-block {\n  color: #ffffff; }\n\n.grid-item.no-right-border {\n  border-right-width: 0; }\n\n.grid-item.no-bottom-border {\n  border-bottom-width: 0; }\n\n.grid-item:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent; }\n\n.grid-item.grid-item-hover:before {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n/* List Item */\n.list-item {\n  position: relative;\n  padding: 8px 10px; }\n\n.list-item:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent; }\n\n.list-item.list-item-hover:before {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.list-item-split-line {\n  width: 100%;\n  height: 1px;\n  background-color: #E5E5E5; }\n\n/* Swiper Slide */\n.swiper-wrap-normal,\n.swiper-wrap-controlpanel,\n.swiper-wrap-hasbar,\n.swiper-step,\n.switch-cell {\n  position: relative; }\n\n.swiper-wrap-normal.disabled,\n.swiper-wrap-controlpanel.disabled,\n.swiper-wrap-hasbar.disabled,\n.swiper-step.disabled,\n.switch-cell.disabled {\n  opacity: 0.5; }\n\n.disabled {\n  opacity: 0.5; }\n\n.swiper-control {\n  margin: 25px 20px;\n  position: relative; }\n\n.swiper-control .inner {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1; }\n\n.swiper-control .inner .swiper-track,\n.swiper-control .inner .swiper-step-track {\n  position: relative;\n  top: 2px;\n  height: 1px;\n  border-radius: 5px; }\n\n.swiper-control .inner .swiper-step-track {\n  background: #ccc; }\n\n.swiper-control .inner .swiper-step-track li {\n  width: 20%; }\n\n.swiper-control .inner .swiper-step-track li:first-child::before {\n  content: '';\n  float: left;\n  width: 5px;\n  height: 5px;\n  background: green; }\n\n.swiper-control .inner .swiper-step-track li::after {\n  content: '';\n  float: right;\n  width: 5px;\n  height: 5px;\n  background: green; }\n\n.swiper-control .inner .swiper-thumb {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #f1f1f1;\n  border-width: 2px;\n  border-style: solid;\n  top: -9px;\n  z-index: 2;\n  cursor: pointer;\n  left: 0;\n  margin-left: -12px;\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n  transition: transform 0.1s linear;\n  -webkit-transition: transform 0.1s linear;\n  background-image: linear-gradient(-180deg, #FEFFFF 0%, #F6F1F1 100%); }\n\n.swiper-control .inner .swiper-thumb::before {\n  position: absolute;\n  content: attr(data-content);\n  left: 0;\n  bottom: -24px;\n  width: 100px;\n  text-align: center;\n  margin-left: -38px;\n  font-size: 15px;\n  color: #A6A6A6;\n  line-height: 20px; }\n\n.swiper-control .inner .swiper-num {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 15px;\n  color: #A6A6A6;\n  line-height: 20px; }\n\n.swiper-control .inner .swiper-num2 {\n  margin-top: 15px;\n  color: #464646;\n  font-size: 12px;\n  width: 120%;\n  margin-left: -10%;\n  text-align: center; }\n\n.contorlPanel {\n  width: 120px;\n  position: absolute;\n  right: 20px;\n  top: 10px; }\n\n.contorlPanel span {\n  width: 50px;\n  padding: 2px 15px;\n  border: 1px solid #E5E5E5;\n  border-radius: 10px;\n  text-align: center;\n  border-radius: 33px; }\n\n.contorlPanel .plus-button {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.contorlPanel .minus-button {\n  border-left: none;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n/* Switch Cell */\n.switch-control {\n  padding-left: 12px;\n  padding-right: 12px;\n  margin: 10px 0; }\n\n.switch-title {\n  line-height: 52px;\n  width: 86%; }\n\n.switch-btn {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  text-align: center;\n  line-height: 45px; }\n\n.switch-btn.on {\n  background: #ff6600;\n  color: #fff; }\n\n.switch-btn-main {\n  position: relative; }\n\ninput[type='checkbox'] {\n  display: none; }\n\nlabel[for=\"switch-cell-jd\"] {\n  width: 45px;\n  height: 45px;\n  display: inline-block;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  position: relative;\n  top: 4px;\n  text-align: center;\n  line-height: 45px; }\n\ninput[type='checkbox']:checked + label[for=\"switch-cell-jd\"] {\n  background: #ff6600;\n  color: #fff; }\n\nlabel[for=\"switch-cell-ali\"] {\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  border: 1px solid #ccc;\n  border-radius: 30px;\n  position: relative;\n  top: 11px;\n  background: #f0f0f0; }\n\nlabel[for=\"switch-cell-ali\"]::after {\n  display: block;\n  position: relative;\n  content: '';\n  width: 50%;\n  height: 100%;\n  background: #fff;\n  border-radius: 50%;\n  left: 0;\n  box-shadow: 0 0 2px #eee; }\n\ninput[type='checkbox']:checked, label[for='switch-cell-ali'].checked {\n  background: #9FD6AE; }\n\ninput[type='checkbox']:checked, label[for='switch-cell-ali'].checked::after {\n  left: 50%; }\n\n/*time scroll*/\n.scrollLine {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  height: 250px; }\n\n.scrollLine ul {\n  padding: 0;\n  width: 100%;\n  margin-top: 0;\n  overflow: hidden;\n  height: 200px; }\n\n.scrollLine li {\n  padding: 0;\n  text-align: center;\n  line-height: 28px;\n  font-size: 20px; }\n\n.scrollLine li.active {\n  font-size: 24px; }\n\n.scrollLine .topMask {\n  width: 100%;\n  height: 110px;\n  position: absolute;\n  top: 0;\n  background: -moz-linear-gradient(top, #f1f1f1, #fff);\n  background: -webkit-linear-gradient(top, #f1f1f1, #fff);\n  opacity: 0.9;\n  border-bottom: 1px solid #ccc; }\n\n.scrollLine .bottomMask {\n  width: 100%;\n  height: 110px;\n  position: absolute;\n  bottom: 0;\n  background: -moz-linear-gradient(bottom, #f1f1f1, #fff);\n  background: -webkit-linear-gradient(bottom, #f1f1f1, #fff);\n  opacity: 0.9;\n  border-top: 1px solid #ccc; }\n\n/*confirm toast*/\n.confirmHover {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(75, 75, 75, 0.65) !important;\n  z-index: 998;\n  top: 0;\n  left: 0;\n  display: none; }\n\n.confirmWrap {\n  width: 250px;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  left: 50%;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 0 2px #ccc;\n  z-index: 999; }\n\n.confirmWrap .cfm_main {\n  padding: 10px; }\n\n.confirmWrap .cfm_title {\n  text-align: center; }\n\n.confirmWrap .cfm_content {\n  padding: 10px 0;\n  font-size: 14px; }\n\n.confirmWrap .cfm_btnWrap {\n  position: relative; }\n\n.confirmWrap .cfm_btnWrap span {\n  width: 100%;\n  text-align: center;\n  line-height: 40px;\n  border-top: 1px solid #eee; }\n\n.confirmWrap .cfm_btnWrap span:first-child {\n  border-bottom-left-radius: 10px; }\n\n.confirmWrap .cfm_btnWrap span:last-child {\n  border-bottom-right-radius: 10px;\n  border-left: 1px solid #eee; }\n\n.hovers {\n  background: #eee; }\n","// scss-lint:disable DuplicateProperty, MergeableSelector, QualifyingElement\n\n// Resets\n//\n// Global resets to common HTML elements.\n// Doesn't depend on any third party libraries.\n// Inspired by Normalise.css and bootstrap/_reboot.scss\n\n\n//\n// `html` and `body`\n//\n\n// Reset the box-sizing\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nhtml {\n  // `rem` based on the `font-size` of html\n  font-size: $rem-base;\n  // Changes the default tap highlight in iOS.\n  -webkit-tap-highlight-color: $color-background-active;\n  // Prevent adjustments of font size after orientation changes in IE and iOS.\n  text-size-adjust: 100%;\n}\n\nbody {\n  background-color: $color-background-body;\n  color: $color-text-body;\n  font-family: $font-family;\n  font-size: $font-size;\n  line-height: $line-height;\n  margin: 0;\n}\n\n\n//\n// Typography\n//\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: $width-gap-big 0 0;\n}\n\np,\nblockquote,\ntable,\nhr,\ndl,\nul,\nol,\npre,\naddress,\nfigure {\n  margin: $width-gap 0 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: $font-weight-bold;\n}\n\nh1 { font-size: $font-size-h1; }\nh2 { font-size: $font-size-h2; }\nh3 { font-size: $font-size-h3; }\nh4 { font-size: $font-size-h4; }\nh5 { font-size: $font-size-h5; }\nh6 { font-size: $font-size-h6; }\n\na {\n  color: $color-text-link;\n  text-decoration: none;\n  // Remove gaps in links underline in iOS 8+ and Safari 8+.\n  -webkit-text-decoration-skip: objects;\n\n  &:active,\n  &:hover {\n    text-decoration: underline;\n  }\n}\n\nb,\nstrong,\ndt {\n  font-weight: $font-weight-bold;\n}\n\ncode,\nkbd,\nsamp {\n  background-color: $color-background-code;\n  font-family: $font-family-monospace;\n  font-size: $font-size-code;\n  padding: $padding-code;\n}\n\npre {\n  // Mobile device has a small height, so we need to enable scroll-view\n  @include scroll-view();\n\n  background-color: $color-background-pre;\n  font-family: $font-family-monospace;\n  font-size: $font-size-pre;\n  line-height: $line-height-pre;\n  // Mobile device has a small height, so we need to set the width of pre to the device width\n  margin-left: -$width-gap;\n  margin-right: -$width-gap;\n  padding: $width-gap;\n\n  // Override the code styles\n  code {\n    background-color: transparent;\n    font-size: $font-size-pre;\n    padding: 0;\n  }\n\n  @media (min-width: $max-width-container - $width-gap-double) {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\nblockquote {\n  border-left: $border-left-blockquote;\n  color: $color-text-blockquote;\n  padding-left: $width-gap;\n}\n\nul,\nol {\n  padding-left: $width-gap-double;\n}\n\ndt,\ndd,\nol ol,\nul ul,\nol ul,\nul ol {\n  margin: 0;\n}\n\nhr {\n  border: 0;\n  border-top: $border-top-hr;\n}\n\nsmall {\n  font-size: $font-size-small;\n}\n\n// Prevent `sub` and `sup` elements from affecting the line height in all browsers.\nsub,\nsup {\n  font-size: $font-size-sub-sup;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -.25em;\n}\n\nsup {\n  top: -.5em;\n}\n\naddress,\ntime {\n  color: $color-text-muted;\n  font-style: normal;\n}\n\nmark {\n  background-color: $color-background-mark;\n  color: $color-text;\n  padding: 0 .2em;\n}\n\nabbr[title] {\n  border-bottom: 0;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n\n//\n// Embedded Content\n//\n\n// Add the correct display in iOS 4-7.\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nimg {\n  max-width: 100%;\n  vertical-align: middle;\n}\n\naudio,\nvideo {\n  width: 100%;\n}\n\n\n//\n// Forms\n//\n\n// iOS \"clickable elements\" fix for role=\"button\"\n//\n// Fixes \"clickability\" issue (and more generally, the firing of events such as focus as well)\n// for traditionally non-focusable elements with role=\"button\"\n// see https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n// Avoid 300ms click delay on touch devices that support the `touch-action` CSS property.\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  outline: 0;\n  touch-action: manipulation;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n}\n\nbutton,\n// Prevent a WebKit bug where (*) destroys native `audio` and `video` controls in Android 4.\nhtml [type=button],\n[type=reset],\n[type=submit],\n::-webkit-file-upload-button {\n  // (*) Correct the inability to style clickable types in iOS and Safari.\n  appearance: button;\n}\n\n[type=search] {\n  // Correct the odd appearance in Chrome and Safari.\n  appearance: none;\n}\n\n// Change font properties to `inherit` in Safari.\n::-webkit-file-upload-button {\n  font: inherit;\n}\n\n[hidden] {\n  display: none;\n}\n\nfieldset {\n  border: $width-border solid $color-border;\n  margin: $width-gap 0 0;\n  padding: 0 $width-gap $width-gap;\n}\n\nlegend {\n  padding: $padding-legend;\n}\n\noptgroup {\n  color: $color-optgroup;\n  font-style: normal;\n  font-weight: normal;\n}\n\noption {\n  color: $color-text;\n}\n\nprogress {\n  width: 100%;\n}\n","// Variables\n//\n// Copy settings from this file into the provided `_custom.scss` to override\n// the Bootstrap defaults without modifying key, versioned files.\n//\n// All variables need to be named as ${rule}-${element}-${modifier}\n\n\n//\n// Colors\n//\n\n// Common colors\n// Add !default so _custom.scss can override it\n$color-text: #333 !default;\n$color-text-muted: #777 !default;\n\n$color-background: #fff !default;\n$color-background-over: rgba(0, 0, 0, .05) !default;\n$color-background-back: #f3f3f3 !default;\n\n$color-border: #ddd !default;\n\n// `body` and `container`\n$color-text-body: $color-text !default;\n$color-background-body: $color-background-back !default;\n$color-background-container: $color-background !default;\n\n// Links\n// hsl is easy to modify\n$color-text-link: hsl(210, 100%, 50%) !default;\n// Use rgba so it can nesting\n$color-background-active: rgba(0, 0, 0, .1) !default;\n\n// Codes\n$color-background-code: $color-background-over !default;\n$color-background-pre: $color-background-over !default;\n\n// `blockquote`\n$color-text-blockquote: $color-text-muted !default;\n\n// `mark`\n$color-background-mark: #ff0 !default;\n\n// Tables\n$color-background-table: $color-background !default;\n$color-background-th: $color-background-over !default;\n\n// Forms\n// For `input`s which is not a button\n$color-background-input: $color-background !default;\n// For focused input\n$color-border-input-focus: hsl(210, 100%, 60%) !default;\n// For buttons\n$color-background-btn: $color-background-back !default;\n$color-text-btn-primary: $color-background !default;\n$color-background-btn-primary: hsl(120, 50%, 50%) !default;\n$color-text-btn-danger: hsl(0, 100%, 40%) !default;\n//For optgroup\n$color-optgroup: $color-text-muted;\n\n//\n// Spacing\n//\n\n$width-gap: 14px !default;\n$width-gap-double: 28px !default;\n$width-gap-half: 7px !default;\n\n$width-gap-big: 32px !default;\n\n$width-padding-input: 5px !default;\n\n$width-border: 1px !default;\n\n// $width-padding-input + $width-border\n$width-padding-border-input: 6px !default;\n\n//\n// layouts\n//\n\n$width-scrollbar: 17px !default;\n\n$padding-container: 0 $width-gap $width-gap !default;\n$padding-container-desktop: 0 $width-gap-double $width-gap !default;\n\n$min-width-container: 320px !default;\n$max-width-container: 768px !default;\n$max-width-side: 256px !default;\n// So won't have scroll-x on device which width is 1025px\n$width-container-breakpoint: $max-width-container + $max-width-side + $width-scrollbar !default;\n\n//\n// Typography\n//\n\n// 1rem = 10px\n$rem-base: 10px !default;\n\n$font-size: 1.8rem !default;\n\n// h4, h5, h6 is not very useful, so we set them to the same size of normal\n// font-size, but with $font-weight-bold\n$font-size-h1: 3.2rem !default;\n$font-size-h2: 2.6rem !default;\n$font-size-h3: 2.4rem !default;\n$font-size-h4: 2.2rem !default;\n$font-size-h5: 2rem !default;\n$font-size-h6: 1.8rem !default;\n\n$font-size-pre: 1.3rem !default;\n\n$font-size-small: 85% !default;\n$font-size-code: $font-size-small !default;\n$font-size-sub-sup: 75% !default;\n\n$line-height: 1.5 !default;\n\n$line-height-input: 1.25 !default;\n// line-height need to be set to pre, not code\n$line-height-pre: 1.2 !default;\n\n$font-weight-bold: 600 !default;\n\n$font-family:\n  // Safari for OS X and iOS (San Francisco)\n  -apple-system,\n  // Chrome for OS X (San Francisco)\n  BlinkMacSystemFont,\n  // Windows\n  'Segoe UI',\n  // Android\n  'Roboto',\n  // Linux\n  'Oxygen', // KDE\n  'Ubuntu',\n  'Cantarell', // GNOME\n  // Firefox OS [R.I.P.]\n  'Fira Sans',\n  // Older Android\n  'Droid Sans',\n  // Chinese font for OSX and iOS\n  'Hiragino Sans GB',\n  // Chinese font for Windows\n  'Microsoft Yahei', '微软雅黑',\n  // Basic web fallback\n  Arial, Helvetica, STHeiti, sans-serif,\n  // Emoji\n  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !default;\n\n// TODO Chinese font-family for pre code\n// https://github.com/xcatliu/mobi.css/issues/8\n$font-family-monospace: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n\n$padding-code: .1em .2em !default;\n\n$border-left-blockquote: $width-padding-input solid $color-border !default;\n\n$border-top-hr: $width-border solid $color-border !default;\n\n// Set the default max-height to scroll-view\n$max-height-scroll-view: 300px !default;\n\n\n//\n// Tables\n//\n\n$padding-table-cell: $width-padding-input !default;\n$border-bottom-th-td: $width-border solid $color-border !default;\n\n//\n// Forms\n//\n\n// For inputs\n$border-radius-input: 3px !default;\n$padding-input: $width-padding-input 2 * $width-padding-input !default;\n$border-input: $width-border solid $color-border !default;\n// For file input\n$padding-file: $width-padding-border-input 0 !default;\n\n// For checkbox and radio\n$margin-checkbox-radio: 0 $width-padding-input 0 0 !default;\n// 5px padding + 1px border\n$width-padding-top-label: $width-padding-border-input !default;\n$width-padding-bottom-label: $width-padding-border-input !default;\n\n$padding-legend: 0 3px !default;\n\n// Background image of down arrow\n$background-image-angle-down: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'><path fill='#{$color-text}' d='M0 0h32L16 20z'/></svg>\") !default;\n","@mixin scroll-view() {\n  max-height: $max-height-scroll-view;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n@mixin background-icon-angle-down() {\n  background: $background-image-angle-down right 8px center no-repeat;\n  background-size: 8px 8px;\n  padding-right: 25px;\n}\n\n@mixin flex-container() {\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n@mixin flex-width($percentage) {\n  flex-basis: $percentage;\n  max-width: $percentage;\n}\n\n\n//\n// Forms\n//\n\n@mixin input-and-button() {\n  appearance: none;\n  background-color: $color-background-input;\n  border: $border-input;\n  border-radius: $border-radius-input;\n  // Follow the color of body text\n  color: $color-text-body;\n  font-family: $font-family;\n  font-size: $font-size;\n  padding: $padding-input;\n\n  &:focus {\n    border-color: $color-border-input-focus;\n  }\n}\n\n@mixin input-block() {\n  display: block;\n  line-height: $line-height-input;\n  margin: $width-gap 0 0;\n  width: 100%;\n}\n\n@mixin button() {\n  text-align: center;\n  background-color: $color-background-btn;\n  cursor: pointer;\n\n  &:hover,\n  &:active {\n    text-decoration: none;\n  }\n}\n\n@mixin disabled() {\n  cursor: default;\n  opacity: .5;\n  pointer-events: none;\n}\n\n@mixin btn() {\n  @include input-block();\n  @include input-and-button();\n  @include button();\n\n  &[disabled] {\n    @include disabled();\n  }\n}\n\n@mixin btn-primary() {\n  background-color: $color-background-btn-primary;\n  border-color: $color-background-btn-primary;\n  color: $color-text-btn-primary;\n\n  &[disabled] {\n    @include disabled();\n  }\n}\n\n@mixin btn-danger() {\n  color: $color-text-btn-danger;\n\n  &[disabled] {\n    @include disabled();\n  }\n}\n",".container {\n  background-color: $color-background-container;\n  max-width: $max-width-container - $width-gap-double;\n  min-width: $min-width-container;\n  outline: $width-gap solid $color-background-container;\n  overflow: hidden;\n  padding: $padding-container;\n  width: 100%;\n}\n\n@media (min-width: $width-container-breakpoint) {\n  .container {\n    max-width: $max-width-container;\n    outline: 0;\n    padding: $padding-container-desktop;\n  }\n}\n\n.top-gap-big,\n.form .top-gap-big {\n  margin-top: $width-gap-big;\n}\n\n.top-gap,\n.form .top-gap {\n  margin-top: $width-gap;\n}\n\n.top-gap-0,\n.form .top-gap-0 {\n  margin-top: 0;\n}\n",".flex-left,\n.flex-center,\n.flex-right,\n.flex-top,\n.flex-middle,\n.flex-bottom,\n.flex-vertical {\n  @include flex-container();\n}\n\n.flex-left,\n.flex-center,\n.flex-right,\n.flex-top,\n.flex-middle,\n.flex-bottom,\n.flex-vertical.flex-left,\n.flex-vertical.flex-center,\n.flex-vertical.flex-right,\n.flex-vertical.flex-top,\n.flex-vertical.flex-middle,\n.flex-vertical.flex-bottom {\n  align-items: stretch;\n  justify-content: flex-start;\n}\n\n.flex-center,\n.flex-vertical.flex-middle {\n  justify-content: center;\n}\n\n.flex-right,\n.flex-vertical.flex-bottom {\n  justify-content: flex-end;\n}\n\n.flex-top,\n.flex-vertical.flex-left {\n  align-items: flex-start;\n}\n\n.flex-middle,\n.flex-vertical.flex-center {\n  align-items: center;\n}\n\n.flex-bottom,\n.flex-vertical.flex-right {\n  align-items: flex-end;\n}\n\n.units-gap {\n  margin-left: - $width-gap-half;\n  margin-right: - $width-gap-half;\n\n  > .unit,\n  > .unit-0,\n  > .unit-1-2,\n  > .unit-1-3,\n  > .unit-2-3,\n  > .unit-1-4,\n  > .unit-3-4, {\n    padding-left: $width-gap-half;\n    padding-right: $width-gap-half;\n  }\n}\n\n.unit {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.unit-1-2,\n.unit-1-3,\n.unit-2-3,\n.unit-1-4,\n.unit-3-4 {\n  flex-shrink: 0;\n}\n\n.unit-1-2 {\n  @include flex-width(50%);\n}\n\n.unit-1-3 {\n  @include flex-width(33.33%);\n}\n\n.unit-2-3 {\n  @include flex-width(66.67%);\n}\n\n.unit-1-4 {\n  @include flex-width(25%);\n}\n\n.unit-3-4 {\n  @include flex-width(75%);\n}\n\n.flex-vertical {\n  flex-direction: column;\n\n  > .unit,\n  > .unit-0,\n  > .unit-1-2,\n  > .unit-1-3,\n  > .unit-2-3,\n  > .unit-1-4,\n  > .unit-3-4, {\n    max-width: none;\n  }\n\n  > .unit-1-2 {\n    max-height: 50%;\n  }\n\n  > .unit-1-3 {\n    max-height: 33.33%;\n  }\n\n  > .unit-2-3 {\n    max-height: 66.67%;\n  }\n\n  > .unit-1-4 {\n    max-height: 25%;\n  }\n\n  > .unit-3-4 {\n    max-height: 75%;\n  }\n}\n",".table {\n  // Reset for nesting within parents with `background-color`.\n  background-color: $color-background-table;\n  border: 0;\n  border-collapse: collapse;\n  border-spacing: 0;\n  // Enable scroll-view on mobile\n  width: 100%;\n\n  caption {\n    caption-side: bottom;\n    color: $color-text-muted;\n    padding: $padding-table-cell;\n    text-align: left;\n  }\n\n  th,\n  td {\n    border: 0;\n    border-bottom: $border-bottom-th-td;\n    padding: $padding-table-cell;\n    text-align: left;\n  }\n\n  th {\n    background-color: $color-background-th;\n    font-weight: $font-weight-bold;\n  }\n}\n",".form {\n  margin: 0;\n\n  label {\n    cursor: pointer;\n    display: block;\n    line-height: $line-height-input;\n    margin-top: $width-gap;\n    padding-bottom: $width-padding-bottom-label;\n    padding-top: $width-padding-top-label;\n  }\n\n  // Text inputs + Select inputs\n  [type=text],\n  [type=password],\n  [type=email],\n  [type=search],\n  [type=url],\n  [type=tel],\n  [type=number],\n  textarea,\n  select {\n    @include input-and-button();\n    @include input-block();\n  }\n\n  @media (max-width: $width-container-breakpoint - 1px) {\n    [type=time],\n    [type=week],\n    [type=month],\n    [type=date],\n    [type=datetime-local] {\n      margin: $width-gap 0 0;\n    }\n  }\n\n  @media (min-width: $width-container-breakpoint) {\n    [type=time],\n    [type=week],\n    [type=month],\n    [type=date],\n    [type=datetime-local] {\n      @include input-and-button();\n      @include input-block();\n    }\n  }\n\n  [type=checkbox],\n  [type=radio] {\n    cursor: pointer;\n    margin: $margin-checkbox-radio;\n  }\n\n  select {\n    // Reset the default angle-down icon\n    @include background-icon-angle-down();\n    cursor: pointer;\n  }\n\n  [type=file],\n  [type=range] {\n    @include input-block();\n    cursor: pointer;\n    padding: $padding-file;\n  }\n\n  [type=color],\n  [type=image] {\n    cursor: pointer;\n    display: block;\n    margin: $width-gap 0 0;\n  }\n\n  [disabled] {\n    @include disabled();\n  }\n\n  [readonly] {\n    background-color: $color-background-btn;\n  }\n}\n\n.btn {\n  @include btn();\n}\n\n.btn-primary {\n  @include btn-primary();\n}\n\n.btn-danger {\n  @include btn-danger();\n}\n","@media (max-width: $width-container-breakpoint - 1px) {\n  .hide-on-mobile {\n    display: none;\n  }\n}\n\n@media (min-width: $width-container-breakpoint) {\n  .show-on-mobile {\n    display: none;\n  }\n}\n\n.scroll-view {\n  @include scroll-view();\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-muted {\n  color: $color-text-muted;\n}\n\na.text-muted {\n  color: $color-text-muted;\n  text-decoration: underline;\n}\n","@import 'mobi.css/src/mobi';\n\n/* public */\n\n$splitLineColor: #E5E5E5;\n$hoverColor: rgba(0, 0, 0, 0.1);\n$transparentColor: rgba(0, 0, 0, 0);\nbody {\n    background-color: #F0F0F0;\n}\n\nul,\nli,\ndl,\ndt,\ndd {\n    list-style: none;\n}\n\n.active-block {\n    color: #ffffff;\n}\n\n.animation-quick {\n    transition: all 0.1s ease;\n}\n\n.animation {\n    transition: all 0.3s ease;\n}\n\n.animation-slow {\n    transition: all 0.8s ease;\n}\n\n.animation-switch {\n    transition: all 0.4s ease;\n}\n\n.bg_hover {\n    height: 100% !important;\n    overflow: hidden !important;\n}\n\n.testSpan {\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    margin: 0 5px;\n}\n\n\n/* panel */\n\n.panel {\n    background-color: #ffffff;\n    margin: 8px;\n    border-radius: 4px;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n    overflow: hidden;\n}\n\n.panel-title {\n    height: 48px;\n    padding-left: 12px;\n    padding-right: 12px;\n    line-height: 48px;\n    font-size: 16px;\n    color: #464646;\n}\n\n.ui_wrap {\n    flex-wrap: wrap;\n}\n\n.ui_wrap div[class~=\"unit-1-4\"],\n.ui_wrap div[class~=\"unit-1-3\"] {\n    //height: 6rem;\n    //border: 1px solid #eee;\n}\n\n.ui_wrap div[class~=\"unit-1-4\"].disabled,\n.ui_wrap div[class~=\"unit-1-3\"].disabled {\n    opacity: 0.5;\n}\n\n.ui_wrap div[class~=\"unit-1-4\"] .mode_name,\n.ui_wrap div[class~=\"unit-1-3\"] .mode_name {\n    display: block;\n    font-size: 1.4rem;\n}\n\n.ui_wrap div[class~=\"unit-1-4\"].on {\n    //background: #eee;\n    //opacity: 0.5;\n}\n\n@font-face {\n    font-family: 'iconfont';\n    /* project id 87760 */\n    src: url('https://at.alicdn.com/t/font_svndvyyea8fo5hfr.eot');\n    src: url('https://at.alicdn.com/t/font_svndvyyea8fo5hfr.eot?#iefix') format('embedded-opentype'), url('https://at.alicdn.com/t/font_svndvyyea8fo5hfr.woff') format('woff'), url('https://at.alicdn.com/t/font_svndvyyea8fo5hfr.ttf') format('truetype'), url('https://at.alicdn.com/t/font_svndvyyea8fo5hfr.svg#iconfont') format('svg');\n}\n\n.iconfont {\n    font-family: \"iconfont\" !important;\n    font-size: 26px;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -webkit-text-stroke-width: 0.2px;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.wrap {\n    background: #fff;\n}\n\ndiv[class~=\"unit-0\"] {\n    //padding: 8px 10px;\n    //border-bottom: 1px solid #eee;\n}\n\ndiv[class~=\"unit-0\"].disabled {\n    opacity: 0.5;\n}\n\ndiv[class~=\"unit-0\"] .title {\n    width: 65%;\n    line-height: 30px;\n    padding-left: 10px;\n}\n\ndiv[class~=\"unit-0\"] .title .maint {\n    font-size: 16px;\n    line-height: 30px;\n    display: block\n}\n\ndiv[class~=\"unit-0\"] .title .maint_nosub {\n    display: block;\n    line-height: 40px;\n}\n\ndiv[class~=\"unit-0\"] .title .sub {\n    font-size: 12px;\n    line-height: 12px;\n    display: block;\n}\n\ndiv[class~=\"unit-0\"] .rightPart {\n    width: 25%;\n    font-size: 16px;\n    line-height: 40px;\n}\n\ndiv[class~=\"unit-0\"] .rightPart .rightarrow {\n    font-size: 16px;\n}\n\n\n/* Grid Item */\n\n.grid-item {\n    @extend .animation-quick;\n    position: relative;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    border-color: $splitLineColor;\n    border-width: 0;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-style: solid;\n    color: #A6A6A6;\n}\n\n.grid-item.active-block {\n    color: #ffffff;\n}\n\n.grid-item.no-right-border {\n    border-right-width: 0;\n}\n\n.grid-item.no-bottom-border {\n    border-bottom-width: 0;\n}\n\n.grid-item:before {\n    @extend .animation;\n    position: absolute;\n    content: \"\";\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: $transparentColor;\n}\n\n.grid-item.grid-item-hover:before {\n    background-color: $hoverColor;\n}\n\n\n/* List Item */\n\n.list-item {\n    position: relative;\n    padding: 8px 10px;\n}\n\n.list-item:before {\n    @extend .animation;\n    position: absolute;\n    content: \"\";\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: $transparentColor;\n}\n\n.list-item.list-item-hover:before {\n    background-color: $hoverColor;\n}\n\n.list-item-split-line {\n    width: 100%;\n    height: 1px;\n    background-color: $splitLineColor;\n}\n\n\n/* Swiper Slide */\n\n$defineBorderRaduis: 5px;\n.swiper-wrap-normal,\n.swiper-wrap-controlpanel,\n.swiper-wrap-hasbar,\n.swiper-step,\n.switch-cell {\n    position: relative;\n}\n\n.swiper-wrap-normal.disabled,\n.swiper-wrap-controlpanel.disabled,\n.swiper-wrap-hasbar.disabled,\n.swiper-step.disabled,\n.switch-cell.disabled {\n    opacity: 0.5;\n}\n\n.disabled {\n    opacity: 0.5;\n}\n\n.swiper-control {\n    margin: 25px 20px;\n    position: relative;\n}\n\n.swiper-control .inner {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n}\n\n.swiper-control .inner .swiper-track,\n.swiper-control .inner .swiper-step-track {\n    position: relative;\n    top: 2px;\n    height: 1px;\n    //background: #f00;\n    border-radius: $defineBorderRaduis;\n}\n\n.swiper-control .inner .swiper-step-track {\n    background: #ccc;\n}\n\n.swiper-control .inner .swiper-step-track li {\n    width: 20%;\n}\n\n.swiper-control .inner .swiper-step-track li:first-child::before {\n    content: '';\n    float: left;\n    width: 5px;\n    height: 5px;\n    background: green;\n}\n\n.swiper-control .inner .swiper-step-track li::after {\n    content: '';\n    float: right;\n    width: 5px;\n    height: 5px;\n    background: green;\n}\n\n.swiper-control .inner .swiper-thumb {\n    @extend .animation-quick;\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background: #f1f1f1;\n    border-width: 2px;\n    border-style: solid;\n    top: -9px;\n    z-index: 2;\n    cursor: pointer;\n    left: 0;\n    margin-left: -12px;\n    transform: translate3d(0, 0, 0);\n    -webkit-transform: translate3d(0, 0, 0);\n    transition: transform 0.1s linear;\n    -webkit-transition: transform 0.1s linear;\n    background-image: linear-gradient(-180deg, #FEFFFF 0%, #F6F1F1 100%);\n}\n\n.swiper-control .inner .swiper-thumb::before {\n    position: absolute;\n    content: attr(data-content);\n    left: 0;\n    bottom: -24px;\n    width: 100px;\n    text-align: center;\n    margin-left: -38px;\n    font-size: 15px;\n    color: #A6A6A6;\n    line-height: 20px;\n}\n\n.swiper-control .inner .swiper-num {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    font-size: 15px;\n    color: #A6A6A6;\n    line-height: 20px;\n}\n\n.swiper-control .inner .swiper-num2 {\n    margin-top: 15px;\n    color: #464646;\n    font-size: 12px;\n    width: 120%;\n    margin-left: -10%;\n    text-align: center;\n}\n\n.contorlPanel {\n    width: 120px;\n    position: absolute;\n    right: 20px;\n    top: 10px;\n}\n\n.contorlPanel {\n    span {\n        width: 50px;\n        padding: 2px 15px;\n        border: 1px solid $splitLineColor;\n        border-radius: 10px;\n        text-align: center;\n        border-radius: 33px;\n    }\n    .plus-button {\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0;\n    }\n    .minus-button {\n        border-left: none;\n        border-bottom-left-radius: 0;\n        border-top-left-radius: 0;\n    }\n}\n\n\n/* Switch Cell */\n\n.switch-control {\n    padding-left: 12px;\n    padding-right: 12px;\n    margin: 10px 0;\n}\n\n.switch-title {\n    line-height: 52px;\n    width: 86%;\n}\n\n.switch-btn {\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n    text-align: center;\n    line-height: 45px;\n}\n\n.switch-btn.on {\n    background: rgb(255, 102, 0);\n    color: #fff;\n}\n\n.switch-btn-main {\n    position: relative\n}\n\ninput[type='checkbox'] {\n    display: none;\n}\n\nlabel[for=\"switch-cell-jd\"] {\n    width: 45px;\n    height: 45px;\n    display: inline-block;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n    position: relative;\n    top: 4px;\n    text-align: center;\n    line-height: 45px;\n    @extend .animation;\n}\n\ninput[type='checkbox']:checked+label[for=\"switch-cell-jd\"] {\n    background: rgb(255, 102, 0);\n    color: #fff;\n}\n\nlabel[for=\"switch-cell-ali\"] {\n    display: inline-block;\n    width: 60px;\n    height: 30px;\n    border: 1px solid #ccc;\n    border-radius: 30px;\n    position: relative;\n    top: 11px;\n    background: #f0f0f0;\n    @extend .animation-switch;\n}\n\nlabel[for=\"switch-cell-ali\"]::after {\n    display: block;\n    position: relative;\n    content: '';\n    width: 50%;\n    height: 100%;\n    background: #fff;\n    border-radius: 50%;\n    left: 0;\n    @extend .animation-switch;\n    box-shadow: 0 0 2px #eee;\n}\n\ninput[type='checkbox']:checked, label[for='switch-cell-ali'].checked {\n    background: #9FD6AE\n}\n\ninput[type='checkbox']:checked, label[for='switch-cell-ali'].checked::after {\n    left: 50%;\n}\n\n\n/*time scroll*/\n\n.scrollLine {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    height: 250px;\n}\n\n.scrollLine ul {\n    padding: 0;\n    width: 100%;\n    margin-top: 0;\n    overflow: hidden;\n    height: 200px;\n}\n\n.scrollLine li {\n    padding: 0;\n    text-align: center;\n    line-height: 28px;\n    font-size: 20px;\n}\n\n.scrollLine li.active {\n    font-size: 24px;\n}\n\n.scrollLine .topMask {\n    width: 100%;\n    height: 110px;\n    position: absolute;\n    top: 0;\n    background: -moz-linear-gradient( top, #f1f1f1, #fff);\n    background: -webkit-linear-gradient(top, #f1f1f1, #fff);\n    opacity: 0.9;\n    border-bottom: 1px solid #ccc;\n}\n\n.scrollLine .bottomMask {\n    width: 100%;\n    height: 110px;\n    position: absolute;\n    bottom: 0;\n    background: -moz-linear-gradient( bottom, #f1f1f1, #fff);\n    background: -webkit-linear-gradient(bottom, #f1f1f1, #fff);\n    opacity: 0.9;\n    border-top: 1px solid #ccc;\n}\n\n\n/*confirm toast*/\n\n.confirmHover {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: rgba(75, 75, 75, 0.65) !important;\n    z-index: 998;\n    top: 0;\n    left: 0;\n    display: none;\n}\n\n.confirmWrap {\n    width: 250px;\n    position: absolute;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    left: 50%;\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: 0 0 2px #ccc;\n    z-index: 999;\n}\n\n.confirmWrap {\n    .cfm_main {\n        padding: 10px;\n    }\n    .cfm_title {\n        text-align: center;\n    }\n    .cfm_content {\n        padding: 10px 0;\n        font-size: 14px;\n    }\n    .cfm_btnWrap {\n        position: relative;\n    }\n    .cfm_btnWrap span {\n        width: 100%;\n        text-align: center;\n        line-height: 40px;\n        border-top: 1px solid #eee;\n    }\n    .cfm_btnWrap span:first-child {\n        border-bottom-left-radius: 10px;\n    }\n    .cfm_btnWrap span:last-child {\n        border-bottom-right-radius: 10px;\n        border-left: 1px solid #eee;\n    }\n}\n\n.hovers {\n    background: #eee;\n}"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jquery.finger - v0.1.6 - 2016-10-05
* https://github.com/ngryman/jquery.finger
* Copyright (c) 2016 Nicolas Gryman; Licensed MIT */

(function (factory) {
	if (true)
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	else if (typeof exports === 'object')
		factory(require('jquery'));
	else
		factory(jQuery);
}(function ($) {

	var ua = navigator.userAgent,
		isChrome = /chrome/i.exec(ua),
		isAndroid = /android/i.exec(ua),
		hasTouch = 'ontouchstart' in window && !(isChrome && !isAndroid),
		startEvent = hasTouch ? 'touchstart' : 'mousedown',
		stopEvent = hasTouch ? 'touchend touchcancel' : 'mouseup mouseleave',
		moveEvent = hasTouch ? 'touchmove' : 'mousemove',

		namespace = 'finger',
		rootEl = $('html')[0],

		start = {},
		move = {},
		motion,
		safeguard,
		timeout,
		prevEl,
		prevTime,

		Finger = $.Finger = {
			pressDuration: 300,
			doubleTapInterval: 300,
			flickDuration: 150,
			motionThreshold: 5
		};

	function preventDefault(event) {
		event.preventDefault();
		$.event.remove(rootEl, 'click', preventDefault);
	}

	function page(coord, event) {
		return (hasTouch ? event.originalEvent.touches[0] : event)['page' + coord.toUpperCase()];
	}

	function trigger(event, evtName, remove) {
		var fingerEvent = $.Event(evtName, move);
		$.event.trigger(fingerEvent, { originalEvent: event }, event.target);

		if (fingerEvent.isDefaultPrevented()) {
			if (~evtName.indexOf('tap') && !hasTouch)
				$.event.add(rootEl, 'click', preventDefault);
			else
				event.preventDefault();
		}

		if (remove) {
			$.event.remove(rootEl, moveEvent + '.' + namespace, moveHandler);
			$.event.remove(rootEl, stopEvent + '.' + namespace, stopHandler);
		}
	}

	function startHandler(event) {
		if (event.which > 1)
			return;

		var timeStamp = event.timeStamp || +new Date();

		if (safeguard == timeStamp) return;
		safeguard = timeStamp;

		// initializes data
		start.x = move.x = page('x', event);
		start.y = move.y = page('y', event);
		start.time = timeStamp;
		start.target = event.target;
		move.orientation = null;
		move.end = false;
		motion = false;
		timeout = setTimeout(function() {
			trigger(event, 'press', true);
		}, Finger.pressDuration);

		$.event.add(rootEl, moveEvent + '.' + namespace, moveHandler);
		$.event.add(rootEl, stopEvent + '.' + namespace, stopHandler);

		// global prevent default
		if (Finger.preventDefault) {
			event.preventDefault();
			$.event.add(rootEl, 'click', preventDefault);
		}
	}

	function moveHandler(event) {
		// motion data
		move.x = page('x', event);
		move.y = page('y', event);
		move.dx = move.x - start.x;
		move.dy = move.y - start.y;
		move.adx = Math.abs(move.dx);
		move.ady = Math.abs(move.dy);

		// security
		motion = move.adx > Finger.motionThreshold || move.ady > Finger.motionThreshold;
		if (!motion) return;

		// moves cancel press events
		clearTimeout(timeout);

		// orientation
		if (!move.orientation) {
			if (move.adx > move.ady) {
				move.orientation = 'horizontal';
				move.direction = move.dx > 0 ? +1 : -1;
			}
			else {
				move.orientation = 'vertical';
				move.direction = move.dy > 0 ? +1 : -1;
			}
		}

		// for delegated events, the target may change over time
		// this ensures we notify the right target and simulates the mouseleave behavior
		while (event.target && event.target !== start.target)
			event.target = event.target.parentNode;
		if (event.target !== start.target) {
			event.target = start.target;
			stopHandler.call(this, $.Event(stopEvent + '.' + namespace, event));
			return;
		}

		// fire drag event
		trigger(event, 'drag');
	}

	function stopHandler(event) {
		var timeStamp = event.timeStamp || +new Date(),
			dt = timeStamp - start.time,
			evtName;

		// always clears press timeout
		clearTimeout(timeout);

		// tap-like events
		if (!motion) {
      // triggered only if targets match
      if (event.target === start.target) {
        var doubleTap = prevEl === event.target && timeStamp - prevTime < Finger.doubleTapInterval;
  			evtName = doubleTap ? 'doubletap' : 'tap';
  			prevEl = doubleTap ? null : start.target;
  			prevTime = timeStamp;
      }
		}
		// motion events
		else {
			// ensure last target is set the initial one
			event.target = start.target;
			if (dt < Finger.flickDuration) trigger(event, 'flick');
			move.end = true;
			evtName = 'drag';
		}

    if (evtName)
		  trigger(event, evtName, true);
	}

	// initial binding
	$.event.add(rootEl, startEvent + '.' + namespace, startHandler);

	// expose events as methods
	$.each('tap doubletap press drag flick'.split(' '), function(i, name) {
		$.fn[name] = function(fn) {
			return fn ? this.on(name, fn) : this.trigger(name);
		};
	});

	return Finger;

}));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(8);

__webpack_require__(7);

var _UI = __webpack_require__(0);

var _UI2 = _interopRequireDefault(_UI);

var _JDUICache = __webpack_require__(6);

var _JDUICache2 = _interopRequireDefault(_JDUICache);

var _componentList = __webpack_require__(5);

var _componentList2 = _interopRequireDefault(_componentList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// style
global.JDUICache = _JDUICache2.default;

$(function () {
    JDUI.style.update();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })
/******/ ]);
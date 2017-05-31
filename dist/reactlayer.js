(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("object-assign"), require("react-addons-css-transition-group"), require("react-addons-update"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "object-assign", "react-addons-css-transition-group", "react-addons-update", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("object-assign"), require("react-addons-css-transition-group"), require("react-addons-update"), require("react-dom")) : factory(root["react"], root["object-assign"], root["react-addons-css-transition-group"], root["react-addons-update"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsUpdate = __webpack_require__(7);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayerComponent = (_temp2 = _class = function (_React$Component) {
    _inherits(LayerComponent, _React$Component);

    function LayerComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LayerComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayerComponent.__proto__ || Object.getPrototypeOf(LayerComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            children: []
        }, _this.mount = function (element) {
            var index = _this.state.children.indexOf(element);
            var tempState = _this.state;
            if (index != -1) {
                tempState = (0, _reactAddonsUpdate2.default)(tempState, {
                    children: {
                        $splice: [[index, 1]]
                    }
                });
            }
            tempState = (0, _reactAddonsUpdate2.default)(tempState, {
                children: {
                    $push: [element]
                }
            });
            _this.setState(tempState);
            return element;
        }, _this.unmount = function (element) {
            var index = _this.state.children.indexOf(element);
            if (index != -1) {
                var tempState = (0, _reactAddonsUpdate2.default)(_this.state, {
                    children: {
                        $splice: [[index, 1]]
                    }
                });
                _this.setState(tempState);
            }
            return element;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LayerComponent, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                Component = _props.component,
                others = _objectWithoutProperties(_props, ['component']);

            var children = this.state.children;

            return _react2.default.createElement(
                Component,
                others,
                _react2.default.Children.map(children, function (element, index) {
                    return _react2.default.cloneElement(element, { key: index });
                })
            );
        }
    }]);

    return LayerComponent;
}(_react2.default.Component), _class.defaultProps = {
    component: 'div'
}, _temp2);


var $layerCache = {};
exports.default = {
    addLayer: function addLayer() {
        var layerId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
        var layerProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (!$layerCache[layerId]) {
            if (!container) {
                container = document.body.appendChild(document.createElement('div'));
            }
            container.setAttribute('data-reactlayer', layerId);
            $layerCache[layerId] = _reactDom2.default.render(_react2.default.createElement(LayerComponent, layerProps), container);
        }
        return $layerCache[layerId];
    },
    getLayer: function getLayer() {
        var layerId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
        var layerProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        return this.addLayer(layerId, layerProps);
    },
    removeLayer: function removeLayer() {
        var layerId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

        if ($layerCache[layerId]) {
            var layer = $layerCache[layerId];
            delete $layerCache[layerId];
            var node = _reactDom2.default.findDOMNode(layer);
            _reactDom2.default.unmountComponentAtNode(node);
            var container = node.parentNode;
            container.parentNode && container.parentNode.removeChild(container);
            return layer;
        }
    },
    mount: function mount(element) {
        var layerId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

        return this.getLayer(layerId).mount(element);
    },
    unmount: function unmount(element) {
        var layerId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

        return this.getLayer(layerId).unmount(element);
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _modal = __webpack_require__(4);

var _modal2 = _interopRequireDefault(_modal);

var _layer = __webpack_require__(0);

var _layer2 = _interopRequireDefault(_layer);

var _reactAddonsCssTransitionGroup = __webpack_require__(6);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _objectAssign = __webpack_require__(5);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2016/12/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ModalContainer = function (_React$Component) {
  _inherits(ModalContainer, _React$Component);

  function ModalContainer() {
    _classCallCheck(this, ModalContainer);

    return _possibleConstructorReturn(this, (ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).apply(this, arguments));
  }

  _createClass(ModalContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          overrideStyle = _props.overrideStyle,
          others = _objectWithoutProperties(_props, ['children', 'overrideStyle']);

      var style = (0, _objectAssign2.default)({}, _modal2.default, overrideStyle);
      return _react2.default.createElement(
        'div',
        others,
        children.length > 0 && _react2.default.createElement('div', { className: style.modalMask }),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionName: {
              enter: style.modalEnter,
              enterActive: style.modalEnterActive,
              leave: style.modalLeave,
              leaveActive: style.modalLeaveActive
            },
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300,
            className: style.modalContainer },
          children
        )
      );
    }
  }]);

  return ModalContainer;
}(_react2.default.Component);

exports.default = _layer2.default.addLayer('modal', { component: ModalContainer });

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modal = __webpack_require__(2);

var _modal2 = _interopRequireDefault(_modal);

var _layer = __webpack_require__(0);

var _layer2 = _interopRequireDefault(_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by vincent on 2016/10/13.
 */
_modal2.default.layer = _layer2.default;
// import RecycleList from './RecycleList';


module.exports = _modal2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modalContainer":"_1fTynvE2OmrS08ss-5538Q","modalMask":"_2zEfVKo1P46q5DOZmlxgiV","modalEnter":"_3v--zMaJb94a3Sm0TtDIgr","modalEnterActive":"_3rV-MIXo3vw7hrQbJ-PYHU","show":"_1Ivsxv66-xOM8KBbm5_HMB","modalLeave":"cFKGFUA_f3QFHHOHQjSak","modalLeaveActive":"_2xU8vmBdkZSYg3j7DO6R40","hide":"_3-1vjtAfRTvi1jzK3X-vUr"};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })
/******/ ]);
});
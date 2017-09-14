'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = exports.Tabs = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

    _this.getLocationHash = function () {
      return window.location.hash.slice(1) || 'default';
    };

    _this.copyPropsToState = function (children) {
      var defaulttab = void 0;

      return Object.assign(children.map(function (child) {
        var _child$attributes = child.attributes,
            label = _child$attributes.label,
            classname = _child$attributes.classname,
            tabdefault = _child$attributes.tabdefault,
            activeClassName = _child$attributes.activeClassName,
            attrs = _objectWithoutProperties(_child$attributes, ['label', 'classname', 'tabdefault', 'activeClassName']);

        var labelId = Object.keys(label).pop();
        var labelVal = label[labelId];
        if (tabdefault) defaulttab = labelId;

        return _defineProperty({}, labelId, {
          labelId: labelId,
          labelVal: labelVal,
          activeClassName: activeClassName,
          tabcontent: child.children,
          attrs: attrs
        });
      }).reduce(function (prev, next) {
        return Object.assign(prev, next);
      }), { default: defaulttab });
    };

    _this.state = {
      hash: _this.getLocationHash(),
      tabs: _this.copyPropsToState(props.children)
    };

    window.addEventListener('hashchange', function () {
      _this.setState({ hash: _this.getLocationHash() });
    });
    return _this;
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render(props) {
      var _state = this.state,
          tabs = _state.tabs,
          hash = _state.hash;

      var activeTab = hash === 'default' ? tabs[tabs.default] : tabs[hash];

      return (0, _preact.h)(
        'ul',
        null,
        Object.values(tabs).map(function (t) {
          return (typeof t === 'undefined' ? 'undefined' : _typeof(t)) === 'object' ? (0, _preact.h)(
            Tab,
            _extends({
              labelId: t.labelId,
              labelVal: t.labelVal,
              activeClassName: t.activeClassName,
              tabindex: activeTab ? activeTab.labelId : null
            }, t.attrs),
            t.tabcontent
          ) : null;
        })
      );
    }
  }]);

  return Tabs;
}(_preact.Component);

var Tab = function Tab(props) {
  var labelId = props.labelId,
      labelVal = props.labelVal,
      tabindex = props.tabindex,
      activeClassName = props.activeClassName,
      children = props.children,
      rest = _objectWithoutProperties(props, ['labelId', 'labelVal', 'tabindex', 'activeClassName', 'children']);

  var clsList = props.class;
  var isActive = tabindex === labelId;

  var cls = void 0;

  if (!isActive) cls = clsList || '';else cls = clsList ? clsList + ' ' + activeClassName : activeClassName;

  return (0, _preact.h)(
    'li',
    { 'class': cls },
    (0, _preact.h)(
      'a',
      { href: '#' + labelId },
      labelVal
    ),
    isActive ? (0, _preact.h)(
      'div',
      rest,
      children
    ) : null
  );
};

exports.Tabs = Tabs;
exports.Tab = Tab;

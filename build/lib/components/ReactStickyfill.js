'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _stickyfill = require('stickyfill');

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
  children: _propTypes2['default'].element,
  className: _propTypes2['default'].string
};

exports['default'] = ReactStickyfill;
module.exports = exports['default'];
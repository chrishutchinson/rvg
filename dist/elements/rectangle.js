"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withDrag = require("./base/with-drag");

var _withDrag2 = _interopRequireDefault(_withDrag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Rectangle = function Rectangle(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? "#000" : _ref$fill,
      _ref$gradient = _ref.gradient,
      gradient = _ref$gradient === undefined ? null : _ref$gradient,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 100 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 100 : _ref$width,
      props = _objectWithoutProperties(_ref, ["x", "y", "fill", "gradient", "height", "width"]);

  return _react2.default.createElement("rect", _extends({
    x: x,
    y: y,
    fill: gradient || fill,
    height: height,
    width: width
  }, props));
};

exports.default = (0, _withDrag2.default)(Rectangle);
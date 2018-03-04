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

var Ellipse = function Ellipse(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === undefined ? 100 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 50 : _ref$y,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? "#000" : _ref$fill,
      _ref$radiusX = _ref.radiusX,
      radiusX = _ref$radiusX === undefined ? 100 : _ref$radiusX,
      _ref$radiusY = _ref.radiusY,
      radiusY = _ref$radiusY === undefined ? 50 : _ref$radiusY,
      props = _objectWithoutProperties(_ref, ["x", "y", "fill", "radiusX", "radiusY"]);

  return _react2.default.createElement("ellipse", _extends({ cx: x, cy: y, fill: fill, rx: radiusX, ry: radiusY }, props));
};

exports.default = (0, _withDrag2.default)(Ellipse);
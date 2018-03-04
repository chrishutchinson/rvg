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

var Line = function Line(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === undefined ? [100, 200] : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? [50, 100] : _ref$y,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? "#000" : _ref$stroke,
      props = _objectWithoutProperties(_ref, ["x", "y", "stroke"]);

  return _react2.default.createElement("line", _extends({ x1: x[0], x2: x[1], y1: y[0], y2: y[1], stroke: stroke }, props));
};

exports.default = (0, _withDrag2.default)(Line);
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withDrag = require("./base/with-drag");

var _withDrag2 = _interopRequireDefault(_withDrag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Circle = function Circle(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === undefined ? 100 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 100 : _ref$y,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? "#000" : _ref$fill,
      _ref$radius = _ref.radius,
      radius = _ref$radius === undefined ? 100 : _ref$radius,
      props = _objectWithoutProperties(_ref, ["x", "y", "fill", "radius"]);

  return _react2.default.createElement("circle", _extends({ cx: x, cy: y, fill: fill, r: radius }, props));
};

module.exports = (0, _withDrag2.default)(Circle);
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

var LinearGradient = function LinearGradient(_ref) {
  var name = _ref.name,
      x1 = _ref.x1,
      x2 = _ref.x2,
      y1 = _ref.y1,
      y2 = _ref.y2,
      stops = _ref.stops,
      props = _objectWithoutProperties(_ref, ["name", "x1", "x2", "y1", "y2", "stops"]);

  return _react2.default.createElement(
    "linearGradient",
    _extends({ id: name, x1: x1, x2: x2, y1: y1, y2: y2 }, props),
    stops.map(function (stop, index) {
      return _react2.default.createElement("stop", {
        key: index,
        offset: stop.offset,
        stopColor: stop.color,
        stopOpacity: stop.opacity
      });
    })
  );
};

exports.default = (0, _withDrag2.default)(LinearGradient);
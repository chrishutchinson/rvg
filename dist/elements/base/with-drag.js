"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {
  var Wrapper = function Wrapper(props) {
    var draggable = props.draggable;


    return _react2.default.createElement(Component, _extends({}, props, draggable ? {
      "data-draggable": true,
      style: {
        cursor: "move"
      }
    } : {
      style: {
        pointerEvents: "none"
      }
    }));
  };

  return Wrapper;
};
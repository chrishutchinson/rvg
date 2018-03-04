"use strict";

var _image = require("./elements/image");

var _image2 = _interopRequireDefault(_image);

var _svg = require("./elements/svg");

var _svg2 = _interopRequireDefault(_svg);

var _text = require("./elements/text");

var _text2 = _interopRequireDefault(_text);

var _rectangle = require("./elements/rectangle");

var _rectangle2 = _interopRequireDefault(_rectangle);

var _circle = require("./elements/circle");

var _circle2 = _interopRequireDefault(_circle);

var _ellipse = require("./elements/ellipse");

var _ellipse2 = _interopRequireDefault(_ellipse);

var _line = require("./elements/line");

var _line2 = _interopRequireDefault(_line);

var _path = require("./elements/path");

var _path2 = _interopRequireDefault(_path);

var _linearGradient = require("./elements/linear-gradient");

var _linearGradient2 = _interopRequireDefault(_linearGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  SVG: _svg2.default,
  Text: _text2.default,
  Rectangle: _rectangle2.default,
  Circle: _circle2.default,
  Ellipse: _ellipse2.default,
  Line: _line2.default,
  Image: _image2.default,
  Path: _path2.default,
  LinearGradient: _linearGradient2.default
};
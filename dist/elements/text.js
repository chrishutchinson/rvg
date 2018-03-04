"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _util = require("util");

var _util2 = _interopRequireDefault(_util);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withDrag = require("./base/with-drag");

var _withDrag2 = _interopRequireDefault(_withDrag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var addSmartQuotes = function addSmartQuotes(string) {
  return string.replace(/(\W|^)"(\S)/g, "$1\u201C$2") // beginning "
  .replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, "$1\u201D$2") // ending "
  .replace(/([^0-9])"/g, "$1\u201D") // remaining " at end of word
  .replace(/(\W|^)'(\S)/g, "$1\u2018$2") // beginning '
  .replace(/([a-z])'([a-z])/gi, "$1\u2019$2") // conjunction's possession
  .replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/gi, "$1\u2019$3") // ending '
  .replace(/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/gi, "\u2019$2$3") // abbrev. years like '93
  .replace(/(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/gi, "$1\u2019") // backwards apostrophe
  .replace(/'''/g, "\u2034") // triple prime
  .replace(/("|'')/g, "\u2033") // double prime
  .replace(/'/g, "\u2032");
}; // prime

var processText = function processText(children, _ref) {
  var smartQuotes = _ref.smartQuotes,
      x = _ref.x,
      y = _ref.y,
      lineHeight = _ref.lineHeight;

  if (!_util2.default.isArray(children)) return smartQuotes ? addSmartQuotes(text) : text;

  return _react2.default.Children.map(children, function (string, index) {
    return _react2.default.createElement(
      "tspan",
      {
        key: index,
        x: x,
        y: lineHeight * index + y,
        alignmentBaseline: "before-edge"
      },
      smartQuotes ? addSmartQuotes(string) : string
    );
  });
};

var Text = function Text(_ref2) {
  var _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? 0 : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? 0 : _ref2$y,
      _ref2$fill = _ref2.fill,
      fill = _ref2$fill === undefined ? "#000" : _ref2$fill,
      _ref2$fontSize = _ref2.fontSize,
      fontSize = _ref2$fontSize === undefined ? 20 : _ref2$fontSize,
      _ref2$fontFamily = _ref2.fontFamily,
      fontFamily = _ref2$fontFamily === undefined ? "serif" : _ref2$fontFamily,
      _ref2$fontWeight = _ref2.fontWeight,
      fontWeight = _ref2$fontWeight === undefined ? "normal" : _ref2$fontWeight,
      _ref2$textAnchor = _ref2.textAnchor,
      textAnchor = _ref2$textAnchor === undefined ? "start" : _ref2$textAnchor,
      _ref2$smartQuotes = _ref2.smartQuotes,
      smartQuotes = _ref2$smartQuotes === undefined ? false : _ref2$smartQuotes,
      lineHeight = _ref2.lineHeight,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["x", "y", "fill", "fontSize", "fontFamily", "fontWeight", "textAnchor", "smartQuotes", "lineHeight", "children"]);

  var text = processText(children, {
    smartQuotes: smartQuotes,
    x: x,
    y: y,
    lineHeight: lineHeight || fontSize
  });

  return _react2.default.createElement(
    "text",
    _extends({
      x: x,
      y: y,
      fill: fill,
      textAnchor: textAnchor,
      fontSize: fontSize,
      fontFamily: fontFamily,
      fontWeight: fontWeight
    }, props),
    text
  );
};

exports.default = (0, _withDrag2.default)(Text);
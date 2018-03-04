import util from "util";
import React from "react";

import withDrag from "./base/with-drag";

const addSmartQuotes = string =>
  string
    .replace(/(\W|^)"(\S)/g, "$1\u201c$2") // beginning "
    .replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, "$1\u201d$2") // ending "
    .replace(/([^0-9])"/g, "$1\u201d") // remaining " at end of word
    .replace(/(\W|^)'(\S)/g, "$1\u2018$2") // beginning '
    .replace(/([a-z])'([a-z])/gi, "$1\u2019$2") // conjunction's possession
    .replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/gi, "$1\u2019$3") // ending '
    .replace(
      /(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/gi,
      "\u2019$2$3"
    ) // abbrev. years like '93
    .replace(
      /(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/gi,
      "$1\u2019"
    ) // backwards apostrophe
    .replace(/'''/g, "\u2034") // triple prime
    .replace(/("|'')/g, "\u2033") // double prime
    .replace(/'/g, "\u2032"); // prime

const processText = (children, { smartQuotes, x, y, lineHeight }) => {
  if (!util.isArray(children)) return smartQuotes ? addSmartQuotes(text) : text;

  return React.Children.map(children, (string, index) => (
    <tspan
      key={index}
      x={x}
      y={lineHeight * index + y}
      alignmentBaseline="before-edge"
    >
      {smartQuotes ? addSmartQuotes(string) : string}
    </tspan>
  ));
};

const Text = ({
  x = 0,
  y = 0,
  fill = "#000",
  fontSize = 20,
  fontFamily = "serif",
  fontWeight = "normal",
  textAnchor = "start",
  smartQuotes = false,
  lineHeight,
  children,
  ...props
}) => {
  const text = processText(children, {
    smartQuotes,
    x,
    y,
    lineHeight: lineHeight || fontSize
  });

  return (
    <text
      x={x}
      y={y}
      fill={fill}
      textAnchor={textAnchor}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      {...props}
    >
      {text}
    </text>
  );
};

export default withDrag(Text);

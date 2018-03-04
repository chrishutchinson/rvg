import React from "react";

import withDrag from "./base/with-drag";

const Circle = ({
  x = 100,
  y = 100,
  fill = "#000",
  radius = 100,
  ...props
}) => <circle cx={x} cy={y} fill={fill} r={radius} {...props} />;

module.exports = withDrag(Circle);

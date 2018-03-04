import React from "react";

import withDrag from "./base/with-drag";

const Ellipse = ({
  x = 100,
  y = 50,
  fill = "#000",
  radiusX = 100,
  radiusY = 50,
  ...props
}) => (
  <ellipse cx={x} cy={y} fill={fill} rx={radiusX} ry={radiusY} {...props} />
);

export default withDrag(Ellipse);

import React from "react";

import withDrag from "./base/with-drag";

const Rectangle = ({
  x = 0,
  y = 0,
  fill = "#000",
  gradient = null,
  height = 100,
  width = 100,
  ...props
}) => (
  <rect
    x={x}
    y={y}
    fill={gradient || fill}
    height={height}
    width={width}
    {...props}
  />
);

export default withDrag(Rectangle);

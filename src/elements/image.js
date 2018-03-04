import React from "react";
import withDrag from "./base/with-drag";

const Image = ({ x = 0, y = 0, height, width, href, opacity, ...props }) => (
  <image
    xlinkHref={href}
    x={x}
    y={y}
    height={height}
    width={width}
    preserveAspectRatio="xMinYMin meet"
    opacity={opacity}
    {...props}
  />
);

export default withDrag(Image);

import React from "react";

import withDrag from "./base/with-drag";

const LinearGradient = ({ name, x1, x2, y1, y2, stops, ...props }) => (
  <linearGradient id={name} x1={x1} x2={x2} y1={y1} y2={y2} {...props}>
    {stops.map((stop, index) => (
      <stop
        key={index}
        offset={stop.offset}
        stopColor={stop.color}
        stopOpacity={stop.opacity}
      />
    ))}
  </linearGradient>
);

export default withDrag(LinearGradient);

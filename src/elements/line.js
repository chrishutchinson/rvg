import React from "react";

import withDrag from "./base/with-drag";

const Line = ({ x = [100, 200], y = [50, 100], stroke = "#000", ...props }) => (
  <line x1={x[0]} x2={x[1]} y1={y[0]} y2={y[1]} stroke={stroke} {...props} />
);

export default withDrag(Line);

import React from "react";

import withDrag from "./base/with-drag";

const Path = ({ d, fill, transform, ...props }) => (
  <path d={d} fill={fill} transform={transform} {...props} />
);

export default withDrag(Path);

import React from "react";

export default Component => {
  const Wrapper = props => {
    const { draggable } = props;

    return (
      <Component
        {...props}
        {...(draggable
          ? {
              "data-draggable": true,
              style: {
                cursor: "move"
              }
            }
          : {
              style: {
                pointerEvents: "none"
              }
            })}
      />
    );
  };

  return Wrapper;
};

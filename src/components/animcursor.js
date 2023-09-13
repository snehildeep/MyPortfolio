// AnimCursor.js

import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={18}
      outerSize={0.0008}
      color="87, 232, 212"
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={100000}
      outerStyle={{
        border: "20px solid var(--cursor-color)",
      }}
      clickables={["a", "button", ".custom-cursor"]}
    />
  );
}

export default AnimCursor;

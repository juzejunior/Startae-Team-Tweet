import PropTypes from "prop-types"
import React from "react"

const Background = () => (
  <div
    style={{
      position: "absolute",
      width: "100%",
      height: "140%",
      clipPath: "polygon(0 0, 100% 0,100% 100%,0 50%)",
      background: "#5D1EB2",
      zIndex: -1,
    }}
  ></div>
)

export default Background

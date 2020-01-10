import React from "react"
import TwitterIcon from "../images/logo-twitter.svg"

const ContentIntro = ({ text, position }) => (
  <div
    style={{
      display: "flex",
      justifyContent: position,
    }}
  >
    <img src={TwitterIcon} style={{ marginRight: 8 }} />
    <span style={{ color: "white", fontSize: 20 }}>{text}</span>
  </div>
)

export default ContentIntro

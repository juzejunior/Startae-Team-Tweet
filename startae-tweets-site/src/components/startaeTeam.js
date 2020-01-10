import React from "react"
import PropTypes from "prop-types"

const StartaeTeam = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
    }}
  >
    {children}
  </div>
)

StartaeTeam.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StartaeTeam

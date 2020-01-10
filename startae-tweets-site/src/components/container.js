import React from "react"
import PropTypes from "prop-types"

const Container = ({ children }) => (
  <div
    style={{
      width: "100%",
      padding: 24,
    }}
  >
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container

import React from "react"
import PropTypes from "prop-types"
import { isMobile } from "mobile-device-detect"

const Content = ({ children }) => (
  <div
    style={{
      marginTop: isMobile ? 10 : 64,
    }}
  >
    {children}
  </div>
)

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content

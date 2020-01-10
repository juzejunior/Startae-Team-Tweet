import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import StartaeLogoSymbol from "../images/logo-symbol.svg"
import StartaeLogoType from "../images/logo-type.svg"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect"

const Header = () => (
  <Link to={"/"}>
    {isMobile && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: 70,
          width: "100%",
          position: "fixed",
          background: "#550aaa",
          alignItems: "center",
        }}
      >
        <img src={StartaeLogoSymbol} style={{ position: "relative" }} />
      </div>
    )}
    {!isMobile && (
      <div
        style={{
          display: "flex",
          marginBottom: 64,
          marginLeft: 16,
          marginRight: 16,
        }}
      >
        <img
          src={StartaeLogoSymbol}
          style={{ marginRight: 8, marginTop: 24 }}
        />
        <img src={StartaeLogoType} style={{ marginRight: 8, marginTop: 24 }} />
      </div>
    )}
  </Link>
)

export default Header

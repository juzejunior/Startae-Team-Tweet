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
    {/*isMobile && (
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
      )*/}
    <div
      style={{
        display: "flex",
        marginBottom: isMobile ? "auto" : 64,
        marginLeft: isMobile ? "auto" : 16,
        marginRight: isMobile ? "auto" : 16,
        background: isMobile ? "#550aaa" : "#5D1EB2",
        position: isMobile ? "fixed" : "static",
        width: "100%",
        justifyContent: isMobile ? "center" : "flex-start",
        alignItems: isMobile ? "center" : "start",
      }}
    >
      <img src={StartaeLogoSymbol} style={{ marginRight: 8, marginTop: 24 }} />
      <img
        src={StartaeLogoType}
        style={{
          marginRight: 8,
          marginTop: 24,
          display: isMobile ? "none" : "inline",
        }}
      />
    </div>
  </Link>
)

export default Header

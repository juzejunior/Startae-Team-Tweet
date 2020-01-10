import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ovalIcon from "../images/oval.svg"
import CardTweet from "../components/cardTweet"
import { isMobile } from "mobile-device-detect"

const TimelineTweet = ({ avatar, tweet, position }) => (
  <div>
    <div style={{ display: "flex", marginBottom: -10 }}>
      {!isMobile && (
        <CardTweet
          visible={position == "left"}
          avatar={avatar}
          tweet={tweet}
          position={position}
        />
      )}

      <div>
        <div
          style={{
            background: "white",
            height: "100%",
            width: 15,
            display: "flex",
            borderRadius: "100px",
          }}
        >
          <img src={ovalIcon} minWidth="100px" />
        </div>
      </div>
      <CardTweet
        visible={position == "right"}
        avatar={avatar}
        tweet={tweet}
        position={position}
      />
    </div>
  </div>
)

export default TimelineTweet

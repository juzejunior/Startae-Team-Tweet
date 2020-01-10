import React from "react"
import triangleLeftIcon from "../images/triangleLeft.svg"
import triangleRightIcon from "../images/triangleRight.svg"
import { isMobile } from "mobile-device-detect"

function CardTweet({ avatar, tweet, visible, position }) {
  const visibility = visible ? "visible" : "hidden"

  return (
    <div style={{ display: "flex", visibility: visibility }}>
      {position == "right" && <img src={triangleLeftIcon} />}
      <div
        style={{
          maxWidth: 410,
          marginBottom: 20,
          borderRadius: 5,
          background: "white",
          display: "flex",
          padding: 16,
        }}
      >
        {position == "right" && (
          <img
            src={avatar}
            style={{
              marginRight: 16,
              height: 70,
              borderRadius: 70 / 2,
            }}
          />
        )}
        <div style={{ marginRight: 16 }}>
          <div
            style={{
              color: "black",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: position == "left" ? "right" : "left",
            }}
          >
            5
          </div>
          <div
            style={{
              fontStyle: "italic",
              color: "#656565",
              fontSize: "1em",
              textAlign: position == "left" ? "right" : "left",
            }}
          >{`"${tweet}"`}</div>
        </div>
        {position == "left" && (
          <img
            src={avatar}
            style={{ marginRight: 16, height: 70, borderRadius: 70 / 2 }}
          />
        )}
      </div>
      {position == "left" && <img src={triangleRightIcon} />}
    </div>
  )
}

export default CardTweet

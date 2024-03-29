import React from "react"
import triangleLeftIcon from "../images/triangleLeft.svg"
import triangleRightIcon from "../images/triangleRight.svg"
import heartIcon from "../images/heart.svg"

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
            src={`https://startae.com/assets/images/team/${avatar}`}
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
              fontFamily: "Proxima Nova Bold",
              textAlign: position == "left" ? "right" : "left",
            }}
          >
            5h
          </div>
          <div
            style={{
              fontStyle: "italic",
              color: "#656565",
              fontSize: "1em",
              marginBottom: "10px",
              textAlign: position == "left" ? "right" : "left",
            }}
          >{`"${tweet}"`}</div>
        </div>

        {position == "left" && (
          <img
            src={`https://startae.com/assets/images/team/${avatar}`}
            style={{ marginRight: 16, height: 70, borderRadius: 70 / 2 }}
          />
        )}
      </div>
      {position == "left" && <img src={triangleRightIcon} />}
    </div>
  )
}

export default CardTweet

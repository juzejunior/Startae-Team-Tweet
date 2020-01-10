import React from "react"
import { navigate } from "gatsby"
import heartIcon from "../images/heart.svg"

function CardProfile({ member }) {
  const username = member.twitter.split("https://twitter.com/")[1]
  const handleClickEvent = event => {
    if (event.target.tagName != "A") {
      navigate(
        `/timeline/?username=${username}&name=${member.name}&avatar=${
          member.avatar.split("/team/")[1]
        }&role=${member.role}&tweet=${member.tweet}`
      )
    }
  }

  return (
    <div
      key={"card"}
      style={{
        maxWidth: 300,
        minHeight: 550,
        borderRadius: 5,
        margin: 8,
        background: "white",
        display: "flex",
        flexDirection: "column",
        padding: 16,
        cursor: "pointer",
        justifyContent: "space-between",
      }}
      onClick={handleClickEvent}
    >
      <img src={member.avatar} />
      <div style={{ textAlign: "center", fontSize: 24, color: "black" }}>
        <span>{member.name}</span>
      </div>
      <div style={{ textAlign: "center" }}>
        <span>
          <a
            href={member.twitter}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "black",
              opacity: "0.7",
              fontSize: 16,
            }}
          >
            {"@" + username}
          </a>
        </span>
      </div>
      <div
        style={{
          textAlign: "center",
          color: "black",
          fontSize: 16,
          fontFamily: "Proxima Nova Bold",
        }}
      >
        <span>{member.role}</span>
      </div>
      <div
        style={{
          textAlign: "center",
          fontStyle: "italic",
          color: "#656565",
          fontSize: 18,
        }}
      >
        <span>{`"${member.tweet}"`}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "baseline",
          marginRight: 8,
          color: "#A7B8C3",
          marginTop: 8,
        }}
      >
        <img src={heartIcon} style={{ marginRight: 8 }} />
        <span>1</span>
      </div>
    </div>
  )
}

export default CardProfile

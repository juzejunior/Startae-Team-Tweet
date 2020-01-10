import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Background from "../components/Background"
import Container from "../components/container"
import Content from "../components/content"
import Pagetitle from "../components/pageTitle"
import PageSubTitle from "../components/pageSubtitle"
import ContentIntro from "../components/contentIntro"
import TimelineTweet from "../components/timelineTweet"
import { isMobile } from "mobile-device-detect"

function Timeline({ location }) {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [username, setUsername] = useState("")
  const [avatar, setAvatar] = useState("")
  const [tweet, setTweet] = useState("")
  const tweetsCount = [1, 2, 3, 4, 5]

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setName(params.get("name"))
    setRole(params.get("role"))
    setUsername(params.get("username"))
    setAvatar(params.get("avatar"))
    setTweet(params.get("tweet"))
  }, [])

  return (
    <Layout>
      <SEO title="Timeline" />
      <Background />
      <Header />
      <Container>
        <div
          style={{
            minWidth: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobile ? "flex-start" : "center",
            alignItems: isMobile ? "start" : "center",
            marginTop: 64,
          }}
        >
          <Pagetitle title={name} />
          <PageSubTitle subtitle={role} />
        </div>

        <Content>
          <a
            href={`https://twitter.com/${username}`}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "black",
              opacity: "0.7",
              fontSize: 16,
            }}
          >
            <ContentIntro
              text={`@${username}`}
              position={isMobile ? "flex-start" : "center"}
            />
          </a>

          <Content>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: isMobile ? "start" : "center",
                flexDirection: "column",
              }}
            >
              {tweetsCount.map((tweetCount, index) => {
                let position = index % 2 == 0 ? "right" : "left"
                return (
                  <div key={index}>
                    <div style={{ display: "flex" }}>
                      <TimelineTweet
                        avatar={avatar}
                        tweet={tweet}
                        position={isMobile ? "right" : position}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </Content>
        </Content>
      </Container>
    </Layout>
  )
}

export default Timeline

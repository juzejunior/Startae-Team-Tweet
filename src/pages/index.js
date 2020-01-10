import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Background from "../components/background"
import Container from "../components/container"
import Content from "../components/content"
import Pagetitle from "../components/pageTitle"
import PageSubTitle from "../components/pageSubtitle"
import ContentIntro from "../components/contentIntro"
import StartaeTeam from "../components/startaeTeam"
import CardProfile from "../components/cardProfile"
import axios from "axios"
import { isMobile } from "mobile-device-detect"

function IndexPage() {
  const [team, setTeam] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://gist.githubusercontent.com/sales/f961f967c6668c7c1c3ed565e3bf94e8/raw/71168b72d9a3a199bd1de01026b5031875f6d432/team.json"
      )
      .then(function(response) {
        setTeam(
          response.data.filter(
            member =>
              member.name != "Victoria Haidamus" &&
              member.name != "Kande Bonfim"
          )
        )
      })
      .catch(function(error) {
        console.log(error)
      })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Background />
      <Header />
      <Container>
        <div key={isMobile} style={{ minWidth: "30%", marginTop: 70 }}>
          <Pagetitle title="Meet our team" />
          <PageSubTitle
            subtitle={
              "We are a group of multi-skilled individuals who are entrepreneurial by nature and live to make digital products and services that people love to use."
            }
          />
        </div>

        <Content>
          <ContentIntro text="Latest tweets from our team" position="start" />
          <Content>
            <StartaeTeam>
              {team.map(member => {
                return <CardProfile key={member.name} member={member} />
              })}
            </StartaeTeam>
          </Content>
        </Content>
      </Container>
    </Layout>
  )
}

export default IndexPage

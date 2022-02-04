import React from "react"

import Box from "reusecore/Box"
import Counter from "reusecore/Counter"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import { Container, Row, Col } from "reusecore/Layout"
import { Link } from "gatsby"
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle"

import data from "assets/data/awards"
import AwardsSectionWrapper from "./awards.style"

const Awards = () => {
  return (
    <AwardsSectionWrapper>
      <Container>
        <Row>
          <Col className="md-6">
            <Box className="awards-left-content">
              <SectionTitle>
                <SectionBackground>
                  <Heading as="h1">Be Part of Community</Heading>
                </SectionBackground>
                <Text>
                  Be part of a tight knit growing Community. Boom has
                  successfully completed our Alpha Testnet phase and have moved
                  into Beta on Solana Mainnet in just 3 months. Now you can chat
                  and mint NFTs directly on boom.army. Community Channels, NFT
                  Community Governance, and a Market Place are coming on
                  boom.army in Q1-22. To find out the latest go to{" "}
                  <a href="https://twitter.com/boom_army_">@boom_army_</a> or
                  join our <a href="https://discord.gg/nEyQQeaNRk">Discord</a>.
                </Text>
              </SectionTitle>
            </Box>
          </Col>

          <Col className="md-6 awards-col">
            <Box className="awards-item-wrapper">
              {data.awards.map((item, index) => (
                <Box
                  className={`awards-item ${index === 3 ? `active` : ""}`}
                  key={index}
                >
                  <Text as="span" className="award-icon">
                    {" "}
                    {item.icon}{" "}
                  </Text>
                  <Box className="counter-text">
                    {" "}
                    <Counter end={item.count} suffix={item.suffix} />{" "}
                    <Text as="span">{item.body}</Text>{" "}
                  </Box>
                </Box>
              ))}
            </Box>
          </Col>
        </Row>
      </Container>
    </AwardsSectionWrapper>
  )
}

export default Awards

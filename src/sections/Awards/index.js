import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Counter from "reusecore/Counter"
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
                  <Heading as="h1">Development progress</Heading>
                </SectionBackground>
                <Text>
                  We've successfully completed our Alpha Testnet phase and have
                  moved into Beta on Solana Mainnet. Now you can chat and mint
                  NFTs directly on boom.army. In the next few months we're going
                  to be delivering Community Channels, NFT Community Governance,
                  and a market place where users can buy and sell the NFTs they
                  mint on boom.army. We've also got our first public NFT sale
                  launching in February. To find out more go to{" "}
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

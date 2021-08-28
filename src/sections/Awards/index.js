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
                  Alpha is being built out as we speak and a lot of the Solana community on Twitter are following harkl_ ready to be alpha testers. 
                  There are 3 parts of the application: the React client, The token, and the GraphQL API. 
                  For alpha launch they'll be deployed on a centralised host, but the overall goal on the roadmap is to open source the client
                  and move the GraphQL API into <a href="https://orbitdb.org">Orbit DB</a> built with <a href="https://ipfs.io">IPFS</a>.
                  You can follow completeness of the different componets here.
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

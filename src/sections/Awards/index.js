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
                  <Heading as="h1">Largest Achievements</Heading>
                </SectionBackground>
                <Text>
                  Attention in when in just something bread not hundred well,
                  muff value emerge on the known officers. A parameters phase
                  orthographic the can differentiates far catch.
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
                    <Counter end={item.count} suffix="+" />{" "}
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

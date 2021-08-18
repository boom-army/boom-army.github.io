import React from "react"
import { Link } from "gatsby"

import { SectionTitle } from "reusecore/SectionTitle"
import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"

import data from "assets/data/stack"
import StackSectionWrapper from "./stack.style"

const Stack = () => {
  return (
    <StackSectionWrapper id="stack">
      <Container>
        <Row>
          <Col className="offset-lg-3 offset-md-1 lg-6 md-10  sm-12">
            <SectionTitle>
              <Heading> Technology targets</Heading>
              <Text>
                Harkl's end goal is targeting a completely opensource, censorship resistant platform deployment. 
                But the token will also have utility to be used on every social media platform no matter how centralised.
                After alpha, we'll be releasing a road map outlining the timeline from centralised delivery in alpha, to
                a completely decentralised blockchain platform.
              </Text>
            </SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col className="md-8 offset-md-2 xs-12">
            <Box className="language-image">
              {data.stack.map((item, index) => (
                <Link to={item.url} key={index} target="_blank">
                  <img src={item.imageSrc} alt={item.name} />
                </Link>
              ))}
            </Box>
          </Col>
        </Row>
      </Container>
    </StackSectionWrapper>
  )
}

export default Stack

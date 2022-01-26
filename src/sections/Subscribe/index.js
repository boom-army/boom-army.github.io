import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import { Link } from "gatsby"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import { SectionTitle } from "reusecore/SectionTitle"

import SubscribeWrapper from "./subscribe.style"

const Subscribe = () => {
  return (
    <SubscribeWrapper id="contact">
      <Box className="subscribe-box-wrapper">
        <Container>
          <Row>
            <Col className="col-12">
              <Box className="subscribe-box-bg">
                <Row>
                  <Col className="lg-6 offset-lg-3 xs-12">
                    <SectionTitle>
                      <Heading> Don't miss out, Stay updated </Heading>
                      <Text>
                        Follow @boom_army_ on twitter for updates and market news.
                        All live updates will be released via Twitter.
                      </Text>
                    </SectionTitle>
                  </Col>
                </Row>
                <Row>
                  <Col className="lg-8 offset-lg-2 xs-12">
                    <Box className="banner-btn">
                      <Link to="https://twitter.com/boom_army_" target="_blank" className="btn btn-fill">
                        Go to updates
                      </Link>
                    </Box>
                  </Col>
                </Row>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </SubscribeWrapper>
  )
}

export default Subscribe

import React from "react"
import { Link } from "gatsby"
import CountdownTimer from "react-component-countdown-timer"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle"
import solana from "assets/images/solana.svg"

import {
  FaBitcoin,
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa"

import CoinFundWrapper from "./coinFund.style"

const CoinFund = () => {
  const settings = {
    count:  1634302799 - (Date.now()/1000),
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "Days",
    hourTitle: "Hours",
    minuteTitle: "Minutes",
    secondTitle: "Seconds",
    id: "countdownwrap"
  }

  return (
    <CoinFundWrapper id="token">
      <Container>
        <Row>
          <Col className="lg-6 md-12 ">
            <Box className="coin-fund-content-left">
              <SectionTitle>
                <SectionBackground>
                  <Heading>
                    Monetized, censorship resistant social media is coming...
                  </Heading>
                </SectionBackground>
                <Text>
                  "If you're not paying for it, you're not the customer; you're the product".{" "}
                  <br />
                  Get paid in crypto for your social media. Decentralized on Solana, the fastest functional blockchain that exists.
                </Text>
              </SectionTitle>

            </Box>
          </Col>
          <Col className="lg-6 md-12 countdown-wrap">
            <Box className="countdown-wrapper">
              <Text>Boom launching in... </Text>
              <CountdownTimer {...settings} />
            </Box>

            <Box className="payment-getway">
              <Text as="span">
              <Box style={{width: "200px", margin: "0 auto"}}>
                <img src={solana} alt="solana logo" />
              </Box>
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </CoinFundWrapper>
  )
}

export default CoinFund

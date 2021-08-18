import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import Input from "reusecore/Form/Input"
import Button from "reusecore/Button"

import BannerImage from "assets/images/banners/banner-three/cryptik-banner-three-thumb.svg"
import particleTopLeft from "assets/images/particles/banner/particle-top-left.png"
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png"
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png"
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png"
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png"

import BannerWrapper from "./banner.style"

const BannerThree = () => {
  return (
    <BannerWrapper>
      <Box className="banner-three-wrap">
        <img
          src={particleTopLeft}
          className="section__particle top-left"
          alt="cryptik particles"
        />
        <img
          src={particleUnderLogo}
          className="section__particle two"
          alt="cryptik particles"
        />
        <img
          src={prticleTopRight}
          className="section__particle top-right"
          alt="cryptik particles"
        />
        <img
          src={particleBottomLeft}
          className="section__particle bottom-left"
          alt="cryptik particles"
        />
        <img
          src={particleBottomRight}
          className="section__particle bottom-right"
          alt="cryptik particles"
        />
        <Container>
          <img
            className="banner__thumb"
            alt="cryptik banner thumb"
            src={BannerImage}
          />
          <Row>
            <Col className="lg-8 md-10 xs-12">
              <Box className="banner-content">
                <Heading>
                  Social media reimagined as DeFI on Solana blockchain.
                </Heading>
                <Text>
                "If you are not paying for it, you're not the customer; you're the product being sold".{" "}
                <br />
                  Get paid for your content through a censorship resitant DeFI app, built on the fastest functional blockchain that exists.
                </Text>

                <Box className="input-box">
                  <Input type="email" placeholder="Enter your email" />
                  <Button>Create Account</Button>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </BannerWrapper>
  )
}

export default BannerThree

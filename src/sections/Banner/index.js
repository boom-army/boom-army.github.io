import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Badge from "reusecore/Badge"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"

import BannerImage from "assets/images/banners/banner-one/media-view.png"

import particleTopLeft from "assets/images/particles/banner/particle-top-left.png"
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png"
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png"
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png"
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png"

import BannerWrapper from "./banner.style"

const Banner = () => {
  return (
    <BannerWrapper>
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
        <Row>
          <Col className="lg-8 xs-12">
            <Box className="banner-content">
              <Badge className="offer-text">
                Making social better
              </Badge>
              <Heading as="h1">
                Democratic social media<br /> monetized for Content Creators
              </Heading>
              <Text>
                "Users" who provide their data to Big Social Media at no cost,{" "} 
                typically have a low opportunity to monetize their content.
                <br /><br />
                Boom aims to change that. Read our Whitepaper to find out more:
              </Text>
              <Box className="banner-btn">
                {/* <Link to="#" className="btn btn-fill">
                  {" "}
                  Get in touch{" "}
                </Link> */}
                <Link to="https://github.com/boom-army/docs/blob/main/whitepaper.md" className="btn" target="_blank">
                  White paper
                </Link>
              </Box>
            </Box>
          </Col>
        </Row>
        <img
          src={BannerImage}
          className="banner__thumb"
          alt="cryptik banner thumb"
        />
      </Container>
    </BannerWrapper>
  )
}

export default Banner

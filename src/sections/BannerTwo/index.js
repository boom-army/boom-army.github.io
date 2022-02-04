import React from "react";
import { Link } from "gatsby"

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
// import Badge from "reusecore/Badge";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

// import BannerImage from "assets/images/banners/banner-two/cryptik-banner-two-thumb.svg";

import particleTopLeft from "assets/images/particles/banner/particle-top-left.png";
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png";
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png";
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png";
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png";

import {FaRocket} from 'react-icons/fa'

import keyIcon from 'assets/images/banners/banner-two/cryptik-banner-key-icon.svg';
import watchIcon from 'assets/images/banners/banner-two/cryptik-banner-watch-icon.svg';
import heartIcon from 'assets/images/banners/banner-two/cryptik-banner-heart-icon.svg';
import NFTChannels from 'assets/images/banners/banner-two/NFT-channels.png';

import BannerWrapper from "./banner.style";

const BannerTwo = () => {
  return (
    <BannerWrapper>
      <img src={particleTopLeft} className="section__particle top-left" alt="cryptik particles"/>
      <img src={particleUnderLogo} className="section__particle two" alt="cryptik particles"/>
      <img src={prticleTopRight} className="section__particle top-right" alt="cryptik particles"/>
      <img src={particleBottomLeft} className="section__particle bottom-left" alt="cryptik particles"/>
      <img src={particleBottomRight} className="section__particle bottom-right" alt="cryptik particles"/>
      <Container>
        <div class="banner__thumb">
          <Image src={NFTChannels} alt="NFT Channels" />
        </div>
        <Row>
          <Col className="lg-7 md-10 xs-12">
            <Box className="banner-content"> 
              <Heading>
                NFT Driven  <br/>
                Communities
              </Heading>
              <Text as="span" className="description">
              Boom is a social network built on the Solana blockchain. <br />
              Boom lets you create NFT Communities with one click.  <br />
              NFTs govern access to those Communities.  <br />
              Trade your NFTs on our Creator Market Place soon.
              </Text>

              <Box className="coin-info">
                <Box>
                  <Image src={keyIcon} alt="crypto banner icon" />
                  <Text>NFT secured</Text>
                </Box>
                <Box>
                  <Image src={watchIcon} alt="crypto banner icon" />
                  <Text>Fast</Text>
                </Box>
                <Box>
                  <Image src={heartIcon} alt="crypto banner icon" />
                  <Text>Community driven</Text>
                </Box>
              </Box>

              <Box className="banner-btn">
                <Link to="https://app.boom.army" className="btn btn-fill">
                   <FaRocket /> Launch app 
                </Link> 
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </BannerWrapper>
  );
};

export default BannerTwo;

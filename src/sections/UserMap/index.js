import React from "react"

import { Container, Row, Col } from "reusecore/Layout"
import { SectionTitle } from "reusecore/SectionTitle"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"

import BoomMintImage from "assets/images/boom-mint.png"
import UserMapWrapper from "./userMap.style"

const UserMap = () => {
  return (
    <UserMapWrapper>
      <Box className="usermap-wrapper"> 
        <Container className="fluid">
          <Row>
            <Col className="sm-12 md-10 offset-md-1">
              <SectionTitle className="text-center">
                <Heading>The 1303 OG NFT Minting NOW</Heading>
                <Text>
                  Boom.Army is building a market place for Artists and Creators
                  to Mint, Sell and Build Communities using NFTs. Holders of
                  #The1303 OG NFT will receive a split share of 20% of our total
                  Market Place profits FOREVER. <a href="BoomMintImage">Mint your 1303 NFT now!</a>
                </Text>
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col className="md-12">
              <Box className="usermap-block">
                <img src={BoomMintImage} alt="Boom Minting NOW" />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </UserMapWrapper>
  )
}

export default UserMap

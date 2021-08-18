import React from "react"
import { Link } from "gatsby"

import Subscribe from "sections/Subscribe"
import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Text from "reusecore/Text"

import data from "assets/data/footer"
import FooterWrapper from "./footer.style"

const Footer = () => {
  return (
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        <Subscribe />
        <Container>
          <Row>
            <Col className="xs-12">
              <Box className="footer-social-links">
                {data.links.map((item, index) => (
                  <Link to={item.url} key={index}>
                    {item.icon}
                  </Link>
                ))}
              </Box>

              <Box className="copyright-text">
                <Text>§ Crypto Rocks</Text>
                <Text as="span">
                  <Link to="https://solanabeach.io">WAGMI</Link>
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </FooterWrapper>
  )
}

export default Footer;

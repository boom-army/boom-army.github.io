import React from "react";
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo";
import Navigation from "sections/Navigation";
import CoinFund from "sections/CoinFund";
import Service from "sections/Service";
import Stack from "sections/Stack"; 
import Faq from "sections/Faq";
import Footer from "sections/Footer";

import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <Navigation />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CoinFund />
      <Service />
      <Stack /> 
      <Faq />
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default IndexPage

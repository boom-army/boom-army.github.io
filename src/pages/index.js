import React from "react";
import { ThemeProvider } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo";
import Navigation from "sections/Navigation";
import BannerTwo from "sections/BannerTwo";
import Banner from "sections/Banner";
import Service from "sections/Service";
import Stack from "sections/Stack"; 
import Faq from "sections/Faq"; 
import Awards from "sections/Awards";
import Footer from "sections/Footer";
import UserMap from "../sections/UserMap";

import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Boom | NFT Driven Communities on Solana" />
      <Navigation />
      <BannerTwo />
      <UserMap />
      <Service />
      <Stack />
      <Banner />
      <Awards />
      <Faq />
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default IndexPage

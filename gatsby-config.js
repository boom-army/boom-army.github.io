module.exports = {
  siteMetadata: {
    title: `Boom | NFT Driven Creator Communities`,
    description: `BMA is a token currently being built on Solana to change the way people socially enage with NFTs.`,
    author: `@harkl_`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: true,
        displayName: true,
        minify: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: './src',
        aliases: {
          assets: "./assets",
          components: "./components",
          sections: "./sections",
          reusecore: "./reusecore",
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

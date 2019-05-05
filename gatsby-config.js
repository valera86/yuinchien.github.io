module.exports = {
  siteMetadata: {
    title: `Yuin Chien`,
    description: `Yuin Chien is a multidisciplinary designer who creates form and function by pushing pixels and code.`,
    author: `Yuin Chien`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

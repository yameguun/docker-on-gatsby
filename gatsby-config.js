/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `ESSENTIALS`,
    description: `おいしい食材と食事を追求するサイト`,
    lang: `ja`,
    siteUrl: `https://objective-haibt-010a47.netlify.app`,
    locale: `ja_JP`,
    fbappid: `xxxxxxxxxxxxxxxxxxxx`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Software Development, Design, Consulting, Education`,
    description: `Software Development, Design, Consulting, Education`,
    author: `@raushang4_labs`,
    siteUrl: `https://raushang4.tech`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `raushang4 Labs`,
        short_name: `raushang4 Labs`,
        start_url: `/`,
        background_color: `#0E2F00`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        //theme_color: `#FFFFFF`, //White
        //theme_color: `#FCDB3A`, //Yellow
        //theme_color: `#0E2F00`, //Dark Green
        //theme_color: `#005E1F`, //Lighter Green
        theme_color: `#0E2F00`, //Dark Green
        // display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        display: `standalone`,
      },
    },
  ],
}

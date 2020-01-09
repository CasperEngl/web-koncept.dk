module.exports = {
  siteMetadata: {
    title: `Web-Koncept`,
    description: `Få en ny flot og sikker hjemmeside hos et af Danmarks hurtigst voksende webbureauer. Brugervenlige webløsninger. Afdelinger i København, Aalborg og Århus.`,
    author: `@casperengl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss')(),
          require('autoprefixer')(),
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true,
    //     develop: true, // Enable while using `gatsby develop`
    //     tailwind: true,
    //   },
    // },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        specialChars: '/:',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}

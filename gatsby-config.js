module.exports = {
  siteMetadata: {
    title: `Mikołaj Zienkowicz`,
    description: `Jestem młodym twórcą stron internetowych, jeśli potrzbujesz małej strony dla twojej firmy o schludnym wyglądzie, możliwością edycji treści, która dostosowana jest do wszystkich urządzeń, to dobrze trafiłeś!`,
    author: `mikiołaj zienkowicz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `illustrations`,
        path: `${__dirname}/src/assets/illustrations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`300`, `700`, `800`, `900`],
            subsets: [`latin-ext`],
          },
        ],
      },
    }
  ],
}

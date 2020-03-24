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
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: "GatsbyJS",
        // short_name: "GatsbyJS",
        // start_url: "/",
        // background_color: "#6b37bf",
        // theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        // display: "standalone",
        // icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        // crossOrigin: `use-credentials`,
        name: "MZWeb",
        short_name: "MZWeb",
        start_url: "/",
        background_color: "#6c63ff",
        theme_color: "#6c63ff",
        display: "standalone",
        icon: "src/assets/meta/android-chrome-96x96.png",
        crossOrigin: `use-credentials`,
      },
    },
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

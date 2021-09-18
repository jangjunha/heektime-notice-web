module.exports = {
  siteMetadata: {
    siteUrl: "https://notice.heektime.heek.kr",
    title: "heektime-notice-web",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout/layout.tsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              quality: 80,
              withWebp: { quality: 80 },
              withAvif: { quality: 80 },
              disableBgImageOnAlpha: true,
              backgroundColor: "transparent",
              srcSetBreakpoints: [340, 520, 890],
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: 'Kyle Peterson',
    party: 'YES SIR',
    can: 'Do!',
    id: 100
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /.svg/
          }
      }
    }
  ],
}

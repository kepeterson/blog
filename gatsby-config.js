module.exports = {
  siteMetadata: {
    title: 'Kyle Peterson',
    twitter: 'https://twitter.com/_KylePeterson',
    linkedin: 'https://www.linkedin.com/in/kylep/',
    facebook: 'https://www.facebook.com/newsoundmoney',
    github: 'https://github.com/kepeterson'
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

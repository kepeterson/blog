import React from 'react'
import { Link } from 'gatsby'
import Twitter from '../images/twitter.svg'
import Facebook from '../images/facebook.svg'
import Github from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'
import { StaticQuery, graphql } from 'gatsby'

export default () => {
  return <footer>
    <span>© Kyle Peterson</span>
    <Link to="/about/">About</Link>
    <Social />
  </footer>
}

const Social = () => (
  <StaticQuery query={graphql`
  query SocialQuery {
    site {
      siteMetadata {
        twitter
        github
        facebook
        linkedin
      }
    }
  }
`} render={data => (
    <div className="socials">
      <a href={data.site.siteMetadata.twitter}>
        <Twitter/>
      </a>
      <a href={data.site.siteMetadata.facebook}>
        <Facebook/>
      </a>
      <a href={data.site.siteMetadata.github}>
        <Github/>
      </a>
      <a href={data.site.siteMetadata.linkedin}>
        <LinkedIn/>
      </a>
    </div>
  )}/>
)

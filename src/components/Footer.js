import React from 'react'
import { Link } from 'gatsby'
import Twitter from '../images/twitter.svg'
import Facebook from '../images/facebook.svg'
import Github from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'

export default () => {
  return <footer>
    <span>© Kyle Peterson</span>
    <Link to="/about/">About</Link>
    <div className="socials">
      <a href="https://www.google.com">
        <Twitter/>
      </a>
      <Facebook/>
      <Github/>
      <LinkedIn/>
    </div>
  </footer>
}

const ScalableIcon = () => (
  <svg>
    <use src="src/images/twitter.svg"></use>
  </svg>
)

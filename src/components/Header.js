import React from 'react'
import { Link } from 'gatsby'
import { Social } from './Footer'

const Header = ({ siteTitle }) => (
  <header>
    <div style={{ margin: '0 auto', maxWidth: 960, padding: '1.45rem 1.0875rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="right-links">
        <Link to="/about" style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Me
        </Link>
        <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Blog
        </Link>
        <Social/>
      </div>
    </div>
  </header>
)

export default Header

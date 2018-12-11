import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import './layout.css'

import ReactGA from 'react-ga'
import { GA_TRACKING_ID } from '../config'

let GAInitialized = false
const initialize = () => {
  ReactGA.initialize(GA_TRACKING_ID)
  console.log("initialized.")
  GAInitialized = true
}

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV == "production") {
  initialize()
}

const logPageView = () => {
  if (!GAInitialized) return
  console.log(`Logging pageview for ${window.location.pathname}`)

  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
};

class Logger extends React.Component {
  componentDidMount() {
    console.log('mount')
    logPageView()
  }

  componentDidUpdate() {
    console.log('update')
    logPageView()
  }

  render() {
    const { children } = this.props
    return children
  }
}

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Logger>
          <Header siteTitle={data.site.siteMetadata.title} />
          </Logger>
          <div className="page-wrap"
            style={{
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
          <Footer />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

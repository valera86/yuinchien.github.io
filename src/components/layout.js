/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./styles.css"

const Layout = ({ children }) => (
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
    render={data => (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        
        <SEO title="Yuin Chien" keywords={[`yuin chien`, `creative coding`, `generative`, `design`, `code`, `Yuin Chien LLC`, `Yuin`]} />
        
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}>
          <main>{children}</main>
          <footer
            style={{
              marginTop: `80px`
            }}>
            © {new Date().getFullYear()} Yuin Chien LLC
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

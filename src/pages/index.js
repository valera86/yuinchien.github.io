import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import resume from "../files/resume.pdf"
import Layout from "./../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div id="home-wrapper">
        <div id="home-container" className="animate-up">
          <div id="projects">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <span className="project" key={node.id}>
                {node.frontmatter.redirect===""
                  ? (<Link to={node.fields.slug}><span className="h1">{node.frontmatter.title}</span></Link>)
                  : (<a href={node.frontmatter.redirect} target="_blank" rel="noopener noreferrer"><span className="h1">{node.frontmatter.title}</span></a>)
                }
                <span className="desc h1"> {node.frontmatter.description} ⁄ </span>
              </span>
            ))}
          </div>
          <div id="personal-info" className="h2">
            <div id="bio">Yuin Chien is a multidisciplinary designer who creates form and function by pushing pixels and code. Striving for aesthetics, imagination and intent, she explores the intersection of human interactions, design and technology. Her work has been selected by MoMA, Communication Arts, STA 100 Awards, Huffington Post, and The Verge. See <a href={resume}>resume</a>.</div>
            <div className="bullet">cloud@yuinchien.com</div>
            <div className="bullet"><a rel="noopener noreferrer" href="https://www.instagram.com/tinycloud/" target="_blank">instagram.com/tinycloud</a></div>
            <div className="bullet"><a rel="noopener noreferrer" href="https://twitter.com/yuinchien" target="_blank">twitter.com/yuinchien</a></div>
          </div>
        </div>
        <div id="grid">
          <div className="margin"></div>
          <div id="col1" className="col"></div>
          <div id="col2" className="col"></div>
          <div id="col3" className="col"></div>
          <div id="col4" className="col"></div>
          <div id="col5" className="col"></div>
          <div id="col6" className="col"></div>
          <div id="col7" className="col"></div>
          <div id="col8" className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="margin"></div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            redirect
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

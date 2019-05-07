import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import resume from "../files/resume.pdf"

export default ({ data }) => {
  return (
    <Layout>
      <div id="projects" className="text">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <span className="project" key={node.id}>
            <Link to={node.fields.slug}><span className="h1">{node.frontmatter.title}</span></Link>
            <span className="desc h1"> {node.frontmatter.description} ⁄ </span>
          </span>
        ))}
      </div>
      <div className="h2 text">
        <div id="bio">Yuin Chien is a multidisciplinary designer who creates form and function by pushing pixels and code. Striving for aesthetics, imagination and intent, she explores the intersection of human interactions, design and technology. Her work has been selected by MoMA, Communication Arts, STA 100 Awards, Huffington Post, and The Verge. See <a href={resume}>resume</a>.</div>
        <div>● cloud@yuinchien.com</div>
        <div>● instagram.com/tinycloud</div>
        <div>● twitter.com/yuinchien</div>
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
            date(formatString: "DD MMMM, YYYY")
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

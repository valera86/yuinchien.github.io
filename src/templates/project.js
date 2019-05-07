import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post.frontmatter.cover, post.frontmatter.cover.childImageSharp.fluid);
  return (
    <Layout>
      <div id="hero" className="section parallax">
        <div style={{backgroundImage: `url(${post.frontmatter.cover.childImageSharp.fluid.src})`}} />
      </div>
      <div id="content" className="section">
        <h1 className="text">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div className="section parallax">
        <div id="more-projects">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="project" key={node.id}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
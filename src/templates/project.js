import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "./../components/layout"


export default ({ data }) => {
  const post = data.markdownRemark
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
            <div className={"project " + (node.fields.slug===post.fields.slug ? "line-thru": "") } key={node.id}>
              {node.frontmatter.redirect===""
                ? (<Link to={node.fields.slug}>{node.frontmatter.title}</Link>)
                : (<a href={node.frontmatter.redirect}>{node.frontmatter.title}</a>)
              }
            </div>
          ))}
          <Link to="/" style={{marginTop:`24px`,display:`block`}}>—— yuinchien.com</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
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
            redirect
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

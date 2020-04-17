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
              <div className="project" key={node.id}>
                <Link to={node.fields.slug}><img alt="hero" src={node.frontmatter.cover.childImageSharp.fluid.src} /></Link>
                <span>{node.frontmatter.title}</span>
                <span className="desc"> {node.frontmatter.description} </span>
              </div>
            ))}
          </div>
          <div id="personal-info" className="h1">
            <div id="bio">Yuin Chien is a San Francisco based designer and programmer focusing on graphic design, creative coding, risograph and plotter drawings. Her work has been selected by MoMA Talk to Me exhibition, Communication Arts, STA 100 Awards, and The Verge. See <a href={resume} target="_blank" rel="noopener noreferrer">resume</a>.</div>
            <div className="bullet"><a rel="noopener noreferrer" href="https://store.yuinchien.com" target="_blank">store.yuinchien.com</a></div>
            <div className="bullet"><a rel="noopener noreferrer" href="https://www.instagram.com/yuin.chien/" target="_blank">instagram.com/yuin.chien</a></div>
            <div className="bullet"><a rel="noopener noreferrer" href="https://twitter.com/yuinchien" target="_blank">twitter.com/yuinchien</a></div>
            <div className="bullet">cloud@yuinchien.com</div>
          </div>
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
            cover {
              childImageSharp {
                fluid(maxWidth: 2560) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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

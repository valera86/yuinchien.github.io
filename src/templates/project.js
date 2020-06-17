import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "./../components/layout"
import SEO from "../components/seo"
import Div100vh from 'react-div-100vh'

class Project extends React.Component  {

  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
    }
  }

  handleModalOpen = event => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const post = data.markdownRemark;
    const menuActive = this.state.showMenu ? 'open' : '';
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          image={post.frontmatter.cover.childImageSharp.fluid}
          pathname={this.props.location.pathname}
        />
        <div id="drawer" className={`${menuActive}`}>
          <Link id="button-home" className="fab" to="/"></Link>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className={`project ${node.fields.slug===post.fields.slug ? "selected": ""}`} key={node.id}>
              <Link to={node.fields.slug}><img alt="hero" src={node.frontmatter.cover.childImageSharp.fluid.src} /></Link>
              <span>{node.frontmatter.title}</span>
            </div>
          ))}
        </div>
        <Div100vh id="project-wrapper" className={`animate-up ${menuActive}`}>
          <div role="button" aria-label="button" tabIndex="0" id="button-menu" className={`fab ${menuActive}`} onClick={this.handleModalOpen} onKeyDown={this.handleModalOpen}></div>
          <div id="content">
            <h1 className="text">{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Div100vh>
      </Layout>
    )
  }
}
export default Project;

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        cover {
          childImageSharp {
            fluid(maxWidth: 1280) {
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
            cover {
              childImageSharp {
                fluid(maxWidth: 1280) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

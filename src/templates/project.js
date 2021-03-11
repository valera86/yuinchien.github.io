import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "./../components/layout"
import SEO from "../components/seo"
import Div100vh from 'react-div-100vh'
import { GatsbyImage, getSrc, getImage } from "gatsby-plugin-image"

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
    const imagePath = getSrc(post.frontmatter.cover.childImageSharp.gatsbyImageData);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          imageSrc={imagePath}
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          pathname={this.props.location.pathname}
        />
        <div id="drawer" className={`${menuActive}`}>
          <Link id="button-home" className="fab" to="/"></Link>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className={`project ${node.fields.slug===post.fields.slug ? "selected": ""}`} key={node.id}>
              <Link to={node.fields.slug}>
                <GatsbyImage image={getImage(node.frontmatter.cover.childImageSharp.gatsbyImageData)} alt="please include an alt" />
              </Link>
              <span>{node.frontmatter.title}</span>
            </div>
          ))}
        </div>
        <div id="project-wrapper" className={`animate-up ${menuActive}`}>
          <div role="button" aria-label="button" tabIndex="0" id="button-menu" className={`fab ${menuActive}`} onClick={this.handleModalOpen} onKeyDown={this.handleModalOpen}></div>
          <div id="content">
            <h1 className="text">{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </Layout>
    );
  }
}
export default Project;

export const query = graphql`query ($slug: String!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    fields {
      slug
    }
    frontmatter {
      title
      description
      cover {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        id
        frontmatter {
          title
          cover {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
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

import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import resume from "../files/resume.pdf"
import Layout from "./../components/layout"
import SEO from "../components/seo"

class Index extends React.Component  {

  constructor(props) {
    super(props);
    this.lastScroll = 0;
    this.state = {
      scrollUp: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const currentScroll = window.scrollY;
    if (currentScroll === 0) {
      this.setState({scrollUp: false});
      return;
    }
    if (currentScroll < this.lastScroll && this.state.scrollUp) {
      this.setState({scrollUp: false});
    } else if (currentScroll > this.lastScroll && currentScroll>0 && !this.state.scrollUp) {
      this.setState({scrollUp: true});
    }
    this.lastScroll = currentScroll;
  }

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title="Projects" />
        <div id="home-container">
          <div id="nav" className={ this.state.scrollUp ? "scroll-top" :"" }>
            <Link to="/" target="_blank" className="selected">Projects</Link>
            <Link to="/about" target="_blank">About</Link>
            <a rel="noopener noreferrer" href={resume} target="_blank">Resume</a>
            <a rel="noopener noreferrer" href="https://store.yuinchien.com" target="_blank">Store</a>
          </div>
          <div id="projects" className="animate-up">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div className="project" key={node.id}>
                <Link to={node.fields.slug}><img alt="hero" src={node.frontmatter.cover.childImageSharp.fluid.src} /></Link>
                <div className="info">
                  <span>{node.frontmatter.title}</span>
                  <span className="desc"> {node.frontmatter.description} </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Index;

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
                fluid(maxWidth: 1280) {
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

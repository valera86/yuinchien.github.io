import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

class ComponentIframe extends React.Component  {
  iframe() {
    return {
      __html: this.props.iframe
    }
  }
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={ this.iframe() } />
      </div>
    );
  }
}

const iframe = '<iframe src="https://yuinchien.com/projects/variable-font/404" width="100%" style="position:absolute;width:100%;top:0;z-index:-1;height: 100vh"></iframe>';

class NotFoundPage extends React.Component  {
  render() {
    return (
      <Layout>
        <SEO title="404: Not found" />
        <div id="home-container">
          <div id="nav">
            <Link to="/">yuinchien.com</Link>
          </div>
        </div>
        <ComponentIframe iframe={iframe} />
      </Layout>
    )
  }
}

export default NotFoundPage

import React from "react"
import Layout from "../components/layout"
import Iframe from "../components/iframe"
import Seo from "../components/seo"
import { Link } from "gatsby"

const url = '<iframe src="https://yuinchien.com/projects/albers/404.html" width="100%" style="position:absolute;width:100%;top:0;z-index:-1;height: 100vh"></iframe>';

class NotFoundPage extends React.Component  {
  render() {
    return (
      <Layout>
        <Seo title="404: Not found" />
        <div id="home-container">
          <div id="nav">
            <Link to="/">yuinchien.com</Link>
          </div>
        </div>
        <Iframe url={url} />
      </Layout>
    )
  }
}

export default NotFoundPage

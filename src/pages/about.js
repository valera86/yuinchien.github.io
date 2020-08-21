import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div id="home-container">
      <Header selected="about" />
      <div id="personal-info" className="animate-up">
        <div id="svg-about"></div>
        <p className="h4">Email <a rel="noopener noreferrer" href="mailto: cloud@yuinchien.com" target="_blank">cloud@yuinchien.com</a> for collaboration or say Hi! Please checkout the online <a rel="noopener noreferrer" href="https://store.yuinchien.com" target="_blank">store</a> for her printmaking projects, and keep in touch on <a rel="noopener noreferrer" href="https://www.instagram.com/yuin.chien/" target="_blank">Instagram</a> and <a rel="noopener noreferrer" href="https://twitter.com/yuinchien" target="_blank">Twitter</a> where she shares WIP and design process.</p>
      </div>
    </div>
  </Layout>
)
export default About

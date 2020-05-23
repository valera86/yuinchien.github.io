import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import resume from "../files/resume.pdf"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div id="home-container">
      <div id="nav">
        <Link to="/" target="_blank">Projects</Link>
        <Link to="/about" target="_blank" className="selected">About</Link>
        <a rel="noopener noreferrer" href={resume} target="_blank">Resume</a>
        <a rel="noopener noreferrer" href="https://store.yuinchien.com" target="_blank">Store</a>
      </div>
      <div id="personal-info" className="animate-up h1">
        <div id="svg-about"></div>
        <p>Email <a rel="noopener noreferrer" href="mailto: cloud@yuinchien.com" target="_blank">cloud@yuinchien.com</a> for collaboration or say Hi! Checkout the online <a rel="noopener noreferrer" href="https://store.yuinchien.com" target="_blank">store</a>, and keep in touch on <a rel="noopener noreferrer" href="https://www.instagram.com/yuin.chien/" target="_blank">Instagram</a> & <a rel="noopener noreferrer" href="https://twitter.com/yuinchien" target="_blank">Twitter</a> where she shares WIP and design process.</p>
      </div>
    </div>
  </Layout>
)
export default About

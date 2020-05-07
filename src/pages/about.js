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
        <p>Yuin Chien is a designer focusing on graphic design, creative coding, risograph and plotter drawings. Born and raised in Taiwan, she has lived in Taipei, Los Angeles, New York and currently based in San Francisco. She is an Art Center alumni, and ex-googler for Google Creative Lab and Material Design. Her work has been selected by the MoMA Talk to Me exhibition, Communication Arts, STA 100 Awards and The Verge.</p>
        <p>Email <a rel="noopener noreferrer" href="mailto: cloud@yuinchien.com" target="_blank">cloud@yuinchien.com</a> for collaboration or say Hi! Checkout the online <a rel="noopener noreferrer" href="https://store.yuinchien.com" target="_blank">store</a>, and keep in touch on <a rel="noopener noreferrer" href="https://www.instagram.com/yuin.chien/" target="_blank">Instagram</a> & <a rel="noopener noreferrer" href="https://twitter.com/yuinchien" target="_blank">Twitter</a> where she shares WIP and design process.</p>
      </div>
    </div>
  </Layout>
)
export default About

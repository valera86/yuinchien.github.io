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
      <div id="personal-info" className="animate-up">
        <div id="bio">Yuin Chien is a San Francisco based designer and programmer focusing on graphic design, creative coding, risograph and plotter drawings. She is an Art Center alumni, and ex-googler for Google Creative Lab and Material Design. Her work has been selected by the MoMA Talk to Me exhibition, Communication Arts, STA 100 Awards, The Verge and TechCrunch.</div>
        <div className="bullet"><a rel="noopener noreferrer" href="https://store.yuinchien.com" target="_blank">store.yuinchien.com</a></div>
        <div className="bullet"><a rel="noopener noreferrer" href="https://www.instagram.com/yuin.chien/" target="_blank">instagram.com/yuin.chien</a></div>
        <div className="bullet"><a rel="noopener noreferrer" href="https://twitter.com/yuinchien" target="_blank">twitter.com/yuinchien</a></div>
        <div className="bullet">cloud@yuinchien.com</div>
      </div>
    </div>
  </Layout>
)
export default About

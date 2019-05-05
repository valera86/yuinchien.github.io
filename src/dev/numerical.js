import React from "react"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  return (
    <>
      <Helmet>
        <title>Travel</title>
        <meta charSet="utf-8" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script src="/numerical/numerical.js"></script>
        <script src="/numerical/script.js"></script>
        <link rel="stylesheet" type="text/css" href="/numerical/numerical.css" />
        <link rel="stylesheet" type="text/css" href="/numerical/style.css" />
      </Helmet>
      <div id="countdown-light" className="countdown"></div>
      <div id="countdown-dark" className="countdown"></div>
      <div id="countup-dark" className="countdown"></div>
      <div id="countup-light" className="countdown"></div>
      <div id="time"></div>
      <div id="specimen"></div>
      <div id="year"></div>
      <div id="math"></div>
    </>
  )
}
import React from "react"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  return (
    <>
      <Helmet>
        <title>Travel</title>
        <meta charSet="utf-8" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script src="/alphabet/alpha.js"></script>
        <script src="/alphabet/script.js"></script>
        <link rel="stylesheet" type="text/css" href="/alphabet/alpha.css" />
      </Helmet>
      <div className="column-3 letters" id="alphabet" gap="8px"></div>
      <div className="column-5 letters border" id="colors" theme="light"></div>
      <div className="column-2 letters" id="expressions" gap="12px"></div>
      <div className="column-3 letters" id="weekday" theme="light" ></div>
      <div className="column-4 letters border" id="names" gap="8px"></div>
      <div id="specimen" className="letters" theme="light"></div>
    </>
  )
}
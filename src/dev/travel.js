import React from "react"
import { Helmet } from "react-helmet"

// export default ({ data }) => {
//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        
//         <noscript>{`
//           <link rel="stylesheet" type="text/css" href="./travel.css">
//         `}</noscript>
        
//         <title>Travel</title>
//       </Helmet>
//       <div>
//         <div id="canvas"></div>
//         <div id="timeline"></div>
//       </div>
//     </>
//   )
// }

export default ({ data }) => {
  return (
    <>
      <Helmet>
        <title>Travel</title>
        <meta charSet="utf-8" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script src="/travel/script.js"></script>
        <link rel="stylesheet" type="text/css" href="/travel/style.css" />
      </Helmet>
      <div id="canvas"></div>
      <div id="timeline"></div>
    </>
  )
}
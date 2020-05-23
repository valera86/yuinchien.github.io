import PropTypes from "prop-types"
import React from "react"

class Iframe extends React.Component  {
// const Header = ({ url }) => (
  iframe() {
    return {
      __html: this.props.url
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

// const Header = ({ url }) => (
//   <header
//     style={{
//       marginBottom: `0`,
//     }}
//   >
//         <Link
//           to="/"
//           style={{
//             textDecoration: `none`,
//           }}
//         >
//           {url}
//         </Link>
//
//
//   </header>
// )

Iframe.propTypes = {
  url: PropTypes.string,
}

Iframe.defaultProps = {
  url: ``,
}

export default Iframe

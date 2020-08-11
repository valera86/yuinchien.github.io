import PropTypes from "prop-types"
import React from "react"
import resume from "../files/resume.pdf"
import { Link } from "gatsby"

class Header extends React.Component  {

  constructor(props) {
    super(props);
    this.lastScroll = 0;
    this.state = {
      scrollUp: false,
      shadow: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 20) {
      this.setState({scrollUp: false, shadow: false});
      return;
    }
    if (currentScroll < this.lastScroll && this.state.scrollUp) {
      this.setState({scrollUp: false, shadow: true});
    } else if (currentScroll > this.lastScroll && currentScroll>0 && !this.state.scrollUp) {
      this.setState({scrollUp: true, shadow: false});
    }
    this.lastScroll = currentScroll;
  }

  render() {
    return (
      <div id="nav" className={`${this.state.scrollUp ? "scroll-top":""} ${this.state.shadow ? "shadow":""}`}>
        <Link to="/" target="_blank" className={this.props.selected==="projects"?"selected":""}>Projects</Link>
        <Link to="/about" target="_blank" className={this.props.selected==="about"?"selected":""}>About</Link>
        <a rel="noopener noreferrer" href={resume} target="_blank">Resume</a>
        <a rel="noopener noreferrer" href="https://store.yuinchien.com" target="_blank">Store</a>
      </div>
    );
  }
}

Header.propTypes = {
  selected: PropTypes.string,
}

Header.defaultProps = {
  selected: `projects`,
}

export default Header

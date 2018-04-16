
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import headerBG from "../../bgimg/slhwp.jpeg"



class Header extends Component {


  state = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${headerBG})`
  };


  render() {
    return(
      <div>
        <nav>
          <div className="nav-wrapper" style={this.state}>
            <a href="/" className="brand-logo center">Hyung Kim</a>
            <ul className="left hide-on-med-and-down">
              <li className="header-font">
                <Link to="/home">Home</Link>
              </li>
              <li>
                <a className="dropdown-button" 
                     data-beloworigin="true" 
                     href="#!" 
                     data-activates="dropdown1">
                     App
                     <i className="material-icons right">arrow_drop_down</i>
                </a>
                  <ul id="dropdown1" className="dropdown-content">
                    <li className={window.location.pathname === "/" ? "active" : ""} className="innerLi">
                      <Link to="/giphy"><h6>Gif Generator</h6></Link> 
                    </li>
                    <li className="divider"></li>
                    <li className="innerLi">
                      <Link to="/trivia"><h6>Trivia Game</h6></Link>
                    </li>
                    <li className="divider"></li>
                    <li className="innerLi">
                      <Link to="/hangman"><h6>Hangman</h6></Link>
                    </li>
                  </ul>
              </li>
              <li>
                <Link to="/more">More</Link>
              </li>
            </ul>
            {this.props.user ? <a className="brand-logo right">Hi {this.props.user}!</a> : ""}
          </div>
        </nav>
      </div>
    )
  }

}
export default Header;

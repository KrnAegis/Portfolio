import {Dropdown, Button, NavItem} from "react-materialize"
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import headerBG from "../../bgimg/slhwp.jpeg"
import logo from "./logo/logo.png"


class Header extends Component {

  render() {
    return(
      <div>
        <nav className="nav-extended">
          <div className="nav-wrapper grey darken-4">
          <div className="brand-logo center img-wrap">
            <img className="logoStyle" src={logo} />
          </div>
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
                    <li className="innerLi">
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
            <div className="nav-content grey darken-3">
              <div className="row">
                <form className="col l2" onSubmit={this.props.handleSubmit}>
                  <div className="input-field nickInput">
                    <input 
                        value={this.props.value}
                        onChange={this.props.handleChange}
                        id="nickname" 
                        type="text" 
                        class="validate"
                        data-length="10" 
                    />
                    <label for="nickname">Don't want to be {this.props.user}? Click here!</label>
                  </div>
                </form>
                <div className="col l4 offset-l6">
                  <span className="nav-title">Welcome to Hyung's portfolio</span>
                </div>
              </div>
            </div>
        </nav>
      </div>
    )
  }

}
export default Header;

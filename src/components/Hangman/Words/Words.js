
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Words.css";
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';


class Words extends Component {
  state = {
    showHint: false,
    showCate: false,
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  };

  handleHint = event => {
    this.setState({
      showHint: true
    })
  };

  handleCate = event => {
    this.setState({
      showCate: true
    })
  };

  render() {

    return(
      <StyleRoot>
        <div>
          <h2 style={this.state.fadeIn}>Hangman!</h2>
          <h2>Lives: {this.props.live}</h2>
            <div className="col s12 ">
              <h2>{this.props.word}</h2>
            </div>
              <div className="col s4 offset-s2">
                <h5>{this.state.showHint == false ? 
                      <button className = "btn subBtnColor"
                              type="submit"
                              name="action"
                              onClick={this.handleHint}
                              >Hint
                      </button> : 
                    this.props.hint}
                </h5>
              </div>
              <div className="col s4">
                <h5>{this.state.showCate == false ? 
                      <button className = "btn subBtnColor"
                              type="submit"
                              name="action"
                              onClick={this.handleCate}
                              >Category
                      </button> : 
                    this.props.category}
                </h5>
              </div>
        </div>
      </StyleRoot>
    )
  }

}
export default Words;

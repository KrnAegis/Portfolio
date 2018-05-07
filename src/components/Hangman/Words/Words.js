
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Words.css";
import { fadeIn, bounce } from 'react-animations'
import Radium, {StyleRoot} from 'radium';


class Words extends Component {
  state = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  };

  render() {

    return(
      <StyleRoot>
        <div>
          <div className="row">
            <div className="col l4 offset-l4">
              <h2 className="grey-text text-lighten-3"style={this.state.fadeIn}>Hangman!</h2>
            </div>
            <div className="col l4">
              <h2 className="grey-text text-lighten-3" style={this.state.bounce}>Lives: <span className="light-blue-text text-darken-1">{this.props.live}</span>
              </h2>
            </div>
          </div>
            <div className="col s12 ">
              <h2 className="light-blue-text text-darken-1">{this.props.word}</h2>
            </div>
        </div>
      </StyleRoot>
    )
  }

}
export default Words;

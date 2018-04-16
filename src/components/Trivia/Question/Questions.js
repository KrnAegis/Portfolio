
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Questions.css";

const questStyle = {
  color: '#098e09',
  textShadow:
   '-1px -1px 0 #54351E, 1px -1px 0 #54351E, -1px 1px 0 #54351E, 1px 1px 0 #54351E'
}

class Question extends Component {

  render() {
    return(
      <div>
      <h2 style={questStyle}>Question {this.props.count}</h2>
        <h3>{this.props.qna.question}</h3>
      </div>
    )
  }

}
export default Question;

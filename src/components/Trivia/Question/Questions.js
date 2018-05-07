
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Questions.css";

class Question extends Component {

  render() {
    return(
      <div>
      <h2 className="questStyle">Question {this.props.count}</h2>
        <h3>{this.props.qna.question}</h3>
      </div>
    )
  }

}
export default Question;

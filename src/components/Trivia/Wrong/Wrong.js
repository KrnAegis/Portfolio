
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wrong.css";

const loseStyle = {
  color: '#e53d3d',
  textShadow:
   '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
}

const answerStyle = {
  color: '#23960c',
  textShadow:
   '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
}

class Wrong extends Component {

  render() {
    return(
      <div>
        <h2 style={loseStyle}>Wrong!</h2>
        <h2 style={answerStyle}>The answer is {this.props.answer}</h2>
        <div>
           <button className="chbtn btn btnBig"
                  onClick={this.props.submit}
                  value="wrong"
                  >
                  NEXT
          </button>
        </div>
      </div>
    )
  }

}
export default Wrong;

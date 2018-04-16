
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Correct.css";

const corStyle = {
  color: '#EAC67A',
  textShadow:
   '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
}

const answerStyle = {
  color: '#23960c',
  textShadow:
   '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
}


class Correct extends Component {

  render() {
    return(
      <div>
        <h2 style={corStyle} >Correct!</h2>
        <h2 style={answerStyle} >The answer is {this.props.answer}</h2>
        <div>
           <button className="chbtn btn btnBig"
                  onClick={this.props.submit}
                  value="correct"
                  >
                  NEXT
          </button>
        </div>
      </div>
    )
  }

}
export default Correct;

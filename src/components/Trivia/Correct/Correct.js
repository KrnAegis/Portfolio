
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Correct.css";

class Correct extends Component {

  render() {
    return(
      <div>
        <h2 className="purple-text text-darken-4" >Correct!</h2>
        <h2 className="green-text text-darken-4">The answer is {this.props.answer}</h2>
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

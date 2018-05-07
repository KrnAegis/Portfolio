
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Wrong.css";

class Wrong extends Component {

  render() {
    return(
      <div>
        <h2 className="red-text text-accent-4">Wrong!</h2>
        <h2 className="green-text text-darken-4">The answer is {this.props.answer}</h2>
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

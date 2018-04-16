
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Choice.css";




class Choice extends Component {

  render() {
    return(
      <div>
        <div className="col s12">      
          <button className="chcbtn btn slGreen"
                  onClick={this.props.answered}
                  value={this.props.qna.c1}
                  >
                  1. {this.props.qna.c1}
          </button>
        </div>
        <div className="col s12">
          <button className="chcbtn btn lGreen" 
                  onClick={this.props.answered}
                  value={this.props.qna.c2}
                  >
                  2. {this.props.qna.c2}
          </button>
        </div>
        <div className="col s12">
          <button className="chcbtn btn mGreen"
                  onClick={this.props.answered}
                  value={this.props.qna.c3}
                  >
                  3. {this.props.qna.c3}
          </button>
        </div>
        <div className="col s12">
          <button className="chcbtn btn dGreen" 
                  onClick={this.props.answered}
                  value={this.props.qna.c4}
                  >
                  4. {this.props.qna.c4}
          </button>
        </div>
        <br>
        </br>
      </div>
    )
  }

}
export default Choice;

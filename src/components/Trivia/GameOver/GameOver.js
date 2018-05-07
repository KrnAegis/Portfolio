
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GameOver.css";

class GameOver extends Component {

  state = {
    color: {
        color: 'rgb(0,0,0)'},
    intervalColor:""
  };

  componentDidMount() {
    var intervalColor = setInterval(this.colorChange, 100);
       // store intervalColor in the state so it can be accessed later:
    this.setState({
      intervalColor:intervalColor
    })
  }

  componentWillUnmount() {
   // use intervalColor from the state to clear the interval
   clearInterval(this.state.intervalColor);
  };

//function for color change
  colorChange = event => {
    var r = Math.floor(Math.random() * (255));
    var g = 255;
    var b = Math.floor(Math.random() * (255));
    var rgb = 'rgb' + "(" + r.toString() + "," + g.toString() + "," + b.toString() + ")"
    console.log("this is r,g,b",r, g, b)
    console.log("this is rgb", rgb)
    this.setState({
      color:{
        color:rgb
      }
    });
  }

  render() {
    return(
      <div>
        <h2 className="red-text text-accent-3">Game Over!!</h2>
        <div className="row">
          <div className="col s6 offset-s3">
            <h2>Your Score is <div style={this.state.color}>{this.props.right}/10!</div></h2>
          </div>
        </div>
        <div>
           <button className="chbtn btn btnMed"
                  onClick={this.props.reset}
                  >
                  Play again?
          </button>
        </div>
      </div>
    )
  }

}
export default GameOver;

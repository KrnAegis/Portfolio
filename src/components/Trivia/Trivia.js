
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Trivia.css";
import {trivia} from "./qna.json"
import Question from "./Question/Questions.js"
import Choice from "./Choices/Choice.js"
import Correct from "./Correct/Correct.js"
import GameOver from "./GameOver/GameOver.js"
import Wrong from "./Wrong/Wrong.js"

class Trivia extends Component {

state = {
    ready: false,
    qna:[],
    count:0,
    answered:false,
    correct:"",
    userAnswer:"",
    right:0,
    color: {
        color: 'rgb(0,0,0)'},
    intervalColor:""
};

//for color change
componentDidMount() {
  var intervalColor = setInterval(this.colorChange, 200);
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
  var r = Math.floor(Math.random() * (255) + 200);
  var g = Math.floor(Math.random() * (255) - 100);
  var b = Math.floor(Math.random() * (255) - 100);
  var rgb = 'rgb' + "(" + r.toString() + "," + g.toString() + "," + b.toString() + ")"
  this.setState({
    color:{
      color:rgb
    }
  });
};

//handdles game start condition
handleReady = event => {
  var num = this.state.count
  event.preventDefault();
  this.setState({ready:true})
  this.setState({count:1})
  this.setState({qna:trivia[num]})
  this.setState({correct:trivia[num].answer})

};

//handles question answers and que of questions
handleSubmit = event => {
  console.log("clicking next")
  var num = this.state.count
  this.setState({
    count:this.state.count + 1
  })
  console.log("handling submit...") 
  console.log("the count is: ", this.state.count)
  this.setState({qna:trivia[num]})
  this.setState({answered:false})
    if (num < 10) {
      this.setState({correct:trivia[num].answer})
    }
    console.log("this is target value, ", event.target.value)
    if (event.target.value == "correct") {
      console.log("clicked correct")
      this.setState({
        right:this.state.right + 1
      })
    }
    console.log(this.state.right)
};

//handles user choice made
handleChoice = event => {
  this.setState({
    userAnswer:event.target.value
  })
  this.setState({
    answered:true
  })
};


//handles starting game over
handleReset = event => {
  this.setState({
    ready: false,
    qna:[],
    count:0,
    answered:false,
    correct:"",
    userAnswer:"",
    right:0
  })
};

  render() {
    if (!this.state.ready && !this.state.answered && this.state.count < 10) {
      return(
        <div className="triContainer">
          <div className="container">
            <h2 className="questStyle" > Do you know your Animals, {this.props.user}?</h2>
            <h2 style={this.state.color} > Lets play animal trivia!</h2>
              <div className="row">
                <button className="btn btnBig subBtnColor col s2 offset-s5"
                    type="submit" 
                    name="action" 
                    onClick={this.handleReady}>
                    Start
                </button>
              </div>
          </div>
        </div>
    )
    } else if (this.state.ready && !this.state.answered && this.state.count < 11) {
      return(
        <div className="triContainer">
          <div className="container">
            <Question qna={this.state.qna} count={this.state.count}/>
            <Choice qna={this.state.qna} answered={this.handleChoice} />
          </div>
        </div>
        )
    } else if (this.state.answered && this.state.correct == this.state.userAnswer && this.state.count < 11) {
      return(
        <div className="triContainer">
          <div className="container">
            <Correct answer={this.state.correct} submit={this.handleSubmit} />
          </div>
        </div>
        )
    } else if (this.state.answered && this.state.correct != this.state.userAnswer && this.state.count < 11){
      return(
        <div className="triContainer">
          <div className="container">
            <Wrong answer={this.state.correct} submit={this.handleSubmit} />
          </div>
        </div>
        )
    } else if (this.state.count >= 11) {
      return (
        <div className="triContainer">
          <div className="container">
            <GameOver right={this.state.right} reset={this.handleReset} />
          </div>
        </div>
        )
    }
  }
}
export default Trivia;

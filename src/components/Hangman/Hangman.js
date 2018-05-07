
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Hangman.css";
import {words} from "./words.json";
import Words from "./Words/Words.js"
import hangBG from "../../bgimg/csvwp.jpeg";
import { slideInDown } from 'react-animations';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {search} from "../../utils/API"; 


const winStyle = {
  color: '#23960c',
  float: 'left'
}

const loseStyle = {
  color: '#ea581e',
  float:'right'
}

class Hangman extends Component {
  state = {
    result: "",
    letters: [],
    ready: null,
    guessingLetter: "",
    guessedLetters: [],
    disWord:"",
    correctLetters:[],
    hint:"",
    category:"",
    lives:6,
    won:false,
    win:0,
    lose:0,
    showHint: false,
    showCate: false
  };

// set up game once ready
handleReady = event => {
  event.preventDefault();
  var rndNum = Math.floor(Math.random() * words.length)
  this.setState({
    hint: words[rndNum].hint,
    category: words[rndNum].category
  })
  var pickedWord = words[rndNum].word
  var splitWord = null;
  splitWord = pickedWord.toString().toLowerCase().split("");
  console.log("this is splitword", splitWord);
  this.setState({
    ready:true,
    letters:splitWord
  })
  this.rebuildWordView(splitWord)
};

// Handle events on key press
 handleInputChange = event => {
    const value = event.target.value.toLowerCase();
    const name = event.target.name;
    if (value.length == 1) {
      this.setState({
        [name]: value
      });
      console.log("this is letter guessed", this.state.guessingLetter)
    } else {
      console.log("ONE LETTER AT A TIME")
    }
    // committ to a letter and run functions
    if (event.key === "Enter" && this.state.guessingLetter != " " && this.state.guessingLetter != "") {
      this.updateGuesses(this.state.guessingLetter)
      this.rebuildWordView(this.state.letters)
      this.setState({
        [name]:""
      })
    }
    // erase letter input without handling changes
    if (event.keyCode === 8 || this.state.guessingLetter === " ") {
      console.log("backspaced")
      this.setState({
        [name]:""
      })
    }
  };
// Resets the game
  handleReset = event => {
if (event.target.name === "win") {
  this.state.win++
} else {
  this.state.lose++
};
    this.setState({
      result: "",
      letters: [],
      ready: null,
      guessingLetter: "",
      guessedLetters: [],
      disWord:"",
      correctLetters:[],
      hint:"",
      category:"",
      lives:6,
      won:false,
      showHint: false,
      showCate: false
    })
  };

// Handle guesses made
updateGuesses =  function(letter) {
  // If the letter is not in the guessedLetters array, and the letter is not in the letters array
  if ((this.state.guessedLetters.indexOf(letter) === -1) && (this.state.letters.indexOf(letter) === -1)) {
    console.log("trying to update guessed letters...")  
    // Push the letter to the guessedLetters array and take a life away
      this.state.guessedLetters.push(letter.toUpperCase())
      this.setState({
        lives: this.state.lives - 1
      })
  } else if (this.state.correctLetters.indexOf(letter) === -1) {
    console.log("updating correct letters")
    this.state.correctLetters.push(letter)

  } 

};

// Checking win or lose
handleGameState = event => {
  // Unifying win parameters so that it can be compared
  var corWord = this.state.letters.join().replace(/,/g, "").toString()
  var finWord = this.state.disWord.replace(/ /g, "").toLowerCase().toString()

  // Checking win conditions and replacing space and empty-space respectively
  if (corWord.replace(/ /g, "") === finWord.replace(/\u00a0/g, "")) {
    console.log("You win!")
    this.setState({
      won:true
    })
  }

  // Checking for lose condition
  if (this.state.lives === 0) {
    console.log("you lose")
  }
};

// handle letter view
 rebuildWordView =  function(letters) {

    var wordView = "";
    var correctLetters = this.state.correctLetters

    // go through array of the picked letters and render accordingly
    for (var i = 0; i < letters.length; i++) {
      if (correctLetters.indexOf(letters[i]) !== -1) {
        wordView += " " + letters[i] + " ";
        console.log("updating wordView")
      } else if (letters[i] === " ") {
        console.log("found space")
        //gets rid of any spaces between phrases or sentence
        wordView += "\u00a0";
      } else {    
        //display all non guessed letter as a under dash
        wordView += " _ ";
      }
    }
    // setting displaying letters state as viewed word
    this.setState({
        disWord: wordView.toUpperCase()
      }, function(){ this.handleGameState()
    })
  };
// For gifs in lose or win page
  searchGif = query => {
    var ranNum = Math.floor(Math.random() * (10));
    console.log("this is before result", this.state.result)
    if (this.state.result === "") {
      console.log("making gifs..")
    search(query)
      .then(res => this.setState({ result: res.data.data[ranNum].images.downsized.url }))
      .catch(err => console.log(err));
    } else {
      console.log("trying to stop..")
      return
    }
      
  };
//show or hide hint and category
  handleHint = event => {
    this.setState({
      showHint: true
    })
  };

  handleCate = event => {
    this.setState({
      showCate: true
    })
  };


  render() {
    if (this.state.ready == null) {
      return (
        <div className="hangContainer hangBg">
          <div className="container">
            <h2 className="grey-text text-lighten-3">Lets play Hangman {this.props.user}!</h2>
              <div className="row">
                <h3 className="col s4 offset-s4 grey-text text-lighten-3">
                  <div style={winStyle}>WIN</div> : <div style={loseStyle}>Lose</div>
                </h3>
              </div>
              <div>
              <div className="row">
                <h3 className="col s4 offset-s4 grey-text text-lighten-3">
                  <div style={winStyle}>{this.state.win}</div> : <div style={loseStyle}>{this.state.lose}</div>
                </h3>
              </div>
            </div>
            <br>
            </br>
              <div>
                <button className="btn btnMed subBtnColor" 
                  type="submit" 
                  name="action" 
                  onClick={this.handleReady}
                  >Play
                </button>         
              </div>
          </div>
        </div>
      );
    } else if (this.state.ready == true && this.state.won == false && this.state.lives != 0) {
      return (
        <div className="hangBg">
          <Words word={this.state.disWord} 
                 live={this.state.lives}
          />
          <div className="hangContainer">
            <div>
              <h4 className="red-text text-darken-4">Wrong Letters</h4>
                {this.state.guessedLetters.length == 0 ? <h4>None yet!</h4> :
                  <h4 className="amber-text">{this.state.guessedLetters.join(", ")}</h4>
                }
            </div>
              <div className="container">
                <div className="row">
                  <div className="input-field col s2 offset-s5 inputStyle">
                    <input
                          className="hangInput"
                          value={this.state.guessingLetter}
                          name="guessingLetter"
                          onKeyDown={this.handleInputChange}
                          type="text"
                          onChange={this.handleInputChange}
                          onKeyUp={this.handleGameState}
                        />
                  </div>
                </div>
                <div className="col l12">
                    <h5>{this.state.showHint == false ? 
                          <button className = "btn subBtnColor"
                                  type="submit"
                                  name="action"
                                  onClick={this.handleHint}
                                  >Hint
                          </button> : 
                        <div>
                          <h4>{this.state.hint}</h4>
                        </div>}
                    </h5>
                </div>
                <div className="col l12">
                    <h5>{this.state.showCate == false ? 
                          <button className = "btn subBtnColor"
                                  type="submit"
                                  name="action"
                                  onClick={this.handleCate}
                                  >Category
                          </button> : 
                        <div>
                          <h4>{this.state.category}</h4>
                        </div>}
                    </h5>
                </div>
              </div>
          </div>
        </div>
        )
    } else if (this.state.won == true) {
      this.searchGif("wins")
      return (
        <div className="hangContainer hangBg">
          <h2 className="light-blue-text text-darken-1">YOU WIN</h2>
            <div className="container">
              <div className="col s4 imgCenter">
                <img src={this.state.result} />
              </div>
              <br></br>
              <br></br>
              <button className="btn btnMed subBtnColor"
                  type="submit" 
                  name="win"
                  onClick={this.handleReset}
                  >Reset
              </button>
            </div>
        </div>
      )
    } else if (this.state.won == false && this.state.lives === 0) {
      this.searchGif("losing")
      return (
        <div className="hangContainer hangBg">
          <h2 className="red-text text-darken-4">YOU LOSE</h2>
            <div className="container">
              <div className="col s4 imgCenter">
                <img src={this.state.result} />
              </div>
              <br></br>
              <br></br>
              <button className="btn btnMed subBtnColor"
                  type="submit"
                  name="lose"
                  onClick={this.handleReset}
                  >Reset
              </button>
            </div>
        </div>
      )
    }
  }
}

export default Hangman;

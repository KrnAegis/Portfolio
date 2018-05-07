import React, { Component } from 'react';
import {Toast} from "react-materialize"
import './App.css';
import { Route, Link } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Nickname from './components/Nickname/Nickname.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Giphy from './components/Giphy/Giphy.js';
import Trivia from './components/Trivia/Trivia.js';
import Hangman from './components/Hangman/Hangman.js';
import More from './components/More/More.js';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import appBG from "./bgimg/csvwp.jpeg";

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    color: '#54351E'
  }
}

var AppStyle = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${appBG})`
};


class App extends Component {
constructor() {
    super()
    this.state = {
      user: "Guest",
      value:""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange = event => {
    console.log("value ", event.target.value)
    if (event.target.value.length < 11) {
     this.setState({
      value: event.target.value
    });
    } else {
      alert("Too long")
    }
  };

  handleSubmit = (event) => {
  event.preventDefault();
  console.log("handleSubmit ", event.target.value)
    if (event.target.value != undefined) {
    console.log('handleSubmit')
    this.setState({ 
      user: this.state.value 
    })
    this.setState({
      value:""
    })
    console.log("this is user" + this.state.user);
    } else {
      alert("User undefined!")
    }
  };

  render() {
    if (this.state.user) {
      return (
        <div className="App">
          <Header user={this.state.user} 
                  handleSubmit={this.handleSubmit} 
                  value={this.state.value} 
                  handleChange={this.handleChange}/>
          <Route exact path="/" render={() => <Home user={this.state.user}/>}/>
          <Route exact path="/home" render={() => <Home user={this.state.user}/>}/>
          <Route exact path="/giphy" component={() => <Giphy user={this.state.user}/>}/>
          <Route exact path="/trivia" component={() => <Trivia user={this.state.user}/>}/>
          <Route exact path="/hangman" component={() => <Hangman user={this.state.user}/>}/>
          <Route exact path="/more" component={() => <More user={this.state.user}/>}/>
          <Footer/>
        </div>
        )
    } else {
    return(
      <div className="App" style={AppStyle}>
         <Header/>
            <div className="container pre-home">
              <div className="row">
                <div className="col s12">
                  <h4 style={styles.fadeIn}>Hi, what's your name?</h4>
                  <form>
                    <div className="row">
                      <div className="input-field col s6 offset-s3">
                        <input 
                            ref={el => this.element = el}
                            id="nickname" 
                            type="text" 
                            class="validate" 
                        />
                        <label for="nickname">Name here!</label>
                      </div>
                      <button className="btn subBtnColor col s6 offset-s3" 
                              type="submit" 
                              name="action" 
                              onClick={this.handleSubmit}>
                              Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          <Footer/>
        </div>


    )
  }
}
  // render() {
  //   return (
  //     <div className="App">
  //       <Header user={this.state.user}/>
  //       <Route exact path="/" render={() => <Nickname user={this.state.user}/>}/>
  //       <Route exact path="/home" render={() => <Home user={this.state.user}/>}/>
  //     </div>
  //   );
  // }
}

export default App;

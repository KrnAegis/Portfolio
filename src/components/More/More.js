import React, { Component } from "react";
import {Carousel} from "react-materialize"
import { Link } from "react-router-dom";
import "./More.css";
import homeBG from "../../bgimg/csvwp.jpeg";
import nytGif from "./assets/nytscrapper.gif";
import nytStill from "./assets/nytscrapper.png"
import edBurgerGif from "./assets/eatdaburger.gif"
import edBurger from "./assets/eatdaburger.jpg"
import friendCoveGif from "./assets/friendcove.gif"
import friendCove from "./assets/friendcove.png"

//sets container background
const caroStyle = {
  height:'100vh !important',
  borderBottom: 'solid 10px'
}

//specific header style for each
const oneColor = {
  color: '#ff8f2d'
}

const twoColor = {
  color: '#ffc229'
}

const threeColor = {
  color:'#ff5f29'
};

const hrkStyle = {
  color:'#76559b',
  transition: 'opacity 0.5s, color 0.5s'
};

const gthbStyle = {
  color:'#24292E',
  transition: 'opacity 0.5s, color 0.5s'
};


class More extends Component {

state = {
  hover:false,
  name:""
};  

//handle still to gif image on hover
handleMouseEnter = event => { 
  console.log("name", event.target.name)
  this.setState({
    hover:true,
    name:event.target.name
  })
};
handleMouseLeave = event => {
  this.setState({
    hover:false
  })
};

//switch still to gif
handleImg = (gif, still, name) => {
  if (this.state.hover && this.state.name === name) {
    return gif
  } else {
    return still
  }
};

  render() {
    return(
      <div className="more" >
        <div className="moreHeader">
          <h2 style={oneColor}>Here are some other projects I made, {this.props.user}.</h2>
          <h3 style={twoColor}>Feel free to check them out! [Swipe away!]</h3>
          <h4 style={threeColor} >(Link will open new page)</h4>
        </div>
        <Carousel className="caro" style={caroStyle} options={{ fullWidth: true }}>
          <div className='grey darken-4'>
            <div class="card container cardStyle">
              <div className="card-image waves-effect waves-block waves-light col l6 s6">
                <img onMouseEnter={this.handleMouseEnter} 
                     src={this.handleImg(nytGif, nytStill, "one")}
                     onMouseLeave={this.handleMouseLeave}
                     name={"one"}
                     className="activator" />
              </div>
              <div className="card-reveal col l6 s6">
                <div className="card-content">
                  <span className="card-title grey-text text-darken-4">New York Times Scrapper<i class="material-icons right">close</i></span>
                  <h5 className="flow-text">Scrapes the top 20 articles. Save, add note, or delete articles you like!</h5>
                  <div className="chip">jQuery</div>
                  <div className="chip">JavaScript</div>
                  <div className="chip">MongoDB</div>
                  <div className="chip">CSS</div>
                  <div className="chip">Bootstrap</div>
                  <div className="chip">HTML</div>
                  <div className="chip">Handlebar</div>
                </div>
                <div className="card-action">
                   <a href="https://nytimes-scrapper.herokuapp.com/" 
                      target="_blank"
                      className="hrkStyle"
                      style={hrkStyle}>Heroku
                   </a>
                   <a href="https://github.com/KrnAegis/ScraperApp" 
                      target="_blank"
                      className="gthbStyle"
                      style={gthbStyle}>Github
                   </a>
                </div>
              </div>
            </div>
          </div>
          <div className='grey darken-4'>
            <div class="card container cardStyle">
              <div className="card-image waves-effect waves-block waves-light col l6 s6">
                <img onMouseEnter={this.handleMouseEnter} 
                     src={this.handleImg(edBurgerGif, edBurger, "two")}
                     onMouseLeave={this.handleMouseLeave}
                     name={"two"}
                     className="activator" />
              </div>
              <div className="card-reveal col l6 s6">
                <div className="card-content">
                  <span className="card-title grey-text text-darken-4">build-da-burger<i class="material-icons right">close</i></span>
                  <h5 className="flow-text">Build your burger! Devour the burger you made, and keep record of what you ate!</h5>
                  <div className="chip">jQuery</div>
                  <div className="chip">JavaScript</div>
                  <div className="chip">MySQL</div>
                  <div className="chip">CSS</div>
                  <div className="chip">Bootstrap</div>
                  <div className="chip">HTML</div>
                  <div className="chip">Handlebar</div>
                </div>
                <div className="card-action">
                  <a href="https://build-da-burger.herokuapp.com/" 
                    target="_blank"
                    className="hrkStyle"
                    style={hrkStyle}>Heroku
                  </a>
                  <a href="https://github.com/KrnAegis/WhatBurgerApp" 
                    target="_blank"
                    className="gthbStyle"
                    style={gthbStyle}>Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='grey darken-4'>
            <div class="card container cardStyle">
              <div className="card-image waves-effect waves-block waves-light col l6 s6">
                <img onMouseEnter={this.handleMouseEnter} 
                     src={this.handleImg(friendCoveGif, friendCove, "three")}
                     onMouseLeave={this.handleMouseLeave}
                     name={"three"}
                     className="activator" />
              </div>
              <div className="card-reveal col l6 s6">
                  <div className="card-content">
                  <span className="card-title grey-text text-darken-4">Friend Cove<i class="material-icons right">close</i></span>
                    <h5 className="flow-text">Take a survey, find a friend! Maybe you will be someones BFF!</h5>
                    <div className="chip">jQuery</div>
                    <div className="chip">JavaScript</div>
                    <div className="chip">CSS</div>
                    <div className="chip">Bootstrap</div>
                    <div className="chip">HTML</div>
                  </div>
                  <div className="card-action">
                     <a href="https://friend-cove.herokuapp.com/" 
                        target="_blank"
                        className="hrkStyle"
                        style={hrkStyle}>Heroku
                     </a>
                     <a href="https://github.com/KrnAegis/FriendFinderApp" 
                        target="_blank"
                        className="gthbStyle"
                        style={gthbStyle}>Github
                     </a>
                  </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    )
  }

}
export default More;

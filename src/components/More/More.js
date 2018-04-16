import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./More.css";
import homeBG from "../../bgimg/csvwp.jpeg";
import nytGif from "./assets/nytimescrapper.gif";
import nytStill from "./assets/nytimescrapperPic.jpg"
import edBurgerGif from "./assets/eatdaburger.gif"
import edBurger from "./assets/eatdaburger.jpg"
import friendCoveGif from "./assets/friendcove.gif"
import friendCove from "./assets/friendcove.png"

//sets container background
const containerStyle = {
  backgroundSize: '100vh 900px',
  backgroundRepeat: 'repeat',
  backgroundImage: `url(${homeBG})`,
  backgroundAttachment:'fixed'
};

//specific header style for each
const ojColor = {
  color: '#ff2600'
}

const gnColor = {
  color:'#0a7f00'
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
      <div className="more" style={containerStyle}>
          <h2>Here are some other projects I made, {this.props.user}.</h2>
          <h3>Feel free to check them out!</h3>
          <h4 style={gnColor} >(Link will open new page)</h4>
          <div className="row container">
            <div className="works col l12 s12 imgMore">
              <h3 className="header floLeft">NY Times Scrapper</h3>
              <div className="card horizontal row">
                  <div className="card-image col l6 s6">
                    <img onMouseEnter={this.handleMouseEnter} 
                         src={this.handleImg(nytGif, nytStill, "one")}
                         onMouseLeave={this.handleMouseLeave}
                         name={"one"} />
                  </div>
                  <div className="card-stacked col l6 s6">
                    <div className="card-content">
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
                       <a href="#" target="_blank">Heroku</a><a href="#" target="_blank">Github</a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="works col l12 s12">
              <h3 className="header floLeft">Build-da-Burger</h3>
              <div className="card horizontal row">
                  <div className="card-image col l6 s6">
                    <img onMouseEnter={this.handleMouseEnter} 
                         src={this.handleImg(edBurgerGif, edBurger, "two")}
                         onMouseLeave={this.handleMouseLeave} 
                         name={"two"} />
                  </div>
                  <div className="card-stacked col l6 s6">
                    <div className="card-content">
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
                       <a href="#" target="_blank">Heroku</a><a href="#" target="_blank">Github</a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="works col l12 s12">
              <h3 className="header floLeft">Friend Cove</h3>
              <div className="card horizontal row">
                  <div className="card-image col l6 s6">
                    <img onMouseEnter={this.handleMouseEnter} 
                         src={this.handleImg(friendCoveGif, friendCove, "three")}
                         onMouseLeave={this.handleMouseLeave} 
                         name = "three"/>
                  </div>
                  <div className="card-stacked col l6 s6">
                    <div className="card-content">
                      <h5 className="flow-text">Take a survey, find a friend! Maybe you will be someones BFF!</h5>
                      <div className="chip">jQuery</div>
                      <div className="chip">JavaScript</div>
                      <div className="chip">CSS</div>
                      <div className="chip">Bootstrap</div>
                      <div className="chip">HTML</div>
                    </div>
                    <div className="card-action">
                       <a href="#" target="_blank">Heroku</a><a href="#" target="_blank">Github</a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="works col l6 s12">
              <img onMouseEnter={this.handleMouseEnter} 
                   src={this.handleImg(nytGif, nytStill, "four")}
                   onMouseLeave={this.handleMouseLeave}
                   name = "four" />
            </div>
          </div>

      </div>
    )
  }

}
export default More;

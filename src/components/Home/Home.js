import {Parallax, CardPanel} from "react-materialize"
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeBG from "../../bgimg/wolf.jpg";
import homePara from "../../bgimg/home.jpg";
import lowerPara from "../../bgimg/lower_home.jpg";
import notebook from "../../bgimg/notebook.jpg";
import jsLogo from "../../logos/javascript.jpg"
import bsLogo from "../../logos/bootstrap.jpg"
import cssLogo from "../../logos/css3.png"
import htmlLogo from "../../logos/html5.gif"
import jqLogo from "../../logos/jquery.jpg"
import mtlLogo from "../../logos/materializelogo.png"
import mgdbLogo from "../../logos/mongodb.jpg"
import msqlLogo from "../../logos/mysql.jpg"
import ndLogo from "../../logos/node.png"
import npmLogo from "../../logos/npm.jpg"
import rctLogo from "../../logos/react.png"


const blColor = {
  color: '#4eb5ff'
}

const puColor = {
  color:'#ffe44e'
}

const olColor = {
  color:'#ff4e80'
}

class Home extends Component {

  state = {
    color: {
        color: 'rgb(0,0,0)'},
    intervalColor:"",
    transition: 'color 0.2s'
  };

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
  }

  render() {
    return(
      <div className="home">
        <div>
          <Parallax imageSrc={homePara} />
          <div className="section homeBody">
            <div className="row">
              <h3>Welcome to my portfolio.</h3>
              <h4 style={blColor} >It is powered by <span style={this.state.color}>react</span>, and stylized through bootstrap and CSS manipulation.</h4>
              <h4 style={puColor} >Check out some simple apps in the dropdown menu above!</h4>
              <h4 style={olColor} >Click More above for other projects I've done!</h4>
            </div>
            <div className="row container">
              <h3>Skill Collection</h3>
              <div className="overlay">
                <CardPanel className="cpStyle grey darken-4 black-text col l2 m3 s4">
                    <img className="logoImg" src={jsLogo} />
                    <div className="slideUp">
                      <div className="text">JavaScript</div>
                    </div>
                </CardPanel>
              </div>
              <div className="overlay">
                <CardPanel className="cpStyle grey darken-4 black-text col l2 m3 s4">
                    <img className="logoImg" src={htmlLogo} />
                    <div className="slideUp">
                        <div className="text">HTML5</div>
                      </div>
                </CardPanel>
              </div>
              <div className="overlay">
                <CardPanel className="cpStyle grey darken-4 black-text col l2 m3 s4">
                    <img className="logoImg" src={cssLogo} />
                    <div className="slideUp">
                        <div className="text">CSS3</div>
                      </div>
                </CardPanel>
              </div>
              <div className="overlay">
                <CardPanel className="cpStyle grey darken-4 black-text col l2 m3 s4">
                    <img className="logoImg" src={jqLogo} />
                    <div className="slideUp">
                        <div className="text">jQuery</div>
                      </div>
                </CardPanel>
              </div>
              <div className="overlay">
                <CardPanel className="cpStyle grey darken-4 black-text col l2 m3 s4">
                    <img className="logoImg" src={mtlLogo} />
                    <div className="slideUp">
                        <div className="text">Meterialize</div>
                      </div>
                </CardPanel>
              </div>
              <div className="overlay">
                <CardPanel className="cpStyle grey darken-4 black-text col l2 m3 s4">
                    <img className="logoImg" src={bsLogo} />
                    <div className="slideUp">
                        <div className="text">Bootstrap</div>
                      </div>
                </CardPanel>
              </div>
              <div className="overlay">
                <CardPanel className="cpStyle grey darken-4 black-text col l2 m3 s4">
                    <img className="logoImg" src={rctLogo} />
                    <div className="slideUp">
                        <div className="text">React.js</div>
                      </div>
                </CardPanel>
              </div>
              <div className="overlay">
                <CardPanel className="cpStyle grey darken-4 black-text col l2 m3 s4">
                    <img className="logoImg" src={npmLogo} />
                    <div className="slideUp">
                        <div className="text">NPM</div>
                      </div>
                </CardPanel>
              </div>
              <div className="overlay">
                <CardPanel className="cpStyle grey darken-4 black-text col l2 m3 s4">
                    <img className="logoImg" src={ndLogo} />
                    <div className="slideUp">
                        <div className="text">Node.js</div>
                      </div>
                </CardPanel>
              </div>
              <div className="overlay">
                <CardPanel className="cpStyle grey darken-4 black-text col l2 m3 s4">
                    <img className="logoImg" src={msqlLogo} />
                    <div className="slideUp">
                        <div className="text">MySQL</div>
                      </div>
                </CardPanel>
              </div>
              <div className="overlay">
                <CardPanel className="cpStyle grey darken-4 black-text col l2 m3 s4">
                    <img className="logoImg" src={mgdbLogo} />
                    <div className="slideUp">
                        <div className="text">MongoDB</div>
                      </div>
                </CardPanel>
              </div>
              <div className="col l12">
                <h5 className="gitLink">
                  <a href="https://github.com/KrnAegis/Portfolio" 
                       target="_blank"
                       className="homeLink">
                       Code for this portfolio
                  </a>
                </h5>
              </div>         
            </div>
          </div>
          <Parallax imageSrc={lowerPara} />
        </div>
      </div>
    )
  }

}
export default Home;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeBG from "../../bgimg/csvwp.jpeg";


const containerStyle = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${homeBG})`
};

const ojColor = {
  color: '#ff2600'
}

const gnColor = {
  color:'#0a7f00'
}

class Home extends Component {

  render() {
    return(
      <div className="home" style={containerStyle}>
          <h2> Welcome {this.props.user}!</h2>
          <h3>This is portfolio created by Hyung Kim.</h3>
          <h4 style={ojColor} >It is powered by react, and stylized through bootstrap and CSS manipulation.</h4>
          <h4 style={gnColor} >Check out my other works from the dropdown menu above!</h4>
      </div>
    )
  }

}
export default Home;

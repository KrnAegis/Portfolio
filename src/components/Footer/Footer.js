// import { responseGoogle } from "./Google.js"
import React, { Component } from "react";
import "./Footer.css";
import headerBG from "../../bgimg/slhwp.jpeg"



class Footer extends Component {  

  state = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${headerBG})`
  };

  render() {
    return(
      <div className="footer" >
        <footer className="page-footer" style={this.state}>
          
            <div className="footer-container" >
              <h6>© 2017 Copyright Hyung Kim</h6>
            </div>
   
        </footer>
      </div>
    )
  }

}
export default Footer;

// import { responseGoogle } from "./Google.js"
import React, { Component } from "react";
import "./Footer.css";
import ghIcon from "./icons/githubicon.svg"
import headerBG from "../../bgimg/slhwp.jpeg"



class Footer extends Component {  

  render() {
    return(
        <footer className="page-footer grey darken-3 z-depth-5">
          <div className="container ">
            <div className="row">
              <div className="col l4 s12 footerContact">

                <h5 className="blue-grey-text text-lighten-2">About me</h5>
                <p className="grey-text text-lighten-3">Junior Fullstack developer</p>
                <p className="grey-text text-lighten-3">Certified from Rutgers Coding bootcamp</p>
                <p className="grey-text text-lighten-3">Love to code and solve problems.</p>
              </div>
              <div className="col l4 s12 footerContact">
                <h5 className="blue-grey-text text-lighten-2">Contact</h5>
                <p className="grey-text text-lighten-3">E-mail: Hyungkim.eco@gmail.com</p>
                <p className="grey-text text-lighten-3">Phone: 201-575-5338</p>
                <p className="grey-text text-lighten-3">Location: Ridgefield, NJ, 07657 </p>
              </div>
              <div className="col l4 s12">
                <h5 className="blue-grey-text text-lighten-2">Social</h5>
                  <div className="row">
                    <div className="col l4 offset-l4">
                      <div className=" icOverlay">
                        <a className="grey-text text-lighten-3" 
                           href="https://github.com/KrnAegis"
                           target="_blank">
                          <i className="fab fa-github-square icImg"></i>
                        </a>
                        <div className="icSlideUp">
                          <div className="text">Github</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col l4 offset-l4">
                      <div className="col l12 icOverlay">
                        <a className="grey-text text-lighten-3" 
                           href="https://www.linkedin.com/in/hyung-kim-b59b3132" 
                           target="_blank">
                          <i className="fab fa-linkedin icImg"></i>
                        </a>
                        <div className="icSlideUp">
                          <div className="text">Linkedin</div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright grey darken-4">
            <div className="container">
            © 2018 Copyright by Hyung Kim
            </div>
          </div>
        </footer>
    )
  }

}
export default Footer;

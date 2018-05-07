
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Giphy.css";
import {search} from "../../utils/API";
import gifyBG from "../../bgimg/ctvwp.jpeg";

var ranNum = ""

const oneColor = {
  color: '#ff8f2d'
}

const twoColor = {
  color: '#2d49ff'
}

const threeColor = {
  color:'#ff5f29'
};

class Giphy extends Component {
  state = {
    result: {},
    search: "",
    value:"",
    ready: null,
    history:[],
    color: {
        color: 'rgb(0,0,0)'},
    intervalColor:"",
    transition: 'color 0.2s'
  };



  // Loading gif as default and color change
  componentDidMount() {
    this.searchGif("Loading");
    console.log("this is response", this.state.result);
    var intervalColor = setInterval(this.colorChange, 200);
       // store intervalColor in the state so it can be accessed later:
    this.setState({
      intervalColor:intervalColor
    });
  };

  componentWillUnmount() {
   // use intervalColor from the state to clear the interval
   clearInterval(this.state.intervalColor);
  };
//running search through gify API and obtain result
  searchGif = query => {
    search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

//handle search value and sets search state for query
  handleInputChange = event => {
    this.setState({
      value: event.target.value
    });
      this.setState({
        search:this.state.value.trim()
      })

  };

//handles running searchGif function and reset searches
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search != "") {
      this.setState({ready:true})
      this.searchGif(this.state.search);
      this.state.history.push(this.state.search)
      ranNum = Math.floor(Math.random() * (this.state.result.data.length - 6));
      this.setState({
        value:""
      })
    } else {
      console.log("empty")
      this.setState({
        value:""
      })
    }
  };

//function for color change
  colorChange = event => {
    var r = Math.floor(Math.random() * (255) - 100);
    var g = Math.floor(Math.random() * (255) - 20);
    var b = Math.floor(Math.random() * (255) + 200);
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
    return (
      <div className="more">
        <div className="gifHeading">
          <h2 style={oneColor}>Welcome to <span style={this.state.color}>Giphy</span> generator! {this.props.user}</h2>
          <h4 style={twoColor}>Your search history</h4>
          <div>            
              {this.state.history.length > 0 ? 
                <h5 style={threeColor}>{this.state.history.join(", ")}</h5> 
                : <h5 style={threeColor}>nothing here!</h5>}            
          </div>
        </div>
        <div className="gify">
          <div className="container">
            <div className="gifWrap">
              <div className="row">
                <nav className="gifNav grey darken-3 col l11">
                  <div className="nav-wrapper">
                    <form onSubmit={this.handleFormSubmit}>
                      <div className="input-field">
                        <input type="search"
                               name="search"  
                               id="search"
                               value={this.state.value}
                               onChange={this.handleInputChange}
                               onKeyUp={this.handleInputChange} />
                      </div>
                    </form>
                  </div>
                </nav>
                <div className="col l1 gifIconStyle">
                  <i className="material-icons medium icon-white">search</i>
                </div>
              </div>
              <br></br>
                <div>
                    {this.state.ready && this.state.result.data[ranNum] != undefined
                      ? <div id="disGif">
                          <div className="row">
                            <div className="col s4 imgCenter">
                              <img className="gifImg" src={this.state.result.data[ranNum].images.downsized.url}/>
                            </div>
                            <div className="col s4 imgCenter">
                              {this.state.result.data[ranNum+1] != undefined ?
                              <img className="gifImg" src={this.state.result.data[ranNum+1].images.downsized.url}/> 
                              :
                              <img className="gifImg" src={this.state.result.data[ranNum].images.downsized.url}/>}
                            </div>
                            <div className="col s4 imgCenter">
                              {this.state.result.data[ranNum+1] != undefined ?
                              <img className="gifImg" src={this.state.result.data[ranNum+2].images.downsized.url}/> 
                              :
                              <img className="gifImg" src={this.state.result.data[ranNum].images.downsized.url}/>}>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col s4 imgCenter">
                              {this.state.result.data[ranNum+1] != undefined ?
                              <img className="gifImg" src={this.state.result.data[ranNum+3].images.downsized.url}/> 
                              :
                              <img className="gifImg" src={this.state.result.data[ranNum].images.downsized.url}/>}                            </div>
                            <div className="col s4 imgCenter">
                              {this.state.result.data[ranNum+1] != undefined ?
                              <img className="gifImg" src={this.state.result.data[ranNum+4].images.downsized.url}/> 
                              :
                              <img className="gifImg" src={this.state.result.data[ranNum].images.downsized.url}/>}
                            </div>
                            <div className="col s4 imgCenter">
                              {this.state.result.data[ranNum+1] != undefined ?
                              <img className="gifImg" src={this.state.result.data[ranNum+5].images.downsized.url}/> 
                              :
                              <img className="gifImg" src={this.state.result.data[ranNum].images.downsized.url}/>}
                            </div>
                          </div>
                        </div>
                      : <h3 style={twoColor}>No Results to Display.</h3>}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Giphy;


import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Giphy.css";
import {search} from "../../utils/API";
import gifyBG from "../../bgimg/ctvwp.jpeg";

var ranNum = ""

const containerStyle = {
  backgroundSize: '100% 100%',
  backgroundRepeat: 'repeat',
  backgroundImage: `url(${gifyBG})`
};


class Giphy extends Component {
  state = {
    result: {},
    search: "",
    ready: null,
    history:[]
  };



  // Loading gif as default
  componentDidMount() {
    this.searchGif("Loading");
    console.log("this is response", this.state.result)
  };


  searchGif = query => {
    search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });

    if (event.key === "Enter") {
      this.handleFormSubmit(event);
      this.setState({
        search:""
      })
    }
  };

  handleFormSubmit = event => {
    if (this.state.search != "") {
      event.preventDefault();
      this.setState({ready:true})
      this.searchGif(this.state.search);
      this.state.history.push(this.state.search)
      ranNum = Math.floor(Math.random() * (this.state.result.data.length - 5));
      console.log("This is history of searches: ", this.state.history)
      console.log("searched", this.state.search)
      console.log("this is API", search)
      console.log("this is result", this.state.result)
    } else {
      console.log("empty")
    }
  };

  render() {
    return (
      <div className="gify" style={containerStyle}>
        <div className="container">
          <h2 className="textbg">Welcome to Giphy generator! {this.props.user}</h2>
          <br></br>
          <br></br>

            <div class="col s6 offset-s3">
              <h4 className="searchbg">Search here!:
              <div className="input-field inline">
                <input type="text"
                       name="search"
                       value={this.state.search}
                       onChange={this.handleInputChange}
                       onKeyUp={this.handleInputChange} />
              </div>
              </h4>
          </div>
          <h4>Your search history</h4>
          <div>            
              {this.state.history.length > 0 ? 
                <h5 className="historybg">{this.state.history.join(", ")}</h5> 
                : <h5 className="textbg">nothing here!</h5>}            
          </div>
          <br></br>
            <div>
                {this.state.ready && this.state.result.data[ranNum] != undefined
                  ? <div id="disGif">
                      <div className="row">
                        <div className="col s4 imgCenter">
                          <img src={this.state.result.data[ranNum].images.downsized.url}/>
                        </div>
                        <div className="col s4 imgCenter">
                          <img src={this.state.result.data[ranNum+1].images.downsized.url}/>
                        </div>
                        <div className="col s4 imgCenter">
                          <img src={this.state.result.data[ranNum+2].images.downsized.url}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s4 imgCenter">
                          <img src={this.state.result.data[ranNum+3].images.downsized.url}/>
                        </div>
                        <div className="col s4 imgCenter">
                          <img src={this.state.result.data[ranNum+4].images.downsized.url}/>
                        </div>
                        <div className="col s4 imgCenter">
                          <img src={this.state.result.data[ranNum+5].images.downsized.url}/>
                        </div>
                      </div>
                    </div>
                  : <h3>No Results to Display.</h3>}
            </div>
        </div>
      </div>
    );
  }
}

export default Giphy;

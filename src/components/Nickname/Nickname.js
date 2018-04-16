
import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import "./Nickname.css";



class Nickname extends Component {

  constructor() {
    super()
    this.state = {
      user: '',
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  };


  handleSubmit = event => {
    event.preventDefault()
    console.log('handleSubmit')
    this.setState({
      user: this.state.user,
      redirectTo: "/home"
    })
    console.log("this is user" + this.state.user)
  };

   handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
    return(
        <div className="container">
          <div className="row">
            <div className="col s12">

              Hi, what's your name?
              <form>
                <div className="row">
                  <div className="input-field">
                      <input
                        value={this.state.user}
                        name="user"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Nickname"
                      />
                    <label>Name</label>
                  </div>
                  <button className="btn waves-effect waves-light #ab47bc purple lighten-1" 
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
    )
  }
}

}
export default Nickname;

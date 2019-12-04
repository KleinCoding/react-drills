import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor(){
    super();
    this.state={
      userpass:"",
      userlogin:"",
    }
  }

  alertMe(){
    const { userlogin } = this.state;
  console.log( userlogin )
    alert(`Username: ${this.state.userlogin} Password: ${this.state.userpass}`);
  }

  handleloginchange(value){
      this.setState({userlogin: value},
      console.log(this.state.userlogin))
    }

    handlepasschange(value){
        this.setState({userpass: value},
        console.log(this.state.userpass))
      }
  
    
  render() {
    
    return (
      <div className="App">
        <input className="userlogin" onChange={e => this.handleloginchange(e.target.value)}></input>
        <input className="userpass" onChange={e => this.handlepasschange(e.target.value)}></input>
        <button className="loginbutton" onClick={() => this.alertMe()}>Login</button>

      </div>

    );
  }
}

export default App;


// {e => {this.updatePicture(e.target.value);}

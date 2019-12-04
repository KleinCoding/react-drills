import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      filterString:"",
      mylist:["I","Want","Ice Cream", "Rightthehellnow", "also", "burritos"]
    }
  }

handleChange(filter){
  this.setState({filterString:filter})
}

  render() {
    let listToDisplay = this.state.mylist.filter((e, i) => {
      return e.includes(this.state.filterString)
    })
    .map((e, i) => {
      return <h2 key = {i}>{e}</h2>
    })
    return (
      <div className="App">
        {listToDisplay}
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
      </div>
    );
<div>

</div>
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://i.ytimg.com/vi/ds4J42JsD7E/maxresdefault.jpg"} />
      </div>
    );
  }
}

export default App;
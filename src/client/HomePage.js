import React, { Component } from "react";
import Posts from "./components/Posts";

class HomePage extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "10rem" }}>
        <h1>App is there</h1>
        <Posts name = "Aditya"/>
      </div>
    );
  }
}

export default HomePage;

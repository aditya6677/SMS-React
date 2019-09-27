import React, { Component } from "react";

class Posts extends Component {
  render() {
    return (
        <div style={{ textAlign: "center",marginTop:'10rem' }}>
          <h1>Posts is there {this.props.name}</h1>
        </div>
    );
  }
}

export default Posts;

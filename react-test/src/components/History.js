import React, { Component } from "react";
// import axios from "axios";
// import HistoryItem from "./HistoryItem";
// import { Redirect } from "react-router";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankData: ""
    };
  }

  render() {

    // this.setState({'bankData':JSON.parse(localStorage.getItem("bankDetails")});
    
    
    return (
      <div>
        <h1> History </h1>
        <ul className="collection"> </ul>
      </div>
    );
  }
}

export default History;

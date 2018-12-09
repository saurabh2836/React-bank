import React, { Component } from "react";
// import { Link } from "react-router-dom";

class HistoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }
  render() {
    return (
      <li className="collection-item">
        {this.state.item.topic}
      </li>
    );
  }
}

export default HistoryItem;

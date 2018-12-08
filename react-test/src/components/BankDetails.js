import React, { Component } from "react";
// import { Link } from "react-router-dom";

class BankDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }
  render() {
    return (
      <div>
        <h1>IFSC CODE Details: {this.props.location.state.ifsc}</h1>
        <ul className="collection">
          <li className="collection-item">
            <h4>Bank Id :</h4>{" "}
            <span className="collection-item">{this.props.location.state.id}</span>
          </li>
          <li className="collection-item">
            <h4>Bank Address :</h4>{" "}
            <span className="collection-item">
              {this.props.location.state.address}
            </span>
          </li>
          <li className="collection-item">
            <h4>Bank:</h4>
            <span className="collection-item">
              {this.props.location.state.bank}
            </span>
          </li>
          <li className="collection-item">
            <h4>Bank Branch:</h4>
            <span className="collection-item">
              {this.props.location.state.branch}
            </span>
          </li>
          <li className="collection-item">
            <h4>Bank Branch City:</h4>
            <span className="collection-item">
              {this.props.location.state.city}
            </span>
          </li>
          <li className="collection-item">
            <h4>Bank Branch Number:</h4>
            <span className="collection-item">
              {this.props.location.state.contact}
            </span>
          </li>
          <li className="collection-item">
            <h4>Bank Branch District:</h4>
            <span className="collection-item">
              {this.props.location.state.district}
            </span>
          </li>
          <li className="collection-item">
            <h4>Bank Branch Micrcode:</h4>
            <span className="collection-item">
              {this.props.location.state.micrcode}
            </span>
          </li>
          <li className="collection-item">
            <h4>Bank Branch State:</h4>
            <span className="collection-item">
              {this.props.location.state.state}
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default BankDetails;

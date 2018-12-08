import React, { Component } from "react";
import axios from "axios";
// import BankDetails from "./BankDetails";
import { Redirect } from "react-router";

class Ifscode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifscode: "",
      bankDetails: ""
    };
  }

  bank(bankObj) {
    axios
      .request({
        method: "get",
        url: `https://api.techm.co.in/api/v1/ifsc/${this.state.ifscode}`,
        data: bankObj
      })
      .then(response => {
        this.setState({
          redirect: true,
          bankDetailsId: response.data.data._id,
          bankDetailsAddress: response.data.data.ADDRESS,
          bankDetailsBank: response.data.data.BANK,
          bankDetailsBranch: response.data.data.BRANCH,
          bankDetailsCity: response.data.data.CITY,
          bankDetailsContact: response.data.data.CONTACT,
          bankDetailsDistrict: response.data.data.DISTRICT,
          bankDetailsIfsc: response.data.data.IFSC,
          bankDetailsMicrcode: response.data.data.MICRCODE,
          bankDetailsState: response.data.data.STATE
        });

        console.log(response.data.data);
      })
      .catch(err => console.log(err));
  }
  onChangeCode = e => {
    this.setState({
      ifscode: e.target.value
    });
  };
  onSubmit(e) {
    e.preventDefault();
    const bankObj = {
      ifscode: this.refs.ifscode.value
    };
    if (/^[A-Za-z]{4}\d{7}$/.test(this.refs.ifscode.value)) {
      this.bank(bankObj);
    } else {
      alert("Invalid IFSC Code format must be first 4 character and 7 digits");
    }
  }
  render() {
    const {
      redirect,
      bankDetailsId,
      bankDetailsAddress,
      bankDetailsBank,
      bankDetailsBranch,
      bankDetailsCity,
      bankDetailsContact,
      bankDetailsDistrict,
      bankDetailsIfsc,
      bankDetailsMicrcode,
      bankDetailsState
    } = this.state;

    if (redirect)
      return (
        <Redirect
          to={{
            pathname: `/bankDetails/${bankDetailsIfsc}`,
            state: {
              id: bankDetailsId,
              address: bankDetailsAddress,
              bank: bankDetailsBank,
              branch: bankDetailsBranch,
              city: bankDetailsCity,
              contact: bankDetailsContact,
              district: bankDetailsDistrict,
              ifsc: bankDetailsIfsc,
              micrcode: bankDetailsMicrcode,
              state: bankDetailsState
            }
          }}
        />
      );
    return (
      <div>
        <h1> Search IFSC Bank Code </h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              type="text"
              name="ifscode"
              ref="ifscode"
              value={this.state.ifscode}
              onChange={this.onChangeCode}
            />
            <label htmlFor="name"> IFSC CODE </label>
          </div>
          <input type="submit" value="Search" className="btn" />
        </form>
      </div>
    );
  }
}

export default Ifscode;

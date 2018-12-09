import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Redirect } from "react-router";

class Ifscode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifscode: "",
      bankname: "",
      branchname: "",
      bankDetails: "",
      searchIfscode: [],
      searchHistory: ""
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

        var obj = JSON.parse(localStorage.getItem("bankDetails")) || {};
        obj[response.data.data._id] = JSON.stringify(response.data.data);
        localStorage.setItem("bankDetails", JSON.stringify(obj));
        this.setState({
          searchHistory: JSON.stringify(obj)
        });
        var joined = this.state.searchIfscode.concat(
          this.props.history.location.state.ifscode
        );
        this.setState({ searchIfscode: joined });
      })
      .catch(err => console.log(err));
  }
  bankData(bankObj) {
    axios
      .request({
        method: "get",
        url: `https://api.techm.co.in/api/getbank/${this.state.bankname}/${
          this.state.branchname
        }`,
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

        var obj = JSON.parse(localStorage.getItem("bankDetails")) || {};
        obj[response.data.data._id] = JSON.stringify(response.data.data);
        localStorage.setItem("bankDetails", JSON.stringify(obj));
        this.setState({
          searchHistory: JSON.stringify(obj)
        });

        var joined = this.state.searchIfscode.concat(
          this.props.history.location.state.ifscode
        );
        this.setState({ searchIfscode: joined });
        console.log(this.state.searchIfscode);
      })
      .catch(err => console.log(err));
  }

  onChangeCode = e => {
    this.setState({
      ifscode: e.target.value
    });
  };
  onChangeBankName = e => {
    this.setState({
      bankname: e.target.value
    });
  };
  onChangeBranchName = e => {
    this.setState({
      branchname: e.target.value
    });
  };
  onSubmit(e) {
    e.preventDefault();
    const bankObj = {
      ifscode: this.refs.ifscode.value
    };

    const bankDetails = {
      bankname: this.refs.bankname.value,
      branchname: this.refs.branchname.value
    };
    
    if (bankDetails.bankname !== "") {
      this.bankData(bankDetails);
    } else {
      if (/^[A-Za-z]{4}\d{7}$/.test(this.refs.ifscode.value)) {
        this.bank(bankObj);
      } else {
        alert(
          "Invalid IFSC Code format must be first 4 character and 7 digits"
        );
      }
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
        <h1> Search Bank Data </h1>
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
          <div className="input-field">
            <input
              type="text"
              name="bankname"
              ref="bankname"
              value={this.state.bankname}
              onChange={this.onChangeBankName}
            />
            <label htmlFor="name"> Bank Name </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="branchname"
              ref="branchname"
              value={this.state.branchname}
              onChange={this.onChangeBranchName}
            />
            <label htmlFor="name"> Branch Name </label>
          </div>
          <input type="submit" value="Search" className="btn" />
        </form>
      </div>
    );
  }
}

export default Ifscode;

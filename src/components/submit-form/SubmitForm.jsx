import React, { Component } from "react";
import "./submitForm.css";
import axios from "axios";

class SubmitForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:5000/clients/create", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              required
              type="email"
              name="email"
              placeholder="EMAIL MOTHERFUCKER"
              value={email}
              onChange={this.changeHandler}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export { SubmitForm };

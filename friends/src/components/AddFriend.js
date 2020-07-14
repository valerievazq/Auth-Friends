import Nav from "./Nav";
import "../App.css";
import { axiosWithAuth } from "./axios/axiosWithAuth";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import React, { Component } from "react";

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandle = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/friends", this.state)
      .then((res) => {
        console.log(res);
        this.setState({ name: "", age: "", email: "" });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <h1>Add New Friend</h1>
          <form onSubmit={this.submitHandle}>
            <div className="input">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Name</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Name:"
                />
              </InputGroup>
            </div>
            <div className="input">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Age</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="number"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  placeholder="Age:"
                />
              </InputGroup>
            </div>

            <div className="input">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Email</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email:"
                />
              </InputGroup>
            </div>

            <Button color="secondary" size="sm">
              Add New Friend
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddFriend;

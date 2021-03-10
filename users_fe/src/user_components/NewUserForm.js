import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { USERS_API_URL } from "../constants";

class NewUserForm extends React.Component {
  state = {
    pk: 0,
    username: "",
    created: "",
    group: "",
  };

  componentDidMount() {
    if (this.props.user) {
      const { pk, username, created, group } = this.props.user;
      this.setState({ pk, username, created, group });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = e => {
    e.preventDefault();
    axios.post(USERS_API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editUser = e => {
    e.preventDefault();
    axios.put(USERS_API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.user ? this.editUser : this.createUser}>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input type="text" name="username"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.username)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="group">Group id:</Label>
          <Input type="text" name="group"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.group)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewUserForm;
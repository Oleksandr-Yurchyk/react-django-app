import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { GROUPS_API_URL } from "../constants";

class NewGroupForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    description: "",
  };

  componentDidMount() {
    if (this.props.group) {
      const { pk, name, description } = this.props.group;
      this.setState({  pk, name, description });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createGroup = e => {
    e.preventDefault();
    axios.post(GROUPS_API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editGroup = e => {
    e.preventDefault();
    axios.put(GROUPS_API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.group ? this.editGroup : this.createGroup}>
        <FormGroup>
          <Label for="name">Group:</Label>
          <Input type="text" name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input type="text" name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewGroupForm;
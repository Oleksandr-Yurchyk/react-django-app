import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import UserList from "./UserList";
import NewUserModal from "./NewUserModal";

import axios from "axios";

import { USERS_API_URL } from "../constants";

class User extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.resetState();
  }

  getUsers = () => {
    axios.get(USERS_API_URL
    ).then(res => this.setState({ users: res.data }));
  };

  resetState = () => {
    this.getUsers();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <UserList
              users={this.state.users}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewUserModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User;
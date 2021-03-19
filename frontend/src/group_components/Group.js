import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import GroupList from "./GroupList";
import NewGroupModal from "./NewGroupModal";

import axios from "axios";

import { GROUPS_API_URL } from "../constants";

class Group extends Component {
  state = {
    groups: []
  };

  componentDidMount() {
    this.resetState();
  }

  resetState = () => {
    this.getGroups();
  };

  getGroups = () => {
    axios.get(GROUPS_API_URL
    ).then(res => this.setState({ groups: res.data }));
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <GroupList
              groups={this.state.groups}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewGroupModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Group;
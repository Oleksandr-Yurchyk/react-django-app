import React, { Component } from "react";
import { Table } from "reactstrap";
import NewGroupModal from "./NewGroupModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class GroupList extends Component {
  render() {
    const groups = this.props.groups;
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!groups || groups.length <= 0 ? (
            <tr>
              <td colSpan="5" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            groups.map(group => (
              <tr key={group.pk}>
                <td>{group.pk}</td>
                <td>{group.name}</td>
                <td>{group.description}</td>
                <td align="center">
                  <NewGroupModal
                    create={false}
                    group={group}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={group.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default GroupList;
import React, { Component, Fragment } from "react";
import User from "./user_components/User";
import Group from "./group_components/Group";

class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="text-center">
        <h1>Users</h1>
        <User />
        <h1>Groups</h1>
        <Group />
      </div>
      </Fragment>
    );
  }
}

export default App;
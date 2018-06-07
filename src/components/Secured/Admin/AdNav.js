import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class AdminNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavLink to="">Place</NavLink>
      </div>
    );
  }
}

export default AdminNav;

import React, { Component } from "react";

class Aside extends Component {
  render() {
    return (
      <div classNames="aside">
        <div className="aside__inner">
          <ul>
            <li className="active__home">Home</li>
            <li>Public</li>
            <li>Find A Job</li>
            <li>Teams</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Aside;

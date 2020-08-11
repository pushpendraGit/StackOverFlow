import React, { Component } from "react";

class Result extends Component {
  render() {
    const { item } = this.props;
    const { title, link } = item;
    console.log("Your link is", typeof link);

    return (
      <div className="reasult">
        <h3>
          <a href={link}>{title}</a>
        </h3>
      </div>
    );
  }
}

export default Result;

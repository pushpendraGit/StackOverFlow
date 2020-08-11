import React, { Component } from "react";

class Result extends Component {
  render() {
    const { item } = this.props;
    const { title, link } = item;
    console.log("Your link is", typeof link);

    return (
      <div className="reasult">
        <h3 className="r__main">
          <a href={link}>{title}</a>
        </h3>
      </div>
    );
  }
}

export default Result;

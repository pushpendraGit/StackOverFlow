import React, { Component } from "react";
import { connect } from "react-redux";
import search from "../actions/search";
import { searchWithTag } from "../actions/search";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      tags: [
        "java",
        "html",
        "css",
        "nodejs",
        "react.js",
        "c++",
        "android",
        "c#",
        "php",
        "python",
        "ios",
        "mysql",
        "asp.net",
        "sql",
        "arrays",
        "r",
        ".net",
        "sql-server",
        "ruby-on-rails",
        "json",
        "swift",
        "c",
        "angularjs",
        "django",
        "reactjs",
        "angular",
        "ajax",
        "ruby",
        "ajax",
        "xml",
        "linux",
        "objective-c",
        "excel",
        "regex",
        "json",
        "python-3.x",
        "wordpress",
        "spring",
        "database",
        "string",
        "asp.net-mvc",
        "mongodb",
        "git",
        "bash",
        "redux",
        "list",
      ],
    };
  }

  handleChange = (e) => {
    this.setState({
      q: e.target.value,
    });
  };

  handleSearch = () => {
    const text = this.state.q;

    const tags = this.state.tags;

    const index = tags.indexOf(text);

    console.log("Your find index is", index);

    if (index !== -1) {
        console.log('Inside tag');
      this.props.dispatch(searchWithTag(text));
    }

    console.log("Yo text is ", text);

    this.props.dispatch(search(text));
  };
  render() {
    console.log("your all props is", this.props);

    return (
      <div className="nav">
        <div className="logo">
          <img src="data:image/png;base64,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" />
        </div>

        <input
          placeholder="Search with tags, question"
          onChange={this.handleChange}
          className="nav__input"
        />

        <button onClick={this.handleSearch}>Search</button>
        <br></br>
      </div>
    );
  }
}

export default connect()(Navbar);

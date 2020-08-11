import React, { Component } from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import Result from "./Result";
import question from "../actions/topQuestion";
import Pagination from "./Pagination";
import Aside from "./Aside";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postPerPage: 5,
    };
  }

  componentDidMount() {
    this.props.dispatch(question());
  }

  paginate = (pageNumber) => {
    this.setState({
      ...this.state,
      currentPage: pageNumber,
    });
  };

  render() {
    const { result } = this.props.search;
    const { allQuestion } = this.props.question;

    const { currentPage, postPerPage } = this.state;

    const dispaly = result.length !== 0 ? result : allQuestion;

    //for paginatioin

    const indexOfLastPost = currentPage * postPerPage;

    const indexOfFirstPost = indexOfLastPost - postPerPage;

    const currentPost = dispaly.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div>
        <Navbar />

        <div className="main">
          <Aside />
          <div className='core'>
    {result.length === 0 && <h1 className="top">Top Question</h1>}

          <div className="main_content">
           

            <div className="list">
              {currentPost.map((item) => (
                <Result item={item} dispatch={this.props.dispatch} />
              ))}
            </div>
            </div>
            <Pagination
              postsPerPage={postPerPage}
              totalPosts={30}
              paginate={this.paginate}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ search, question }) {
  return {
    search,
    question,
  };
}

export default connect(mapStateToProps)(App);

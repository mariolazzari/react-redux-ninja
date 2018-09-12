import React, { Component } from "react";
//import axios from "axios";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  /*
  state = {
    post: null
  };

  async componentDidMount() {
    const id = this.props.match.params.post_id;

    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + id
      );
      this.setState({ post: res.data });
    } catch (error) {
      console.log(error);
    }
  }
*/

  handleClick = () => {
    console.log(this.props.post);
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);

    //const post = this.state.post ? (
    const post = this.props.post ? (
      <div className="post">
        <h4 className="title">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

// redux map
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;

  return {
    post: state.posts.find(post => post.id === id)
  };
};

// redux dispatch
const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      //dispatch({ type: "DELETE_POST", id: id });
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

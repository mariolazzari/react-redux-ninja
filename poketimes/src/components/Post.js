import React, { Component } from "react";
import axios from "axios";

export default class Post extends Component {
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

  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="title">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

import React, { Component } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "./pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
  // store data in redux
  /*
  state = {
    posts: []
  };

  // load posts
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => this.setState({ posts: res.data }));
  }
  */

  render() {
    //const { posts } = this.state;
    const { posts } = this.props;

    const postList = posts.length ? (
      posts.map(post => (
        <div className="post card" key={post.id}>
          <img src={Pokeball} alt="A pokeball" />
          <div className="card-content">
            <Link to={"/" + post.id}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="center">No post yet</div>
    );

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStotetoProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStotetoProps)(Home);

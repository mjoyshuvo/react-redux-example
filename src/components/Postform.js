import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br></br>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            ></input>
          </div>
          <div>
            <label>Body:</label>
            <br></br>
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            ></textarea>
          </div>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;

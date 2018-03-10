import React, {Component} from 'react';
import {connect} from 'react-redux';
import blog from '../API/blogs';

class BlogInput extends Component {
  postNewBlog() {
    this.props.onPostNewBlog({
      text: this.blogTextInpt.value,
      title: this.blogTitleInpt.value,
    });
    this.blogTextInpt.value = '';
    this.blogTitleInpt.value = '';
  }

  render() {
    return (
      <div>
        <input ref={input => (this.blogTitleInpt = input)} placeholder="Title"/>
        <input ref={input => (this.blogTextInpt = input)} placeholder="Text"/>
        <button onClick={this.postNewBlog.bind(this)}>Add blog</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    blogList: state,
  }),
  dispatch => ({
    onPostNewBlog: newBlog => {
      blog.postNewBlog(newBlog)
      .then(response => console.log(response.status));
    },
  })
)(BlogInput);

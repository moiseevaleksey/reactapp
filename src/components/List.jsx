import React, {Component} from 'react';
import {connect} from 'react-redux';
import blog from '../API/blogs';

class List extends Component {
  deleteBlog(id) {
    this.props.onBlogDelete(id);
  }

  getBlogs() {
    this.props.onGetBlogs();
  }

  render() {
    this.getBlogs();
    return (
      <div>
        <ul>
          {this.props.state.map(({ id, title, text }) => (
            <li key={id} onClick={() => this.deleteBlog(id)} data-id={id}>
              Title:{title}, Text: {text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    state: state.blogs.filter(
      blog =>
        blog.title.toLowerCase().includes(state.filterBlogs.toLowerCase()) ||
        blog.text.toLowerCase().includes(state.filterBlogs.toLowerCase())
    ),
  }),
  dispatch => ({
    onBlogDelete: id => {
      dispatch({ type: 'DELETE_BLOG', id });
    },
    onGetBlogs: () => {
      blog.getBlogs()
        .then(response => response.json())
        .then(data => dispatch({ type: 'LOAD_BLOGS', data}));
    },
  })
)(List);

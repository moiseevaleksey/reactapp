import React, {Component} from 'react';
import {connect} from 'react-redux';

class BlogInput extends Component {
  addBlog () {
    this.props.onAddBlog ({
      blogText: this.blogTextInpt.value,
      blogTitle: this.blogTitleInpt.value,
    });
    this.blogTextInpt.value = '';
    this.blogTitleInpt.value = '';
  }

  render () {
    return (
      <div>
        <input ref={input => (this.blogTitleInpt = input)} placeholder="Title" />
        <input ref={input => (this.blogTextInpt = input)} placeholder="Text" />
        <button onClick={this.addBlog.bind (this)}>Add blog</button>
      </div>
    );
  }
}

export default connect (
  state => ({
    blogList: state,
  }),
  dispatch => ({
    onAddBlog: blog => {
      dispatch ({type: 'ADD_BLOG', blog: blog});
    },
  })
) (BlogInput);

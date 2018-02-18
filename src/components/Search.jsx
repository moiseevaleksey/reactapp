import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  findBlog () {
    this.props.onBlogSearch (this.searchInput.value);
  }

  render () {
    return (
      <input
        type="search"
        onChange={this.findBlog.bind (this)}
        ref={input => (this.searchInput = input)}
        placeholder="Search"
      />
    );
  }
}

export default connect (
  state => ({}),
  dispatch => ({
    onBlogSearch: searchString => {
      dispatch ({type: 'FIND_BLOG', searchString: searchString});
    },
  })
) (Search);

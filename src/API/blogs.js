require('isomorphic-fetch');

class Blog {
  getBlogs() {
    return fetch('http://localhost:3012/api/blogs/');
  }

  postNewBlog(blog) {
    return fetch('http://localhost:3012/api/blogs/', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blog)
    });
  }

  deleteBlog(id) {
    return fetch('http://localhost:3012/api/blogs/' + id, {
      method: 'delete',
    });
  }
}

const blog = new Blog();

export default blog;
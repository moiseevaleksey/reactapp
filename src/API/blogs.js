class blog {
  addNewBlog({ text, title }) {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('text', text);

    return fetch('http://example.com/api/v1/registration', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
  }
}

export default blog;
export default function carList(state = [], action) {
  if (action.type === 'ADD_BLOG') {
    const maxId = state.reduce((a, b) => {
      return a.id > b.id ? a.id : b.id;
    });
    return [
      ...state,
      { id: maxId + 1, title: action.blog.blogTitle, text: action.blog.blogText },
    ];
  } else if (action.type === 'DELETE_BLOG') {
    const newState = state.filter(blog => blog.id !== action.id);
    return newState;
  } else if (action.type === 'LOAD_BLOGS') {
    const newState = action.data;
    return newState;
  }
  return state;
}

const initialState = '';

export default function filterBlogs(state = initialState, action) {
  if (action.type === 'FIND_BLOG') {
    return action.searchString;
  }
  return state;
}

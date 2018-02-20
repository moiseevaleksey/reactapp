import { combineReducers } from 'redux';
import blogs from './blogs';
import filterBlogs from './filterBlogs';

export default combineReducers ({
  blogs,
  filterBlogs,
});

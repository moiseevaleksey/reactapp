const initState = [
  {
    id: 1,
    title: 'Title1',
    text: 'Text1',
  },
  {
    id: 2,
    title: 'Title2',
    text: 'Text2',
  },
  {
    id: 3,
    title: 'Title3',
    text: 'Text3',
  },
  {
    id: 4,
    title: 'Title4',
    text: 'Text4',
  },
  {
    id: 5,
    title: 'Title5',
    text: 'Text5',
  },
];

export default function carList (state = initState, action) {
  if (action.type === 'ADD_BLOG') {
    const maxId = state.reduce ((a, b) => {
      return a.id > b.id ? a.id : b.id;
    });
    return [
      ...state,
      {id: maxId + 1, title: action.blog.blogTitle, text: action.blog.blogText},
    ];
  } else if (action.type === 'DELETE_BLOG') {
    const newState = state.filter (blog => blog.id !== action.id);
    return newState;
  }
  return state;
}

import {
  ADD_POST_ACTION,
  DELETE_POST_ACTION,
  UPDATE_POST_ACTION,
} from "../actions/PostsActions";
let posts = [];
const initialState = {
  posts: [
    { id: "1", title: "asdfgasdfg", description: "zxcvbnmzxcvbnmasdffffff" },
    { id: "2", title: "iasdfgasdfgnm", description: "zxcvbnmzxcvbnmasdfkkkk" },
    { id: "3", title: "bnasdfgasdfgv", description: "zxcvbnmzxcvbnmasdfllll" },
    { id: "4", title: "tyasdfgasdfgd", description: "zxcvbnmzxcvbnmasdfpppp" },
  ],
};

export function PostsReducer(state = initialState, action) {
  if (action.type === ADD_POST_ACTION) {
    console.log(action.payload);
    posts = [...state.posts];
    posts.push(action.payload);

    return {
      ...state,
      posts: posts,
    };
  }
  if (action.type === UPDATE_POST_ACTION) {
    console.log(action.payload);
    posts = [...state.posts];
    const postIndex = posts.findIndex((post) => post.id === action.payload.id);
    posts[postIndex] = action.payload;

    return {
      ...state,
      posts: posts,
    };
  }
  if (action.type === DELETE_POST_ACTION) {
    const posts = [...state.posts];

    const postIndex = posts.findIndex((post) => post.id === action.payload);
    posts.splice(postIndex, 1);
    return {
      ...state,
      posts,
    };
  }
  return state;
}

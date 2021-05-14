export const ADD_POST_ACTION = "[post action] Add posts";
export const UPDATE_POST_ACTION = "[post action] Update posts";
export const DELETE_POST_ACTION = "[post action] Delete posts";
export function addPostsAction(post) {
  return {
    type: ADD_POST_ACTION,
    payload: post,
  };
}
export function updatePostsAction(post) {
  return {
    type: UPDATE_POST_ACTION,
    payload: post,
  };
}

export function deletePostsAction(postId) {
  return {
    type: DELETE_POST_ACTION,
    payload: postId,
  };
}

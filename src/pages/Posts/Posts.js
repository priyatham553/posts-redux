import { useDispatch, useStore } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePostsAction } from "../store/actions/PostsActions";
function Posts(props) {
  const store = useStore();
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getPosts();
  }, []);
  function getPosts() {
    const state = store.getState();
    setPosts(state.posts);
  }
  function onDeletePost(postId) {
    if (window.confrim("Are you sure you wanted to delete")) {
      dispatch(deletePostsAction(postId));
      getPosts();
    }
  }
  return (
    <div>
      <div>
        <h1>Posts Page</h1>
      </div>
      <div>
        <Link to="/createpost">Create Posts</Link>
      </div>
      <div className="d-flex">
        {posts.map((post) => (
          <div className="flex-1 p-3">
            <div>Id:{post.id}</div>
            <div>Title:{post.title}</div>
            <div>Description:{post.description}</div>
            <div>
              <Link to={{ pathname: `/updatepost/${post.id}` }}>
                Update Post
              </Link>
            </div>
            <div>
              <button onClick={() => onDeletePost(post.id)}>Delete Post</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;

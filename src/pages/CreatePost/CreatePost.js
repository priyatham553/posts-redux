import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPostsAction } from "../store/actions/PostsActions";

function CreatePost(props) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  function onSubmit(e) {
    e.preventDefault();
    const post = {
      id: Math.random().toString(),
      title,
      description,
    };

    dispatch(addPostsAction(post));

    props.history.push("/posts");
  }
  return (
    <div>
      <h2> Create Post</h2>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button className="btn btn-primary"> Create Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreatePost;

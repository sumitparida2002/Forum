import React, { useState } from "react";

import "./style.css";
// import createPost from "../actions/post.js";
import { createPost } from "../api/post";

const CreatePost = () => {
  const [post, setPost] = useState({ title: "", message: "", creator: "" });
  return (
    <div className="form-container">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // createPost();
            createPost(post);
          }}
          action="/"
          method="post"
          className="form-card"
        >
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              value={post.message}
              onChange={(e) => setPost({ ...post, message: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="creator">Creator</label>
            <input
              type="text"
              value={post.creator}
              onChange={(e) => setPost({ ...post, creator: e.target.value })}
            />
          </div>
          <div>
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

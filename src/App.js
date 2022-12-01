import React, { useState } from "react";
import PostForm from "./components/PostForm";
import TableList from "./components/TableList";
import "./style/style.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", stack: "MERN Stack" },
    { id: 2, title: "Python", stack: "Full-Stack" },
    { id: 3, title: "C#", stack: "Cyber" },
    { id: 4, title: "Goo", stack: "Back End" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  return (
    <div className="app w-50 mx-auto">
      <PostForm createPost={createPost} />
      <div className="d-flex flex-row-reverse my-2">
        <select className="form-select w-50">
          <option>Sorted by Title</option>
          <option>Sorted by Job</option>
        </select>
      </div>
      {posts.length ? (
        <TableList
          remove={removePost}
          posts={posts}
          title={"Favourite Programming Language"}
        />
      ) : (
        <h6 className="text-center my-3">You should add some post</h6>
      )}
    </div>
  );
}

export default App;

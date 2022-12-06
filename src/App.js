import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import FilterAndSearch from "./components/FilterAndSearch";
import PostForm from "./components/PostForm";
import TableList from "./components/TableList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./hooks/useCreatePost";
import "./style/style.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "MERN Stack" },
    { id: 2, title: "Python", body: "Full-Stack" },
    { id: 3, title: "C#", body: "Cyber" },
    { id: 4, title: "Goo", body: "Back End" },
  ]);

  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPost = usePosts(posts, filter.sort, filter.search);

  useEffect(() => {}, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
  }

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  return (
    <div className="app w-50 mx-auto">
      <button onClick={fetchPosts}>Fetch API</button>
      <MyButton
        onClick={() => {
          return setModal(true);
        }}
        className="btn btn-primary"
      >
        Add Posts
      </MyButton>
      <MyModal modal={modal} setModal={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <FilterAndSearch filter={filter} setFilter={setFilter} />
      <TableList
        remove={removePost}
        posts={sortedAndSearchPost}
        title={"Favourite Programming Language"}
      />
    </div>
  );
}

export default App;

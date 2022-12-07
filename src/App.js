import React, { useEffect, useState } from "react";
import PostServiceApi from "./API/PostServiceApi";
import FilterAndSearch from "./components/FilterAndSearch";
import PostForm from "./components/PostForm";
import TableList from "./components/TableList";
import MyButton from "./components/UI/button/MyButton";
import MyLoader from "./components/UI/Loader/MyLoader";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./hooks/useCreatePost";
import "./style/style.css";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPost = usePosts(posts, filter.sort, filter.search);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    setIsLoading(true);
    const posts = await PostServiceApi.getAllPosts();
    setPosts(posts);
    setIsLoading(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  return (
    <div className="app w-75 mx-auto">
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

      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          <MyLoader />
        </div>
      ) : (
        <TableList
          remove={removePost}
          posts={sortedAndSearchPost}
          title={"Beautiful posts"}
        />
      )}
    </div>
  );
}

export default App;

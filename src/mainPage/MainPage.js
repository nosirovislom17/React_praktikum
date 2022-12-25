import React, { useEffect, useState } from "react";
import PostServiceApi from "../API/PostServiceApi";
import FilterAndSearch from "../components/FilterAndSearch";
import PostForm from "../components/PostForm";
import TableList from "../components/TableList";
import MyButton from "../components/UI/button/MyButton";
import MyLoader from "../components/UI/Loader/MyLoader";
import MyModal from "../components/UI/modal/MyModal";
import MyPagination from "../components/UI/pagination/MyPagination";
import { usePosts } from "../hooks/useCreatePost";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPageArray } from "../utils/Pages";

function MainPage() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [modal, setModal] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchPost = usePosts(posts, filter.sort, filter.search);

  const [fetchPosts, isLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostServiceApi.getAllPosts(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPage(getPageCount(totalCount, limit));
    }
  );


  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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
      {postError && <p>Error</p>}
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
      <MyPagination totalPage={totalPage} page={page} changePage={changePage} />
    </div>
  );
}

export default MainPage;

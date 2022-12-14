import React from "react";
import { getPageArray } from "../../../utils/Pages";
import MyButton from "../button/MyButton";

const MyPagination = ({ totalPage, page, changePage }) => {
  let pageArray = getPageArray(totalPage);
  return (
    <>
      {pageArray.map((item) => (
        <MyButton
          className={
            page === item ? "btn btn-primary" : "btn btn-outline-primary"
          }
          key={item}
          onClick={() => changePage(item)}
        >
          {item}
        </MyButton>
      ))}
    </>
  );
};

export default MyPagination;

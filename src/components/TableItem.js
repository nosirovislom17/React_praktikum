import React from "react";
import MyButton from "./UI/button/MyButton";

const TableItem = (props) => {
  return (
    <div className="border my-2 p-3 d-flex justify-content-between align-items-center">
      <div>
        <span>
          {props.number}.<b> {props.post.title}</b>
        </span>
        <p className="lead">{props.post.body}</p>
      </div>
      <p>
        <MyButton
          onClick={() => {
            props.remove(props.post);
          }}
          className="btn btn-outline-danger w-100"
        >
          Delete
        </MyButton>
      </p>
    </div>
  );
};

export default TableItem;

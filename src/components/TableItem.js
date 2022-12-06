import React from "react";
import MyButton from "./UI/button/MyButton";

const TableItem = (props) => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "70% 30%" }}
      className="border my-2 p-3"
    >
      <div>
        <span>{props.number}</span>
        <p style={{ display: "inline-block" }}>{props.post.title}</p>
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

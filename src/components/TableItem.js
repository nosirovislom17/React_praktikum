import React from "react";
import MyButton from "./UI/button/MyButton";

const TableItem = (props) => {
  return (
    <tr>
      <td>{props.number}</td>
      <td>{props.post.title}</td>
      <td>{props.post.stack}</td>
      <td>
        <MyButton
          onClick={() => {
            props.remove(props.post);
          }}
        >
          delete
        </MyButton>
      </td>
    </tr>
  );
};

export default TableItem;

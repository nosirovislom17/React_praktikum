import React from "react";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const TableList = ({ posts, title, remove }) => {
  return (
    <>
      <h5 className="text-center">{title}</h5>
      <table className="table table-striped">
        <TableHeader />
        <tbody>
          {posts.map((data, index) => {
            return (
              <TableItem
                remove={remove}
                number={index + 1}
                post={data}
                key={data.id}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableList;

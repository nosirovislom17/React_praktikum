import React, { useState } from "react";

export const ToggleBtn = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="btn btn-secondary"
      >
        Toggle btn
      </button>
      {toggle ? <p>Youtube content</p> : null}
    </>
  );
};

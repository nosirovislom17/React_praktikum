import React, { useState } from "react";

export const InputVal = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <p>Value:{value}</p>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </>
  );
};

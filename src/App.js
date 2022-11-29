import React, { useState } from "react";
import { Counter } from "./components/Counter";
import { InputVal } from "./components/InputVal";
import { ToggleBtn } from "./components/ToggleBtn";
import "./style/style.css";

function App() {
  return (
    <div className="app w-50 mx-auto">
      <Counter />
      <ToggleBtn />
      <hr />
      <InputVal />
    </div>
  );
}

export default App;

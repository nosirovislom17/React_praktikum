import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouterApp from "./components/RouterApp";
import "./style/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RouterApp />
    </BrowserRouter>
  );
};

export default App;

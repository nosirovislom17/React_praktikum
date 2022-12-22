import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouterApp from "./components/RouterApp";
import { AuthContext } from "./context/index";
import "./style/style.css";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Navbar />
        <RouterApp />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;

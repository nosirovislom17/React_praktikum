import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../mainPage/Error";
import MainPage from "../mainPage/MainPage";
import Game from "../navigationPage/Game";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" exact element={<MainPage />} />
      <Route path="/game" element={<Game />} />
      <Route path="/posts" element={<MainPage />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" />} />{/* Redirect ni ishini qiladi RRDni yangi versiyasida */}
    </Routes>
  );
};

export default RouterApp;

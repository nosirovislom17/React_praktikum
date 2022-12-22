import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../routes/Route";

const RouterApp = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );

  /* Redirect ni ishini qiladi RRDni yangi versiyasida */
};

export default RouterApp;

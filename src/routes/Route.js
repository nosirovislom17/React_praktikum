import MainPage from "../mainPage/MainPage";
import Game from "../navigationPage/Game";
import Login from "../navigationPage/Login";

export const privateRoutes = [
  { path: "/game", element: <Game />, exact: true },
  { path: "/posts", element: <MainPage />, exact: true },
];

export const publicRoutes = [{ path: "/login", element: <Login />, exact: true }];

import React from "react";
import Home from "./pages/Home";
import { routes } from "./utils/paths";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";
import Post from "./pages/Post";

export const ROUTES = [
  { component: <Home />, path: routes.HOME_PATH },
  { component: <Login />, path: routes.LOGIN },
  { component: <Post />, path: routes.POST },
  { component: <RegisterPage />, path: routes.REGISTER },
  { component: <NotFound />, path: "*" },

];

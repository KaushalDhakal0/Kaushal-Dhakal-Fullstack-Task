import React from "react";
import Home from "./pages/Home";
import { routes } from "./utils/paths";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";
import Post from "./pages/Post";

export const ROUTES = [
  { Component: Home , path: routes.HOME_PATH , isPrivate: true},
  { Component: Login , path: routes.LOGIN  , isPrivate: false},
  { Component: Post , path: routes.POST , isPrivate: true},
  { Component: RegisterPage , path: routes.REGISTER , isPrivate: false},
  { Component: NotFound , path: "*" , isPrivate: false},
];

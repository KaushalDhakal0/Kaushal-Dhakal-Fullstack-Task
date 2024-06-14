import React from "react";
import Home from "./pages/Home";
import { routes } from "./utils/paths";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";

export const ROUTES = [
  { component: <Home />, path: routes.HOME_PATH },
  { component: <Login />, path: routes.LOGIN },
  { component: <RegisterPage />, path: routes.REGISTER },
  { component: <NotFound />, path: "*" },
];

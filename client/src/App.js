import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";
import Post from "./pages/Post";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/post/:id" element={ <RequireAuth><Post /></RequireAuth> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;

function RequireAuth({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
}

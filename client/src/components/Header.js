// Header.js
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../sagas/user/actions";

const Header = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");

    dispatch(logoutUser());

    window.location.href = "/login";
  };
  return (
    <header className="tw-bg-gray-800 tw-text-white tw-py-4">
      <div className="tw-container tw-mx-auto tw-flex tw-items-center tw-justify-between">
        <Link to="/" className="tw-text-2xl tw-font-bold tw-text-white tw-ml-4">
          My Blog
        </Link>
        <nav className="tw-flex tw-space-x-4">
          <Link to="/" className="tw-text-white hover:tw-underline">
            Home
          </Link>
          {!token && (
            <>
              <Link to="/register" className="tw-text-white hover:tw-underline">
                Register
              </Link>
              <Link to="/login" className="tw-text-white hover:tw-underline">
                Login
              </Link>
            </>
          )}
          {token && (
            <Link
              onClick={handleLogout}
              className="tw-text-white hover:tw-underline"
            >
              Logout
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

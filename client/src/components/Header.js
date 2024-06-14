// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="tw-bg-gray-800 tw-text-white tw-py-4">
      <div className="tw-container tw-mx-auto tw-flex tw-items-center tw-justify-between">
        <Link to="/" className="tw-text-2xl tw-font-bold tw-text-white tw-ml-4">My Blog</Link>
        <nav className="tw-flex tw-space-x-4">
          <Link to="/" className="tw-text-white hover:tw-underline">Home</Link>
          <Link to="/register" className="tw-text-white hover:tw-underline">Register</Link>
          <Link to="/login" className="tw-text-white hover:tw-underline">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100">
      <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-lg tw-w-full tw-max-w-md tw-text-center">
        <h1 className="tw-text-6xl tw-font-bold tw-text-indigo-600">404</h1>
        <h2 className="tw-text-3xl tw-font-semibold tw-text-gray-700 tw-mt-4">Page Not Found</h2>
        <p className="tw-text-gray-600 tw-mt-2">Sorry, the page you are looking for does not exist.</p>
        <Link
          to="/"
          className="tw-mt-6 tw-inline-block tw-bg-indigo-600 tw-text-white tw-py-2 tw-px-4 tw-rounded-md tw-font-semibold hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

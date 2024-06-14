// LoginPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("=====Login Uswr ===>", formData);
  };
  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100">
      <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-lg tw-w-full tw-max-w-md">
        <h2 className="tw-text-3xl tw-font-bold tw-text-center tw-text-gray-700 tw-mb-6">
          Login
        </h2>
        <form className="tw-space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="tw-block tw-text-gray-700 tw-mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-indigo-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              className="tw-block tw-text-gray-700 tw-mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-indigo-500"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            // onClick={handleSubmit}
            className="tw-w-full tw-bg-indigo-600 tw-text-white tw-py-2 tw-rounded-md tw-font-semibold hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2"
          >
            Login
          </button>
        </form>
        <p className="tw-text-center tw-text-gray-600 tw-mt-6">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="tw-text-indigo-600 hover:tw-underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

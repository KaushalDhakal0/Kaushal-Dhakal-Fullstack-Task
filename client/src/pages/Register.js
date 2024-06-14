// RegisterPage.js
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (password.trim() !== confirmPassword.trim()) {
      console.log("==Password==>", password);
      console.log("==confirm pw==>", confirmPassword);
      toast.error("Password must be same. Please check and try again.");
    }
    console.log("====Handle New User ERegistration......", formData);
    // toast.success("User Registered Successfully...")
  };

  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100">
      <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-lg tw-w-full tw-max-w-md">
        <h2 className="tw-text-3xl tw-font-bold tw-text-gray-700 tw-mb-6 tw-text-center">
          Register
        </h2>
        <form className="tw-space-y-4">
          <div>
            <label
              htmlFor="email"
              className="tw-block tw-text-gray-700 tw-mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="tw-block tw-text-gray-700 tw-mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="tw-block tw-text-gray-700 tw-mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-indigo-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          {/* <button
            type="submit"
            className="tw-w-full tw-bg-indigo-600 tw-text-white tw-py-2 tw-rounded-md tw-font-semibold hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2"
          >
            Register
          </button> */}
        <div className="tw-flex tw-justify-end">
        <Button
            className={
              "tw-text-center tw-w-full tw-flex tw-justify-center tw-bg-indigo-600 tw-text-white tw-py-2 tw-rounded-md tw-font-semibold  focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2"
            }
            title="Register"
            disabled={!formData.email || !formData.password || !formData.confirmPassword}
            loading={false}
            onClick={handleSubmit}
          />
        </div>
        </form>
        <p className="tw-text-gray-600 tw-mt-4">
          Already have an account?{" "}
          <Link to="/login" className="tw-text-indigo-600 hover:tw-underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

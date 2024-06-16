// RegisterPage.js
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { registerUser } from "../sagas/user/actions";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName:""
  });
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email,password, confirmPassword } = formData;

    if(!formData.email || !formData.password || !formData.confirmPassword || !formData.userName){
      toast.error("Please fill out all the fields.")
    }

    if (password.trim() !== confirmPassword.trim()) {
      toast.error("Password must be same. Please check and try again.");
      return;
    }
    let validationErrors = {};

    if (!validateEmail(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      dispatch(registerUser(formData));
    }
    
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
             {errors.email && <p className="tw-text-red-500 tw-text-sm">{errors.email}</p>}

          </div>
          <div>
            <label
              htmlFor="userName"
              className="tw-block tw-text-gray-700 tw-mb-2"
            >
              UserName
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md focus:tw-outline-none focus:tw-border-indigo-500"
              placeholder="Enter your username"
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
            disabled={!formData.email || !formData.password || !formData.confirmPassword || !formData.userName}
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

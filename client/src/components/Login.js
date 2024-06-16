// LoginPage.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "./common/Button";
import { loginUser } from "../sagas/user/actions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const {loginSuccess, loggingIn , token} = useSelector(state => state.user)
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(()=>{
    if(loginSuccess && token && !loggingIn){
      navigate('/')
    }
  },[loginSuccess, token])

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    let validationErrors = {};

    if (!validateEmail(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      dispatch(loginUser(formData));
    }

  };
  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100">
      <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-lg tw-w-full tw-max-w-md">
        <h2 className="tw-text-3xl tw-font-bold tw-text-center tw-text-gray-700 tw-mb-6">
          Login
        </h2>
        <form className="tw-space-y-6">
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
             {errors.email && <p className="tw-text-red-500 tw-text-sm">{errors.email}</p>}
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
          {/* <button
            type="submit"
            // onClick={handleSubmit}
            className="tw-w-full tw-bg-indigo-600 tw-text-white tw-py-2 tw-rounded-md tw-font-semibold hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2"
          >
            Login
          </button> */}
           <div className="tw-flex tw-justify-end">
        <Button
            className={
              "tw-text-center tw-w-full tw-flex tw-justify-center tw-bg-indigo-600 tw-text-white tw-py-2 tw-rounded-md tw-font-semibold  focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2"
            }
            title="Login"
            disabled={!formData.email || !formData.password }
            loading={false}
            onClick={handleSubmit}
          />
        </div>
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

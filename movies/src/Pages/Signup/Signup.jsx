import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupValidation from "../../Components/Validation";
import Login from "../Login/Login";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(SignupValidation(values));
    if (
      error.first_name === "" &&
      error.last_name === "" &&
      error.email === "" &&
      error.password === ""
    ) {
      axios
        .post("https://yt5k4d-8080.csb.app/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
    e.target.reset();
  };

  return (
    <div className="signup_container bg-primary bg-gradient">
      <div className="signup_box bg-light-subtle">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-8">
            <img
              src="https://zeevector.com/wp-content/uploads/LOGO/prime-video-logo-white-2048x629.png"
              alt="Amazon Prime"
              className="logo"
            />
          </div>
          <div className="mb-5">
            <label
              for="first_name"
              className="block mb-2 text-lg font-normal text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="first_name"
              onChange={handleChange}
            />
          </div>
          <span className="text-danger">{error.first_name}</span>
          <div className="mb-5">
            <label
              for="last_name"
              className="block mb-2 text-lg font-normal text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="last_name"
              onChange={handleChange}
            />
          </div>
          <span className="text-danger">{error.last_name}</span>
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-lg font-normal text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="email"
              onChange={handleChange}
            />
          </div>
          <span className="text-danger">{error.email}</span>
          <div className="mb-5">
            <label
              for="password"
              className="block mb-2 text-lg font-normal text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="password"
              onChange={handleChange}
            />
          </div>
          <span className="text-danger">{error.password}</span>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Please agree to our Terms and Conditions.
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <Link
            to="/login"
            className="ml-3 rounded-lg text-sm w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            element={<Login />}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Signup;

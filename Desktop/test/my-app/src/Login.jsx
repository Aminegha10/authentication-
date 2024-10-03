/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Users from "./users.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { useState } from "react";
const Login = ({ isLogedin, setIsLogedin }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Separate state variables for individual errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const schema = z.object({
    email: z.string(),
    password: z.string(),
  });
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });
  const SubmitData = (data) => {
    console.log(data);

    setEmailError("");
    setPasswordError("");

    const user = Users.find((user) => user.email === data.email);

    if (!user) {
      // If no user is found with the provided email
      setEmailError("Email is not valid");
      return; // Stop further execution
    }

    if (user.password !== data.password) {
      // If password doesn't match
      setPasswordError("Password is not valid");
      return; // Stop further execution
    }

    // If login is successful
    setIsLogedin(true);
    localStorage.setItem("login", true);
    navigate("/Home"); // Navigate after successful login
  };
  return (
    <div className="">
      <div role="alert" className="alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <span className="mr-[20px]">
            <strong>Email</strong> : aminogha@gmail.com
          </span>
          <span>
            <strong>Password</strong> : 123
          </span>
        </div>
      </div>
      <div className="py-16">
        <div
          className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
          style={{ boxShadow: "-4px 4px 20px 14px #00000029" }}
        >
          <div className="hidden lg:block lg:w-1/2 bg-cover bg-[url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')]"></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Hi Im Amine
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome!</p>
            <a
              href="#"
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <svg
                  className="h-6 w-6"
                  style={{ boxShadow: "0 0 0 0 #000" }}
                  viewBox="0 0 40 40"
                >
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Google
              </h1>
            </a>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSubmit(SubmitData)}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2"></label>
                {emailError && <p className="text-red-500">{emailError}</p>}{" "}
                {/* Show email error */}
                <input
                  required
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  {...register("email")}
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <a href="#" className="text-xs text-gray-500">
                    Forget Password?
                  </a>
                </div>
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}{" "}
                {/* Show password error */}
                <input
                  required
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  {...register("password")}
                />
              </div>
              <div className="mt-8">
                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a href="#" className="text-xs text-gray-500 uppercase">
                or sign up
              </a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

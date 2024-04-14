import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
  let navigate = useNavigate();
 


  
  const context = useContext(UserContext);
  const { loginUser, currentUser } = context;
  useEffect(() => {
    if (localStorage.getItem('email')&&localStorage.getItem('uuid')){
      navigate("/addpassword")
    }
  }, [currentUser])

  const [form, setForm] = useState({
    user_email: "",
    password: "",
  });

  const [emailDb, setEmailDb] = useState({ email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setEmailDb({ email: form.user_email.split(".").join("") });
  }, [form]);

  const handleLogin = () => {
    loginUser(emailDb.email, form.user_email, form.password);
  };



  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-mono">
              <lord-icon
                src="https://cdn.lordicon.com/khheayfj.json"
                trigger="loop"
                delay="1000"
                stroke="bold"
                colors="primary:white,secondary:white"
              ></lord-icon>
              passiFer
            </h1>
            <p className="text-white mt-1">
              Now you only need to remember our Password 😉
            </p>
            <button
              type="submit"
              className="block w-28 bg-white hover:bg-slate-300 text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              <Link to="/about">Read More</Link>
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white">
            <h1 className="text-gray-800 font-bold  text-2xl mb-1">
              Forgot Your Facebook Password again?
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              We got you!
            </p>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="user_email"
                id="user_email"
                value={form.user_email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="block w-full bg-indigo-600 hover:bg-indigo-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <span className="text-sm ml-2 text-blue-500 hover:text-blue-300 cursor-pointer">
              <Link to="/forgotpassword">
                Forgot our password too? Click here 🤦
              </Link>
            </span>

            <div className="py-4">
              <span className="text-sm ml-2 text-blue-500 hover:text-blue-300 cursor-pointer">
                <Link to="/register">Don't have an account? Click here 🤦</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import PasswordContext from "../context/PasswordContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPassword = () => {
  
  const context = useContext(PasswordContext)
  const {addPasswords} = context

  const email = localStorage.getItem('email')
  
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("uuid")) {
      navigate("/addpassword");
    } else {
      navigate("/");
    }
  }, []);

  const [form, setForm] = useState({ site: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    addPasswords(form.site, form.username, form.password, email)
  }

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_20%,#63e_100%)]">
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
      
      
      
      <div className="flex justify-center items-center mt-52">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto ">
              <div>
                <h1 className="text-2xl font-semibold">Add Password</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8  text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      autoComplete="off"
                      id="site"
                      name="site"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="App Name"
                    />
                    <label
                      htmlFor="site"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      App Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      autoComplete="off"
                      id="username"
                      name="username"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address/Username
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="flex py-6 justify-center">
                    <div className="button-borders">
                      <button type="submit" onClick={handleAdd} className="primary-button">SAVE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPassword;

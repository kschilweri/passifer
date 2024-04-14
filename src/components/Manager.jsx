import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import PasswordContext from "../context/PasswordContext";

const Manager = () => {
  const context = useContext(PasswordContext);
  const { addPasswords } = context;
  const [form, setForm] = useState({ site: "", username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 4
    ) {
      addPasswords(form.site, form.username, form.password);
      toast.success("Password saved", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setForm({ site: "", username: "", password: "" });
    } else {
      toast.warning("Please fill out all fields before adding password", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="mt-28">
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
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_20%,#63e_100%)]"></div>

      <div className="container mx-auto flex justify-center w-1/2 bg-teal-700 rounded-t-lg">
        <div className="p-6 text-white text-3xl">Add Password</div>
      </div>
      <div className="container mx-auto flex justify-center  w-1/2 bg-teal-600">
        <div className="container mx-auto flex justify-center p-5">
          <input
            className="w-full p-5 border-2 border-green-500 rounded-xl"
            placeholder="Enter Website"
            type="text"
            name="site"
            id="site"
            value={form.site}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="container mx-auto flex justify-center  w-1/2 bg-teal-600">
        <div className="container mx-auto flex p-5 ">
          <div className="w-1/2 flex items-center mr-2">
            <input
              className="p-5 w-full rounded-xl border-2 border-green-500"
              placeholder="Enter Username"
              type="text"
              name="username"
              id="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-1/2 flex items-center ml-2">
            <input
              className="p-5 w-full rounded-xl border-2 border-green-500"
              placeholder="Enter Password"
              type="text"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center w-1/2 bg-teal-600 rounded-b-lg">
        <div className=" container mx-auto flex p-5 justify-center">
          <button
            onClick={savePassword}
            className=" w-full relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Save
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manager;

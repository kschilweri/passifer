import React, { useContext, useEffect, useState } from "react";
import PasswordContext from "../context/PasswordContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Saved = () => {
  const context = useContext(PasswordContext);
  const { passwords, getPasswords, deletePasswords } = context;
  const email = localStorage.getItem("email")

  useEffect(() => {
    getPasswords(email);
  }, []);

  const handleDelete = (email,id) => {
    deletePasswords(email,id);
    toast.error("Password deleted", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
      {passwords.length != 0 && (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Site
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {passwords.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.site}
                  </th>
                  <td className="px-6 py-4">{item.username}</td>
                  <td className="px-6 py-4">{item.password}</td>
                  <td className="px-6 py-4 hover:cursor-pointer">
                    <lord-icon
                      src="https://cdn.lordicon.com/hjbrplwk.json"
                      trigger="hover"
                      colors="primary:#646e78,secondary:#107c91,tertiary:#ebe6ef,quaternary:#3a3347"
                      onClick={() => {
                        handleDelete(email,item.id);
                      }}
                    ></lord-icon>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Saved;

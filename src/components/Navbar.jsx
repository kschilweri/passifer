import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogOut = () => {
   localStorage.clear()
   navigate("/")
  };
  let location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  const [currentLocation, setCurrentLocation] = useState(null);

  return (
    <div className="container max-w-full">
      <nav className="bg-gradient-to-l from-blue-800 to-purple-700 p-4">
        <ul className="flex justify-left items-center w-full">
          <div className="container flex">
            <lord-icon
              src="https://cdn.lordicon.com/khheayfj.json"
              trigger="loop"
              delay="1000"
              stroke="bold"
              colors="primary:white,secondary:white"
            ></lord-icon>
            <li className="text-white text-2xl font-mono font-bold mx-2 my-0">
              passiFer
            </li>
          </div>
          {currentLocation === "/" ? (
            ""
          ) : currentLocation === "/register" ? (
            ""
          ) : currentLocation === "/about" ? (
            ""
          ):(
            <>
              <div className="container">
                <Link
                  className="text-white text-lg w-full hover:font-semibold cursor-pointer hover:underline"
                  to="/addpassword"
                >
                  New
                </Link>
              </div>
              <div className="container">
                <Link
                  className="text-white text-lg w-full px-6 hover:font-semibold cursor-pointer hover:underline"
                  to="/savedpasswords"
                >
                  Saved
                </Link>
              </div>
              <li onClick={handleLogOut} className="hover:cursor-pointer">
                <lord-icon
                  src="https://cdn.lordicon.com/gwvmctbb.json"
                  trigger="hover"
                  colors="primary:white,secondary:white"
                  style={{ width: 50, height: 50 }}
                ></lord-icon>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

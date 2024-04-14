import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-purple-700 fixed bottom-0 w-full">
      <div className="p-4 flex justify-center text-white">
        Made with
        <lord-icon
          src="https://cdn.lordicon.com/jjoolpwc.json"
          trigger="loop"
          colors="primary:white,secondary:white"
        ></lord-icon>
        by Kausty
      </div>
    </div>
  );
};

export default Footer;

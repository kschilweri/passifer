import React from "react";

const About = () => {
  return (
    <div>
      i am about page
      <div className="flex justify-center">
        <button className="primary-button" onClick={sendEmail}>
          send email
        </button>
      </div>
    </div>
  );
};

export default About;

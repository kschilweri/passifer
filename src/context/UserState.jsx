import UserContext from "./UserContext";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const UserState = (props) => {
    const [currentUser, setCurrentUser] = useState({user_id:""})

  const addUser = async (name, username, email, user_email, password) => {
    const response = await fetch("http://localhost:3000/registering_user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email,
        user_email,
        password,
        uuid: uuidv4(),
      }),
    });
    const json = await response.json();

    toast.info(json.message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    if (json.success) {
      localStorage.setItem("email", json.email);
      localStorage.setItem("uuid", json.uuid);

    }
  };


  const loginUser = async(email,user_email,password) => {
    const response = await fetch("http://localhost:3000/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify({
            email,
            user_email,
            password
        })
    })
    const json = await response.json()

      toast.info(json.message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  
      if (json.success) {
        localStorage.setItem("email", json.email);
        localStorage.setItem("uuid", json.uuid);
        setCurrentUser({user_id:json.uuid})
      }
  }

  return (
    <UserContext.Provider value={{ addUser, loginUser, currentUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;

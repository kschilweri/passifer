import PasswordContext from "./PasswordContext";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordState = (props) => {
  const [passwords, setPasswords] = useState([]);

  const addPasswords = async (site, username, password, email) => {
    const response = await fetch('http://localhost:3000/addpassword',{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            "email":email
        },
        body: JSON.stringify({site, username, password, id:uuidv4()})
      })

      const json = await response.json();

      toast.success(json.message, {
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
  
  const getPasswords = async () => {
      //backend api call
      const response = await fetch('http://localhost:3000/',{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        },
      })
      const json = await response.json()
      setPasswords(json);
    }

    const deletePasswords = async (id) => {
      //backend direct delete api call 
      await fetch('http://localhost:3000/',{
        method:"DELETE",
        headers:{
            "Content-type":"application/json", 
        },
        body: JSON.stringify({id})
      })
      getPasswords();
    }

  return (
    <PasswordContext.Provider value={{passwords , addPasswords}}>{props.children}</PasswordContext.Provider>
    );
};

export default PasswordState;

import PasswordContext from "./PasswordContext";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const PasswordState = (props) => {
  const [passwords, setPasswords] = useState([]);

  const addPasswords = async (site, username, password) => {
    await fetch('http://localhost:3000/',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({site, username, password, id:uuidv4()})
      })

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
    <PasswordContext.Provider value={{passwords , getPasswords, deletePasswords, addPasswords}}>{props.children}</PasswordContext.Provider>
    );
};

export default PasswordState;

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddPassword = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("uuid")) {
      navigate("/addpassword");
    } else {
      navigate("/");
    }
  }, []);

  return <div>i am remodelled page</div>;
};

export default AddPassword;

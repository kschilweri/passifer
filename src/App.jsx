import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import AddPassword from "./components/AddPassword";
import Footer from "./components/Footer";
import Saved from "./components/Saved";
import PasswordState from "./context/PasswordState";
import Login from "./components/Login";
import Register from "./components/Register"
import ForgotPassword from "./components/ForgotPassword";
import About from "./components/About";
import UserState from "./context/UserState";

function App() {
  return (
    <>
    <UserState>
    <PasswordState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/addpassword" element={<AddPassword />} />
          <Route exact path="/savedpasswords" element={<Saved />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
      </PasswordState>
      </UserState>
    </>
  );
}

export default App;

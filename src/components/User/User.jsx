import "./user.css";
import LogIn from "./LogIn/LogIn";
import Register from "./Register/Resister";
import { Route, Routes } from "react-router-dom";
import { Button } from "reactstrap";
import { UserDate } from "../../DateUser";
import { useContext } from "react";

const User = () => {
  const { setError, navigate } = useContext(UserDate);

  function handleLogIn() {
    setError(null);
    navigate("login");
  }
  function handleRegister() {
    setError(null);
    navigate("register");
  }
  return (
    <div>
      <div className="user">
        <Button onClick={handleLogIn}>login</Button>

        <Button onClick={handleRegister}>register</Button>
      </div>
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default User;

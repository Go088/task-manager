import { Link, useParams } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import { useState } from "react";

const Auth = () => {
  const { id } = useParams();
  const [register, setRegister] = useState(id === "register");

  return (
    <div >
      <br />
      <Link to="/auth/register">
        <button
          onClick={() => {
            setRegister(true);
          }}
        >
          Registration
        </button>
      </Link>
      <Link to="/auth/login">
        <button
          onClick={() => {
            setRegister(false);
          }}
        >
          Log In
        </button>
      </Link>
          {register ? <RegisterForm/> : <LoginForm/>}
    </div>
  );
};

export default Auth;

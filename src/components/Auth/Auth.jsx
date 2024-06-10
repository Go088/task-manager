import { Link, useParams } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import { useState } from "react";
import clsx from "clsx";
import css from "./Auth.module.css";

const Auth = () => {
  const { id } = useParams();
  const [register, setRegister] = useState(id === "register");

  return (
    <div>
      <br />
      <Link
        to="/auth/register"
        className={clsx(css.link, css.activeLink)}
        onClick={() => {
          setRegister(true);
        }}
      >
        Registration
      </Link>
      <Link
        to="/auth/login"
        onClick={() => {
          setRegister(false);
        }}
      >
        Log In
      </Link>
      {register ? <RegisterForm /> : <LoginForm />}
    </div>
  );
};

export default Auth;

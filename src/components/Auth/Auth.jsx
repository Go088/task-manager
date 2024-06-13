import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import css from "./Auth.module.css";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";

const Auth = () => {
  const { id } = useParams();
  const [register, setRegister] = useState(id === "register");


  return (
    <div className={css.background}>
      <div className={css.authCard}>
        <div className={css.links}>
          <NavLink
            to="/auth/register"
            className={clsx(css.link, register && css.activeLink)}
            onClick={() => {
              setRegister(true);
            }}
          >
            Registration
          </NavLink>
          <NavLink
            to="/auth/login"
            className={clsx(css.link, !register && css.activeLink)}
            onClick={() => {
              setRegister(false);
            }}
          >
            Log In
          </NavLink>
        </div>
        {register ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
};
export default Auth;

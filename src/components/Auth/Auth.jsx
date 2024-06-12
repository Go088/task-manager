import { Link, useParams } from "react-router-dom";

import { useState } from "react";
// import clsx from "clsx";
import css from "./Auth.module.css";
import RegisterForm from "../Form/RegisterForm";
import LoginForm from "../Form/LoginForm";
const Auth = () => {
  const { id } = useParams();
  const [register, setRegister] = useState(id === "register");
  return (
    <div className={css.background}>
      <div className={css.authCard}>
        <div className={css.links}>
          <Link
            to="/auth/register"
            className={css.link}
            onClick={() => {
              setRegister(true);
            }}
          >
            Registration
          </Link>
          <Link
            to="/auth/login"
            className={css.link}
            onClick={() => {
              setRegister(false);
            }}
          >
            Log In
          </Link>
        </div>
        {register ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
};
export default Auth;

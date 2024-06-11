import { Link, useParams } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import { useState } from "react";
import css from "./Auth.module.css";

const Auth = () => {
  const { id } = useParams();
  const [register, setRegister] = useState(id === "register");

  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.links}>
          <Link className={css.renderComponent}
            to="/auth/register"
            onClick={() => {
              setRegister(true);
            }}
          >
            Registration
          </Link>
          <Link className={css.renderComponent}
            to="/auth/login"
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

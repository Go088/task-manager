import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/features/auth/operations";
import css from "./Form.module.css";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useState } from "react";


// Схема валідації
const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .matches(/^\S*$/, "Email should not contain spaces")
    .matches(/^[\S].*[\S]$/, "Email cannot start or end with whitespace")
    .email("Email is invalid"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .matches(/^\S*$/, "Password cannot contain spaces")
    .min(6, "Name should be at least 6 characters"),
});

// Форма
const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (userData) => {
    console.log(JSON.stringify(userData));
    dispatch(logIn(userData));
    reset();
  };

  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");

  const handleToglePassword = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <label>
          <input
            className={css.input}
            type="email"
            {...register("email")}
            placeholder="Enter your email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          <div className={css.inputContainer}>
            <input
              className={css.input}
              type={type}
              {...register("password")}
              placeholder="Create a password"
            />
            <Icon
              icon={icon}
              size={18}
              className={css.icon}
              onClick={handleToglePassword}
            />
          </div>
        </label>
        <input type="submit" value={"Log In Now"} className={css.button} />
      </form>
    </div>
  );
};
export default LoginForm;

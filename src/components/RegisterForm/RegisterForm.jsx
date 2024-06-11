import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/features/auth/operations";
import css from "./RegisterForm.module.css"

// Схема валідації
const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(3, "Name should be at least 3 characters")
    .matches(/^[\S\s]{3,}$/, "Name should contain at least three characters"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .matches(/^\S*$/, "Email should not contain spaces")
    .email("Email is invalid"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .matches(/^\S*$/, "Password cannot contain spaces")
    .min(6, "Name should be at least 6 characters"),
});

// Форма
const RegisterForm = () => {
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
    dispatch(registerUser(userData));
    reset();
  };

  return (
    <div className={css}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <label>
          <input className={css.input}
            type="text"
            {...register("name")}
            placeholder="Enter your name"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label>
          <input className={css.input}
            type="email"
            {...register("email")}
            placeholder="Enter your email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          <input className={css.input}
            type="password"
            {...register("password")}
            placeholder="Create a password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>

        <input type="submit" value={"Register Now"} className={css.button}/>
      </form>
    </div>
  );
};

export default RegisterForm;

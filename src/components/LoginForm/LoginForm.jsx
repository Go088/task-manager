import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Схема валідації
const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Name should be at least 6 characters"),
});

// Форма
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (userData) => {
    console.log(JSON.stringify(userData));
  };

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input type="email" {...register("email")} placeholder="Enter your email"/>
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          Password
          <input type="password" {...register("password")} placeholder="Confirm a password"/>
          {errors.password && <p>{errors.password.message}</p>}
        </label>

        <input type="submit" value={'Log In Now'}/>
      </form>
    </>
  );
};

export default LoginForm;

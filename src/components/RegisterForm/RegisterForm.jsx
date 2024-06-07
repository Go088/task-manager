import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Схема валідації
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be at least 3 characters"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Name should be at least 6 characters"),
});

// Форма
const RegisterForm = () => {
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
      <h3>React Hook Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name
          <input type="text" {...register("name")} placeholder="Enter your name"/>
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label>
          Email
          <input type="email" {...register("email")} placeholder="Enter your email"/>
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          Password
          <input type="password" {...register("password")} placeholder="Create a password"/>
          {errors.password && <p>{errors.password.message}</p>}
        </label>

        <input type="submit" value={"Register Now"}/>
      </form>
    </>
  );
};

export default RegisterForm;

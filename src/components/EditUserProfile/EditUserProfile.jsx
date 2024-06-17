import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "react-icons-kit";
import { eye, eyeOff } from "react-icons-kit/feather";
import Loader from "../Loader/Loader.jsx";
import {
  selectTheme,
  selectUser,
} from "../../redux/features/auth/selectors.js";
import { updateUser } from "../../redux/features/user/operations.js";
import css from "./EditUserProfile.module.css";
import { object, string } from "yup";

const updateUserSchema = object({
  name: string()
    .required("The field cannot be empty")
    .min(2, "Minimum 2 characters")
    .max(32, "Maximum 32 characters")
    .matches(/^[\w !@#$%^&*()+,.:;’“?\-/]+$/, "Invalid name format"),
  email: string()
    .required("The field cannot be empty")
    .email("Invalid email format")
    .matches(/^[a-z0-9 .]+@[a-z]+\.[a-z]{2,3}$/i, "Invalid email format"),
  password: string()
    .min(8, "Minimum 8 characters")
    .max(32, "Maximum 32 characters")
    .matches(/^[\w\-!@#$%^&*()+,.:;’“?/]+$/, "Invalid password format"),
});

const EditUserProfile = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);

  const initialValues = {
    name: user.name || "",
    email: user.email || "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(updateUserSchema),
  });

  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");

  const handleTogglePassword = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const onSubmit = (values) => {
    let formData = new FormData();
    formData.set("name", values.name);
    formData.set("email", values.email);
    if (values.avatar) formData.set("avatar", values.avatar[0]);
    if (values.password) formData.set("password", values.password);

    dispatch(updateUser(values));
    console.log(JSON.stringify(values));
    reset();
    onClose();
  };

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          X
        </button>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.wrap}>
            <p className={css.title}>Edit profile</p>
          </div>
          <div className={css.wrap}>
            <input
              className={theme === "violet" ? css.inputViolet : css.input}
              type="text"
              name="name"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && (
              <p className={theme === "violet" ? css.errorViolet : css.error}>
                {errors.name.message}
              </p>
            )}
          </div>
          <div className={css.wrap}>
            <input
              className={theme === "violet" ? css.inputViolet : css.input}
              type="email"
              name="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className={theme === "violet" ? css.errorViolet : css.error}>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className={css.wrap}>
            <div className={css.passwordInputWrapper}>
              <input
                className={theme === "violet" ? css.inputViolet : css.input}
                type={type}
                name="password"
                placeholder="Change password"
                {...register("password")}
              />
              <Icon
                icon={icon}
                size={18}
                className={css.icon}
                onClick={handleTogglePassword}
              />
            </div>
            {errors.password && (
              <p className={theme === "violet" ? css.errorViolet : css.error}>
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            className={theme === "violet" ? css.btnViolet : css.btn}
            type="submit"
            disabled={isSubmitting}
          >
            <div className={css.wrap}>
              <span>Send</span>
              {isSubmitting && <Loader />}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserProfile;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon2 from "../Icon/Icon.jsx";
import { Icon } from "react-icons-kit";
import { eye, eyeOff } from "react-icons-kit/feather";
import Loader from "../Loader/Loader.jsx";
import clsx from "clsx";
import {
  selectUser,
  selectTheme,
} from "../../redux/features/auth/selectors.js";
import {
  updateUser,
  editUserAvatar,
} from "../../redux/features/user/operations.js";
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
  const themeType = useSelector(selectTheme);

  const initialValues = {
    name: user.name || "",
    email: user.email || "",
    password: "",
    photo: null,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(updateUserSchema),
  });

  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");
  const [preview, setPreview] = useState(user.photo || "/img/unknown@2x.png");

  const handleTogglePassword = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("avatar", e.target.files);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (values, file) => {
    let formData = new FormData();
    formData.set("name", values.name);
    formData.set("email", values.email);
    if (values.password) formData.set("password", values.password);

    dispatch(updateUser(values));
    console.log(JSON.stringify(values));

    dispatch(editUserAvatar(file));

    reset();
    onClose();
  };

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={clsx(css.btnClose, css[themeType])}
          type="button"
          onClick={onClose}
        >
          <Icon2
            className={clsx(css.btnCloseIcon, css[themeType])}
            width={18}
            height={18}
            id={"icon-x-close_modal"}
          />
        </button>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.wrap}>
            <p className={css.title}>Edit profile</p>
          </div>
          <div className={css.avatarWrapper}>
            <img className={css.avatar} src={preview} alt="User Avatar" />
            <input
              type="file"
              id="avatar"
              accept="image/*"
              style={{ display: "none" }}
              {...register("avatar")}
              onChange={handleAvatarChange}
            />
            <label htmlFor="avatar" className={css.btnEditPhoto}>
              <Icon2 id={"icon-plus_board"} width={10} height={10} />
            </label>
          </div>
          <div className={css.wrap}>
            <input
              className={css.input}
              type="text"
              name="name"
              placeholder="Enter your name"
              {...register("name")}
            />
            {errors.name && <p className={css.error}>{errors.name.message}</p>}
          </div>
          <div className={css.wrap}>
            <input
              className={css.input}
              type="email"
              name="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={css.wrap}>
            <div className={css.passwordInputWrapper}>
              <input
                className={css.input}
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
              <p className={css.error}>{errors.password.message}</p>
            )}
          </div>
          <button className={css.btn} type="submit" disabled={isSubmitting}>
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

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "react-icons-kit";
import { eye, eyeOff } from "react-icons-kit/feather";
import Loader from "../Loader/Loader.jsx";
import clsx from "clsx";
import {
  selectUser,
  selectTheme,
} from "../../redux/features/auth/selectors.js";
import {
  editUserAvatar,
  updateUser,
} from "../../redux/features/user/operations.js";
import css from "./EditUserProfile.module.css";
import { object, string } from "yup";
import { selectUserPhoto } from "../../redux/features/user/selectors.js";

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
    .min(6, "Minimum 6 characters")
    .max(32, "Maximum 32 characters")
    .matches(/^[\w\-!@#$%^&*()+,.:;’“?/]+$/, "Invalid password format"),
});

const EditUserProfile = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userPhoto = useSelector(selectUserPhoto);
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
  const [preview, setPreview] = useState(userPhoto || "/img/unknown@2x.png");

  const handleTogglePassword = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
    setIcon((prevIcon) => (prevIcon === eyeOff ? eye : eyeOff));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setValue("photo", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);

      console.log("Selected file:", file);
    }
  };

  const onSubmit = (data) => {
    const { photo, ...otherData } = data;
    console.log(photo);

    console.log("Form Data:", JSON.stringify(otherData));

    if (photo) {
      console.log("Photo File:", photo);
    }

    const formData = new FormData();
    formData.set("name", data.name);
    formData.set("email", data.email);
    if (data.password) formData.set("password", data.password);
    formData.append("avatar", photo);

    dispatch(editUserAvatar(formData));

    dispatch(updateUser(otherData));
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
          {/* Add your close icon here */}
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
              {...register("photo")}
              onChange={handleAvatarChange}
            />
            <label htmlFor="avatar" className={css.btnEditPhoto}>
              {/* Add your photo edit icon here */}
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
              {/* <Icon
                icon={icon}
                size={18}
                className={css.icon}
                onClick={handleTogglePassword}
              /> */}
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

import Avatar from "../UserAvatar/UserAvatar.jsx";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import {
  selectTheme,
  selectUser,
} from "../../redux/features/auth/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import Close from "../UserForm/Close/Close.jsx";
import Open from "../UserForm/Open/Open.jsx";
import Loader from "../Loader/Loader.jsx";
import Modal from "../ModalContainer/ModalContainer.jsx";
import { updateUser } from "../../redux/features/user/operations.js";
import { useState } from "react";

import styles from "./EditUserProfile.module.css";

const updateUserSchema = object({
  name: string()
    .required("the field cannot be empty")
    .min(2, "minimum 2 characters")
    .max(32, "maximum 32 characters")
    .test(
      "only-allowed-chars",
      "Must contain: only Latin, numbers, special characters",
      (value) => !value || /^[\w !@#$%^&*()+,.:;’“?\-/]+$/.test(value)
    )
    .matches(/^[\w !@#$%^&*()+,.:;’“?\-/]+$/, "Invalid name format"),
  email: string()
    .required("the field cannot be empty")
    .email()

    .matches(/^[a-z0-9 .]+@[a-z]+\.[a-z]{2,3}$/i, "Invalid email format"),

  password: string()
    .min(8, "minimum 8 characters")
    .max(64, "maximum 64 characters")
    .test(
      "no-spaces",
      "Invalid format: without spaces",
      (value) => !value || !/\s/.test(value)
    )
    .test(
      "only-allowed-chars",
      "Must contain: only Latin, numbers, special characters",
      (value) => !value || /^[\w\-!@#$%^&*()+,.:;’“?/]+$/.test(value)
    )
    .matches(/^[\w\-!@#$%^&*()+,.:;’“?/]+$/, "Invalid password format"),
});

export const EditUserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((state) => !state);

  const initialValues = {
    avatar: null,
    name: user.name,
    email: user.email,
    password: "",
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState(<Close />);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setPasswordIcon(!passwordShown ? <Open /> : <Close />);
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => (
          <p className={theme === "violet" ? styles.errorViolet : styles.error}>
            {message}
          </p>
        )}
      />
    );
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    let formData = new FormData();

    formData.set("name", values.name);
    formData.set("email", values.email);

    if (values.avatar) formData.set("avatar", values.avatar);

    if (values.password) formData.set("password", values.password);

    try {
      await dispatch(updateUser(formData));
      resetForm();
      setIsModalOpen(false);
    } catch (error) {
      throw error.message;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Avatar size={32} onClick={toggleModal} />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <Formik
            autoComplete="off"
            initialValues={initialValues}
            validationSchema={updateUserSchema}
            onSubmit={handleSubmit}
          >
            {({ errors }) => (
              <Form className={styles.form}>
                <div className={styles.wrap}>
                  <p className={styles.title}>Edit profile</p>
                </div>
                <div className={styles.wrap}>
                  <Field
                    className={
                      theme === "violet" ? styles.inputViolet : styles.input
                    }
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                  {errors.name && <FormError name="name" />}
                </div>
                <div className={styles.wrap}>
                  <Field
                    className={
                      theme === "violet" ? styles.inputViolet : styles.input
                    }
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  {errors.email && <FormError name="email" />}
                </div>
                <div className={styles.wrap}>
                  <Field
                    className={
                      theme === "violet" ? styles.inputViolet : styles.input
                    }
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    placeholder="Change password"
                  />
                  <span
                    className={styles.open}
                    role="button"
                    tabIndex="0"
                    onClick={togglePassword}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") togglePassword();
                    }}
                    aria-label="Toggle password visibility"
                  >
                    {passwordIcon}
                  </span>
                  {errors.password && <FormError name="password" />}
                </div>
                <button
                  className={theme === "violet" ? styles.btnViolet : styles.btn}
                  type="submit"
                >
                  <div className={styles.wrap}>
                    <span>Send</span>
                    <Loader />
                  </div>
                </button>
              </Form>
            )}
          </Formik>
        </Modal>
      )}
    </div>
  );
};

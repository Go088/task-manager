import css from "./NeedHelpModal.module.css";
import * as Yup from "yup";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from "../../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { helpComment } from "../../../redux/features/modals/needHelpModal/operations";
import { selectTheme } from "../../../redux/features/theme/selectors";
import Modal from "react-modal";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("You should enter a valid email")
    .trim()
    .required("Required"),
  message: Yup.string().min(3, "Too short!").trim().required("Required"),
});

export const NeedHelpModal = ({ isOpen, onRequestClose }) => {
  const themeType = useSelector(selectTheme);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      message: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    dispatch(helpComment(data));
    reset();
    onRequestClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={clsx(css.helpModal, css[themeType])}
      overlayClassName={css.Overlay}
      contentLabel="Modal window for writing a message for help"
    >
      <form
        className={clsx(css.helpForm, css[themeType])}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={clsx(css.helpModalTitle, css[themeType])}>Need help</h2>
        <button
          className={clsx(css.closeButton, css[themeType])}
          onClick={onRequestClose}
        >
          <Icon
            className={clsx(css.helpModalIcon, css[themeType])}
            id="icon-x-close_modal"
            width="18"
            height="18"
          />
        </button>
        <div>
          <div className={css.wrapper}>
            <input
              className={clsx(
                css.helpFormInput,
                errors.email && css.helpFormInputError,
                css[themeType]
              )}
              {...register("email")}
              type="email"
              placeholder="Email address"
            />
            {errors.email && (
              <p className={clsx(css.error, css[themeType])} role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className={css.wrapper}>
            <textarea
              className={clsx(css.helpFormTextarea, css[themeType])}
              {...register("message")}
              type="text"
              placeholder="Comment"
            />
            {errors.message && (
              <p
                className={clsx(css.errorTextarea, css[themeType])}
                role="alert"
              >
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
        <button
          className={clsx(css.helpModalButton, css[themeType])}
          type="submit"
        >
          Send
        </button>
      </form>
    </Modal>
  );
};

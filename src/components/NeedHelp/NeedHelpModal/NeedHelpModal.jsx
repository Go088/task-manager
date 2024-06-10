import css from "./NeedHelpModal.module.css";
import * as Yup from "yup";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from "../../Icon/Icon";
//import { useDispatch, useSelector } from "react-redux";
//import { selectIsNeedHelpModalOpen } from "../../../redux/features/modals/selectors";
//import { openModal } from "../../../redux/features/modals/needHelpModalSlice";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("You should enter a valid email")
    .trim()
    .required("Required"),
  comment: Yup.string().min(3, "Too short!").trim().required("Required"),
});

export const NeedHelpModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      comment: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={clsx(css.helpModal, css.isOpen, css.dark)}>
      <h2 className={clsx(css.helpModalTitle, css.dark)}>Need help</h2>

      <Icon id="" className={clsx(css.helpModalIcon, css.dark)} width="18" height="18"/>
  

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className={clsx(css.helpFormInput, css.dark)}
            {...register("email")}
            type="email"
            placeholder="Email address"
          />
          {errors.email && (
            <p className={clsx(css.error, css.dark)} role="alert">
              {errors.email.message}
            </p>
          )}
          <textarea
            className={clsx(css.helpFormTextarea, css.dark)}
            {...register("comment")}
            type="text"
            placeholder="Comment"
          />
          {errors.comment && (
            <p className={clsx(css.error, css.dark)} role="alert">
              {errors.comment.message}
            </p>
          )}
        </div>
        <button className={clsx(css.helpModalButton, css.dark)} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

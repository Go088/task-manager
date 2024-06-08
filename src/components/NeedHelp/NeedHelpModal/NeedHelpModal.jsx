import css from "./NeedHelpModal.module.css";
import * as Yup from "yup";
import clsx from "clsx";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectIsNeedHelpModalOpen } from "../../../redux/features/modals/selectors";
import { openModal } from "../../../redux/features/modals/needHelpModalSlice";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  comment: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

export const NeedHelpModal = () => {
  const isModalOpen = useSelector(selectIsNeedHelpModalOpen);
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <div className={clsx(css.helpModal, isModalOpen && css.isOpen, css.dark)}>
      <h2 className={clsx(css.helpModalTitle, css.dark)}>Need help</h2>

      <svg
        onClick={() => dispatch(dispatch(openModal(false)))}
        className={clsx(css.helpModalIcon, css.dark)}
        width="18"
        height="18"
      >
        <use href="/src/sprite.svg#icon-help-circle"></use>
      </svg>

      <Formik
        initialValues={{
          email: "",
          comment: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <Field
              className={clsx(css.helpFormInput, css.dark)}
              name="email"
              type="email"
              placeholder="Email address"
            />
            <Field
              className={clsx(css.helpFormTextarea, css.dark)}
              name="comment"
              type="text"
              as="textarea"
              placeholder="Comment"
            />
          </div>
          <button
            onClick={() => dispatch(dispatch(openModal(false)))}
            className={clsx(css.helpModalButton, css.dark)}
            type="submit"
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

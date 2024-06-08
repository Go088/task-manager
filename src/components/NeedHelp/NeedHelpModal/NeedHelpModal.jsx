import css from "./NeedHelpModal.module.css";
import * as Yup from "yup";
import clsx from "clsx";
import { Formik, Form, Field } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  comment: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

export const NeedHelpModal = () => {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <div className={clsx(css.helpModal, css.isOpen, css.violet)}>
      <h2 className={clsx(css.helpModalTitle, css.violet)}>Need help</h2>

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
              className={clsx(css.helpFormInput, css.violet)}
              name="email"
              type="email"
              placeholder="Email address"
            />
            <Field
              className={clsx(css.helpFormTextarea, css.violet)}
              name="comment"
              type="text"
              as="textarea"
              placeholder="Comment"
            />
          </div>
          <button
            className={clsx(css.helpModalButton, css.violet)}
            type="submit"
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

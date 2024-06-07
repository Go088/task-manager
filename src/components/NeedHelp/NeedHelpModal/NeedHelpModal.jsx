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
    <div className={css.helpModal}>
      <h2 className={css.helpModalTitle}>Need help</h2>

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
            <Field name="email" type="email" placeholder="Email address" />
            <Field
              name="comment"
              type="text"
              as="textarea"
              placeholder="Comment"
            />
          </div>
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

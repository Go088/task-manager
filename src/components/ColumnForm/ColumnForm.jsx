import css from "./ColumnForm.module.css"
import clsx from "clsx";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from "react-modal";
import { useForm } from "react-hook-form";
import Icon from "../Icon/Icon";

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(2, "Title should be at least 2 characters")
    .trim(),
});

export default function ColumnForm({ isOpen, onRequestClose }) {
  const themeType = "dark";
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
      contentLabel="Modal window for create a new column"
    >
      <form
        className={clsx(css.form, css[themeType])}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className={clsx(css.title, css[themeType])}>Add column</h3>
        <h4 className={css.visuallyHidden}>Title</h4>
        <input
          className={clsx(css.input, css[themeType])}
          type="text"
          placeholder="Title"
          {...register("title", {
            required: "This is required",
            min: { value: 2, message: "Min length is 2" },
          })}
        />
        <p className={clsx(css.error, css[themeType])}>
          {errors.title?.message}
        </p>
        <button className={clsx(css.btn, css[themeType])} type="submit">
          <div className={clsx(css.btnWrapIcon, css[themeType])}>
            <Icon
              className={clsx(css.btnIcon, css[themeType])}
              width={14}
              height={14}
              id={"icon-plus_card_modal"}
            />
          </div>
          <span>Add</span>
        </button>
      </form>
      <button
        className={clsx(css.btnClose, css[themeType])}
        type="button"
        onClick={onRequestClose}
      >
        <Icon
          className={clsx(css.btnCloseIcon, css[themeType])}
          width={18}
          height={18}
          id={"icon-x-close_modal"}
        />
      </button>
    </Modal>
  );
}

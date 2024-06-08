import { useId } from "react";

import sprite from "../../sprite.svg";
import css from "./BoardForm.module.css";
import clsx from "clsx";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

import Modal from "react-modal";
import { useForm } from "react-hook-form";

const icons = [
  {
    value: "project",
    spriteId: "icon-help-circle",
  },
  {
    value: "star",
    spriteId: "icon-star",
  },
  {
    value: "wheel",
    spriteId: "icon-wheel",
  },
  {
    value: "puzzle",
    spriteId: "icon-puzzle",
  },
  {
    value: "cube",
    spriteId: "icon-cube",
  },
  {
    value: " lightning",
    spriteId: "icon-lightning",
  },
  {
    value: " colors",
    spriteId: "icon-colors",
  },
  {
    value: "hexagon",
    spriteId: "icon-hexagon",
  },
];

const backgrounds = [
  {
    value: "default",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "flowers",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
  {
    value: "stars",
    srcSet: "/img/cactus.png 1x, /img/cactus@2x.png 2x",
    src: "/img/cactus.png",
    alt: "Smiling cactus",
  },
];

// const schema = yup.object().shape({
//   title: yup
//     .string()
//     .required("Title is required")
//     .min(2, "Title should be at least 2 characters")
//     .matches(/^\S*$/, "Title should not contain spaces"),
// });

export default function BoardForm({ isOpen, onRequestClose }) {
  const themeType = "dark";
  const iconFieldId = useId();
  const backgroundFieldId = useId();
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({
    // resolver: yupResolver(schema),

    defaultValues: {
      title: "",
      icons: "project",
      background: "default",
    },
  });

  const onSubmit = (data) => {
    console.log({ ...data, title: data.title.trim() });
    reset();
  };

  console.log(errors);

  return (
    <Modal
      isOpen={isOpen}
      // onRequestClose={onRequestClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
      contentLabel="Modal window for create a new board"
    >
      <form
        className={clsx(css.form, css[themeType])}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className={clsx(css.title, css[themeType])}>New board</h3>
        <h4 className={css.visuallyHidden}>Title</h4>
        <input
          className={clsx(css.input, css[themeType])}
          type="text"
          placeholder="Title"
          {...register("title", {
            required: "This is required",
            min: { value: 1, message: "Min length is 1" },
          })}
        />
        <p className={clsx(css.error, css[themeType])}>
          {errors.title?.message}
        </p>
        <h4 className={clsx(css.subtitle, css[themeType])}>Icons</h4>
        <ul className={css.iconList}>
          {icons.map((icon) => (
            <li className={css.iconItem} key={icons.indexOf(icon)}>
              <input
                className={clsx(css.radioIcon, css.visuallyHidden)}
                id={`${iconFieldId}${icons.indexOf(icon)}`}
                {...register("icons", { required: true })}
                type="radio"
                value={icon.value}
              />
              <label
                className={css.iconLabel}
                htmlFor={`${iconFieldId}${icons.indexOf(icon)}`}
              >
                <svg
                  className={clsx(css.iconSvg, css[themeType])}
                  width="18"
                  height="18"
                >
                  <use xlinkHref={`${sprite}#${icon.spriteId}`}></use>
                </svg>
              </label>
            </li>
          ))}
        </ul>
        <h4 className={clsx(css.subtitle, css[themeType])}>Background</h4>
        <ul className={css.backgroundList}>
          {backgrounds.map((background) => (
            <li
              className={clsx(css.backgroundItem, css[themeType])}
              key={backgrounds.indexOf(background)}
            >
              <input
                className={clsx(css.radioBackground, css.visuallyHidden)}
                id={`${backgroundFieldId}${backgrounds.indexOf(background)}`}
                {...register("background", { required: true })}
                type="radio"
                value={background.value}
              />
              <label
                className={css.backgroundLabel}
                htmlFor={`${backgroundFieldId}${backgrounds.indexOf(
                  background
                )}`}
              >
                <img
                  className={clsx(css.img, css[themeType])}
                  srcSet={`${background.srcSet}`}
                  src={`${background.src}`}
                  alt={`${background.alt}`}
                />
              </label>
            </li>
          ))}
        </ul>
        <button className={clsx(css.btn, css[themeType])} type="submit">
          <div className={clsx(css.btnWrapIcon, css[themeType])}>
            <svg
              className={clsx(css.btnIcon, css[themeType])}
              width="14"
              height="14"
            >
              <use xlinkHref={`${sprite}#icon-wheel`}></use>
            </svg>
          </div>
          <span> Create</span>
        </button>
      </form>
      <button className={css.btnClose} type="button" onClick={onRequestClose}>
        <svg
          className={clsx(css.btnCloseIcon, css[themeType])}
          width="18"
          height="18"
        >
          <use xlinkHref={`${sprite}#icon-wheel`}></use>
        </svg>
      </button>
    </Modal>
  );
}

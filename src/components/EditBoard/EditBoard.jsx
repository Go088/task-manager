import { useId } from "react";
import clsx from "clsx";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from "react-modal";
import { useForm } from "react-hook-form";
import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import css from "./EditBoard.module.css";
import { editBoard } from "../../redux/features/boards/operations";
import { selectTheme } from "../../redux/features/theme/selectors";

const icons = [
  {
    value: "project",
    spriteId: "icon-project",
  },
  {
    value: "star",
    spriteId: "icon-star",
  },
  {
    value: "loading",
    spriteId: "icon-loading",
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
    value: "lightning",
    spriteId: "icon-lightning",
  },
  {
    value: "colors",
    spriteId: "icon-colors",
  },
  {
    value: "hexagon",
    spriteId: "icon-hexagon",
  },
];

const backgrounds = [
  {
    value: "sakura",
    srcSet: "/img/bg/sacura.png 1x, /img/bg/sacura.png 2x",
    src: "/img/bg/3d.png",
    alt: "sakura",
  },
  {
    value: "nightMoutains",
    srcSet: "/img/bg/nightMoutains.png 1x, /img/bg/nightMoutains.png 2x",
    src: "/img/bg/nightMoutains.png",
    alt: "3d sphere",
  },
  {
    value: "greatTree",
    srcSet: "/img/bg/greatTree.png 1x, /img/bg/greatTree.png 2x",
    src: "/img/bg/greatTree.png",
    alt: "Great tree",
  },
  {
    value: "newMoon",
    srcSet: "/img/bg/newMoon.png 1x, /img/bg/newMoon.png 2x",
    src: "/img/bg/newMoon.png",
    alt: "New moon",
  },
  {
    value: "leaves",
    srcSet: "/img/bg/leaves.png 1x, /img/bg/leaves.png 2x",
    src: "/img/bg/leaves.png",
    alt: "Leaves",
  },
  {
    value: "clouds",
    srcSet: "/img/bg/clouds.png 1x, /img/bg/clouds.png 2x",
    src: "/img/bg/clouds.png",
    alt: "Clouds",
  },
  {
    value: "seaSunset",
    srcSet: "/img/bg/seaSunset.png 1x, /img/bg/seaSunset.png 2x",
    src: "/img/bg/seaSunset.png",
    alt: "Sea sunset",
  },
  {
    value: "3d",
    srcSet: "/img/bg/3d.png 1x, /img/bg/3d.png 2x",
    src: "/img/bg/3d.png",
    alt: "3d sphere",
  },
  {
    value: "mars",
    srcSet: "/img/bg/mars.png 1x, /img/bg/mars.png 2x",
    src: "/img/bg/mars.png",
    alt: "Mars",
  },
  {
    value: "jacht",
    srcSet: "/img/bg/jacht.png 1x, /img/bg/jacht.png 2x",
    src: "/img/bg/jacht.png",
    alt: "Jacht",
  },
  {
    value: "aerostatViev",
    srcSet: "/img/bg/aerostatViev.png 1x, /img/bg/aerostatViev.png 2x",
    src: "/img/bg/aerostatViev.png",
    alt: "AerostatViev",
  },
  {
    value: "canyon",
    srcSet: "/img/bg/canyon.png 1x, /img/bg/canyon.png 2x",
    src: "/img/bg/canyon.png",
    alt: "Canyon",
  },
  {
    value: "seabed",
    srcSet: "/img/bg/seabed.png 1x, /img/bg/seabed.png 2x",
    src: "/img/bg/seabed.png",
    alt: "Seabed",
  },
  {
    value: "aerostat",
    srcSet: "/img/bg/aerostat.png 1x, /img/bg/aerostat.png 2x",
    src: "/img/bg/aerostat.png",
    alt: "Aerostat",
  },
  {
    value: "starCamping",
    srcSet: "/img/bg/starCamping.png 1x, /img/bg/starCamping.png 2x",
    src: "/img/bg/starCamping.png",
    alt: "Star camping",
  },
];

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(2, "Title should be at least 2 characters")
    .trim(),
});

export default function EditBoard({
  isOpen,
  onRequestClose,
  _id,
  background,
  title,
  icon,
}) {
  const themeType = useSelector(selectTheme);

  const iconFieldId = useId();
  const backgroundFieldId = useId();
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      title,
      icon,
      background,
    },
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(editBoard({ _id, data }));
    reset();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
      contentLabel="Modal window for edit board"
    >
      <form
        className={clsx(css.form, css[themeType])}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className={clsx(css.title, css[themeType])}>Edit board</h3>
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
        <h4 className={clsx(css.subtitle, css[themeType])}>Icons</h4>
        <ul className={css.iconList}>
          {icons.map((icon) => (
            <li className={css.iconItem} key={icons.indexOf(icon)}>
              <input
                className={clsx(css.radioIcon, css.visuallyHidden)}
                id={`${iconFieldId}${icons.indexOf(icon)}`}
                {...register("icon", { required: true })}
                type="radio"
                value={icon.value}
              />
              <label
                className={css.iconLabel}
                htmlFor={`${iconFieldId}${icons.indexOf(icon)}`}
              >
                <Icon
                  className={clsx(css.iconSvg, css[themeType])}
                  width={18}
                  height={18}
                  id={icon.spriteId}
                />
              </label>
            </li>
          ))}
        </ul>
        <h4 className={clsx(css.subtitle, css[themeType])}>Background</h4>
        <ul className={css.backgroundList}>
          <li className={clsx(css.backgroundItem, css[themeType])}>
            <input
              className={clsx(css.radioBackground, css.visuallyHidden)}
              id={backgroundFieldId}
              {...register("background", { required: true })}
              type="radio"
              value={`default`}
            />
            <label className={css.backgroundLabel} htmlFor={backgroundFieldId}>
              <div className={clsx(css.backgroundWrapIcon, css[themeType])}>
                <Icon
                  className={clsx(css.backgroundIcon, css[themeType])}
                  width={16}
                  height={16}
                  id={"icon-new_board_bg"}
                />
              </div>
            </label>
          </li>
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
            <Icon
              className={clsx(css.btnIcon, css[themeType])}
              width={14}
              height={14}
              id={"icon-plus_card_modal"}
            />
          </div>
          <span> Edit</span>
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

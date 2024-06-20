import css from "./Board.module.css";
import Icon from "../Icon/Icon";
import clsx from "clsx";

import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/features/theme/selectors";
import { useParams } from "react-router-dom";

export const Board = ({ _id, title, icon, setEditIsOpen, setDeleteIsOpen }) => {
  const { id: boardName } = useParams();

  const themeType = useSelector(selectTheme);
  const isActiveClass = boardName === _id ? "isActive" : "";

  const titleSVG = `icon-${icon}`;

  const handleOpen = () => setEditIsOpen(true);
  const handleDelete = () => setDeleteIsOpen(true);

  return (
    <div className={clsx(css.wrapper, css[isActiveClass], css[themeType])}>
      <div className={css.infoWrapper}>
        <Icon
          id={titleSVG}
          width="18"
          height="18"
          className={clsx(css.iconSvg, css[isActiveClass], css[themeType])}
        />
        <h2 className={clsx(css.text, css[isActiveClass], css[themeType])}>
          {title}
        </h2>
      </div>
      <div className={css.btnList}>
        <button type="button" className={css.button} onClick={handleOpen}>
          <Icon
            id="icon-pencil"
            width="16"
            height="16"
            className={clsx(css.LogoSVG, css[isActiveClass], css[themeType])}
          />
        </button>
        <button type="button" className={css.button} onClick={handleDelete}>
          <Icon
            id="icon-trash"
            width="16"
            height="16"
            className={clsx(css.LogoSVG, css[isActiveClass], css[themeType])}
          />
        </button>
        <div
          className={clsx(css.boxModel, css[isActiveClass], css[themeType])}
        ></div>
      </div>
    </div>
  );
};

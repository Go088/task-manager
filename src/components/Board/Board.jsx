import { useDispatch } from "react-redux";
import { deleteBoard } from "../../redux/features/boards/operations";
import css from "./Board.module.css";
import Icon from "../Icon/Icon";
import clsx from "clsx";
export const Board = ({ id, title, icons }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteBoard(id));
  const handlEdit = () => dispatch(deleteBoard(id));
  //const titleSVG = `icon-${icons.trim()}`;

  const themeType = "dark";

  return (
    <div className={clsx(css.wrapper, css[themeType], css.isActive)}>
      <div className={css.infoWrapper}>
        <Icon
          id={`icon-${icons}`}
          width="18"
          height="18"
          className={css.titleSVG}
        />
        <h2 className={clsx(css.text, css[themeType], css.isActive)}>
          {title}
        </h2>
      </div>
      <div className={css.btnList}>
        <button type="button" className={css.button} onClick={handleDelete}>
          <Icon
            id="icon-pencil"
            width="16"
            height="16"
            className={clsx(css.LogoSVG, css.isActive)}
          />
        </button>
        <button type="button" className={clsx(css.button)} onClick={handlEdit}>
          <Icon
            id="icon-trash"
            width="16"
            height="16"
            className={clsx(css.LogoSVG, css.isActive)}
          />
        </button>
        <div className={clsx(css.boxModel, css[themeType], css.isActive)}></div>
      </div>
    </div>
  );
};

import { useDispatch } from "react-redux";
import { deleteBoard } from "../../redux/features/boards/operations";
import css from "./Board.module.css";
import Icon from "../Icon/Icon";
import clsx from "clsx";
export const Board = ({ id, title, icons }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteBoard(id));
  const handlEdit = () => dispatch(deleteBoard(id));
  const titleSVG = `icon-${icons.trim()}`;

  return (
    <div className={css.wrapper}>
      <Icon id={titleSVG} width="18" height="18" className={css.titleSVG} />
      <h2 className={clsx(css.text)}>{title}</h2>
      <div className={css.btnList}>
        <button type="button" className={css.button} onClick={handleDelete}>
          <Icon
            id="icon-pencil"
            width="16"
            height="16"
            className={css.LogoSVG}
          />
        </button>
        <button type="button" className={css.button} onClick={handlEdit}>
          <Icon
            id="icon-trash"
            width="16"
            height="16"
            className={css.LogoSVG}
          />
        </button>
      </div>
    </div>
  );
};

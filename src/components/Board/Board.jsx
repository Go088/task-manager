import { useDispatch } from "react-redux";
import { deleteBoard } from "../../redux/features/boards/operations";
import css from "./Board.module.css";
import Icon from "../Icon/Icon";
import clsx from "clsx";
import EditBoard from "../EditBoard/EditBoard";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/features/theme/selectors";

export const Board = ({ _id, title, icon, background }) => {
  const themeType = useSelector(selectTheme);
  const isActiveClass = "isActive";

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteBoard(_id));
  const handlEdit = () => dispatch(EditBoard({ _id }));
  const titleSVG = `icon-${icon}`;
  const [editIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  });

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleOpen = () => setIsOpen(true);

  return (
    <div className={clsx(css.wrapper, css[isActiveClass], css[themeType])}>
      <div className={css.infoWrapper}>
        <Icon
          id={titleSVG}
          width="18"
          height="18"
          className={clsx(css.iconSvg, css[isActiveClass], css[themeType])}
        />
        {/* <h2 className={(isActive) => {
                    return clsx(css.text, css[themeType], isActive && css[isActiveClass])
                  }}>
          {title}
        </h2> */}

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
      {editIsOpen && (
        <EditBoard
          isOpen={editIsOpen}
          onRequestClose={closeModal}
          onclick={handlEdit}
          _id={_id}
          background={background}
          title={title}
          icon={icon}
        />
      )}
    </div>
  );
};

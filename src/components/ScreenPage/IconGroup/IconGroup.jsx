import Icon from "../../Icon/Icon";
import css from "./IconGroup.module.css";
import clsx from "clsx";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import EditCard from "../../EditCard/EditCard";
import { deleteCard } from "../../../redux/features/boardss/operations";

const IconGroup = ({ theme, isBellVisible, card, card: { _id } }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteCard(_id));
  const handleOpen = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  const whiteTheme = theme === "dark" ? "" : "white";
  return (
    <>
      {" "}
      <ul className={css.iconList}>
        {isBellVisible && (
          <li className={css.li}>
            {/* <button className={css.buttonBell}> */}
            <Icon
              className={clsx(css.iconBell, css[theme], css[whiteTheme])}
              width="16px"
              height="16px"
              id="icon-bell"
            />
            {/* </button> */}
          </li>
        )}
        <li className={css.li}>
          <button className={css.button}>
            <Icon
              className={clsx(css.icon, css[whiteTheme], css[theme])}
              width="16px"
              height="16px"
              id="icon-arrow-circle-broken-right"
            />
          </button>
        </li>
        <li className={css.li}>
          <button
            className={css.button}
            onClick={handleOpen}
            type="button"
            aria-label="Edit the card"
          >
            <Icon
              className={clsx(css.icon, css[whiteTheme], css[theme])}
              width="16px"
              height="16px"
              id="icon-pencil"
            />
          </button>
        </li>
        <li className={css.li}>
          <button
            className={css.button}
            onClick={handleDelete}
            type="button"
            aria-label="Delete the card"
          >
            <Icon
              className={clsx(css.icon, css[whiteTheme], css[theme])}
              width="16px"
              height="16px"
              id="icon-trash"
            />
          </button>
        </li>
      </ul>
      {modalIsOpen && (
        <EditCard
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          card={card}
        />
      )}
    </>
  );
};
export default IconGroup;

import clsx from "clsx";
import Icon from "../../Icon/Icon";
import css from "./AddCardButton.module.css";

import { useEffect, useState } from "react";
import Modal from "react-modal";
import CardForm from "../../CardForm/CardForm";

const AddCardButton = ({ theme , column}) => {
  // const whiteTheme = theme === "dark" ? "" : "white";

  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleOpen = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={clsx(css.button, css[theme])}
        onClick={handleOpen}
      >
        <span className={clsx(css.span, css[theme])}>
          <Icon
            className={clsx(css.iconPlus, css[theme])}
            width="14px"
            height="14px"
            id="icon-plus_card_modal"
          />
        </span>
        Add another card
      </button>
      {modalIsOpen && (
        <CardForm isOpen={modalIsOpen} onRequestClose={closeModal} column={column} />
      )}
    </>
  );
};
export default AddCardButton;

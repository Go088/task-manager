import Icon from "../../Icon/Icon";
import css from "./AddAnotherButton.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import ColumnForm from "../../ColumnForm/ColumnForm";


const AddAnotherButton = ({ theme }) => {

  const whiteTheme = theme === "dark" ? "" : "white";
  const [modalIsOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);
  const handleOpen = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
  };



  return (
<>    <button className={clsx(css.button, css[whiteTheme])}
        onClick={handleOpen}
        type="button"
        aria-label="Create a new column">
      <span className={clsx(css.iconSpan, css[theme])}>
        <Icon
          className={clsx(css.icon, css[whiteTheme])}
          width="14px"
          height="14px"
          id="icon-plus_card_modal"
        />
      </span>
      Add another column
    </button>
          {modalIsOpen && (
        <ColumnForm isOpen={modalIsOpen} onRequestClose={closeModal} />
      )}</>
  );
};
export default AddAnotherButton;

import css from "./Column.module.css";
import Icon from "../../Icon/Icon";

import Card from "../Card/Card";
import AddCardButton from "../AddCardButton/AddCardButton";
import CustomScrollBar from "../CustemScrollBar/CustomScrollBar";
import clsx from "clsx";

import { selectAllCards } from "../../../redux/features/boardss/selectors";
import { useSelector, useDispatch } from "react-redux";
import useMedia from "../../../hooks/useMediaQuery";
import { deleteColumn } from "../../../redux/features/boardss/operations";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import EditColumn from "../../EditColumn/EditColumn";
import { selectFilter } from "../../../redux/features/filter/selectors";

const Column = ({ theme, column }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleOpen = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  const id = column._id;

  const handleDelete = () => {
    console.log(column);
    dispatch(deleteColumn(id));
  };
  const filter = useSelector(selectFilter);
  const allCards = useSelector(selectAllCards);
  const cardsFiltred = allCards.filter((c) => {
    if (filter === "all") return true;
    if (c?.priority === filter) return true;
    return false;
  });

  const getColumnCards = () => {
    if (cardsFiltred) {
      return cardsFiltred.filter((c) => c?.owner === column._id);
    }
    return [];
  };

  const cards = getColumnCards();

  const isCards = cards.length > 0;
  const quantityOfcards = useMedia().isTablet ? 4 : 3;
  const isVisibleScrol = cards.length > quantityOfcards;

  const whiteTheme = theme === "dark" ? "" : "white";
  return (
    <>
      <div className={css.columnContainer}>
        <div className={clsx(css.columnNameContainer, css[whiteTheme])}>
          <h3 className={clsx(css.columNameText, css[whiteTheme])}>
            {column?.title}
          </h3>
          <div className={css.iconWrapper}>
            <button type="button" className={css.button} onClick={handleOpen}>
              <Icon
                className={clsx(css.iconPensil, css[whiteTheme], css[theme])}
                width="16px"
                height="16px"
                id="icon-pencil"
              />
            </button>
            <button type="button" className={css.button} onClick={handleDelete}>
              <Icon
                className={clsx(css.iconTrash, css[whiteTheme], css[theme])}
                width="16px"
                height="16px"
                id="icon-trash"
              />
            </button>
          </div>
        </div>
        <div className={clsx(css.cardContainer, "secondScrol")}>
          <CustomScrollBar
            className={css.scrolBar}
            theme={theme}
            isVisibal={isVisibleScrol}
          >
            <div className={css.cardWraper}>
              {isCards &&
                cards.map((card) => {
                  return <Card key={card._id} card={card} theme={theme} />;
                })}
            </div>
          </CustomScrollBar>
        </div>

        <AddCardButton theme={theme} column={column} />
      </div>
      {modalIsOpen && (
        <EditColumn
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          column={column}
        />
      )}
    </>
  );
};
export default Column;

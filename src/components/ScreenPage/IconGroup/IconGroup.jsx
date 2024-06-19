import clsx from "clsx";
import { useEffect, useState } from "react";

import Modal from "react-modal";
import { Tooltip } from "react-tooltip";

import Icon from "../../Icon/Icon";
import EditCard from "../../EditCard/EditCard";
import CardTooltip from "../CardTooltip/CardTooltip";
import CardDeleteModal from "../CardDeleteModal/CardDeleteModal";
import css from "./IconGroup.module.css";
import DeadlineTooltip from "../DeadlineTooltip/DeadlineTooltip";

const IconGroup = ({ theme, bellIconColor, card }) => {
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleOpenEdit = () => setEditIsOpen(true);
  const closeEditModal = () => {
    setEditIsOpen(false);
  };

  const handleOpenDlete = () => setDeleteIsOpen(true);
  const closeDeleteModal = () => {
    setDeleteIsOpen(false);
  };

  const whiteTheme = theme === "dark" ? "" : "white";
  return (
    <>
      <ul className={css.iconList}>
        <li className={clsx(css.li, css.margin)}>
          <a id={`not-clickable-${card._id}`}>
            <Icon
              className={clsx(css.iconBell, css[theme], css[bellIconColor])}
              width="16px"
              height="16px"
              id="icon-bell"
            />
          </a>
          <Tooltip anchorSelect={`#not-clickable-${card._id}`} clickable>
            <DeadlineTooltip />
          </Tooltip>
        </li>

        <li className={css.li}>
          <a id={`clickable-${card._id}`}>
            <button className={css.button}>
              <Icon
                className={clsx(css.icon, css[whiteTheme], css[theme])}
                width="16px"
                height="16px"
                id="icon-arrow-circle-broken-right"
              />
            </button>
          </a>
          <Tooltip anchorSelect={`#clickable-${card._id}`} clickable>
            <CardTooltip card={card} />
          </Tooltip>
        </li>
        <li className={css.li}>
          <button
            className={css.button}
            onClick={handleOpenEdit}
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
            onClick={handleOpenDlete}
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
      {editIsOpen && (
        <EditCard
          isOpen={editIsOpen}
          onRequestClose={closeEditModal}
          card={card}
        />
      )}
      {deleteIsOpen && (
        <CardDeleteModal
          isOpen={deleteIsOpen}
          onRequestClose={closeDeleteModal}
          card={card}
        />
      )}
    </>
  );
};
export default IconGroup;

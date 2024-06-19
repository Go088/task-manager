import { NavLink } from "react-router-dom";
import css from "./BordListItem.module.css";
import { Board } from "../../Board/Board";
import clsx from "clsx";
import EditBoard from "../../EditBoard/EditBoard";
import BoardDeleteModal from "./BoardDeleteModal/BoardDeleteModal";
import Modal from "react-modal";
import { useEffect, useState } from "react";


const BordListItem = ({ ...bord }) => {
  
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

  useEffect(() => {
    Modal.setAppElement("#root");
  });

  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.Active);
        }}
        to={bord._id}
      >
        <Board {...bord} setEditIsOpen={setEditIsOpen} setDeleteIsOpen={setDeleteIsOpen} />
      </NavLink>
      <EditBoard
        isOpen={editIsOpen}
        onRequestClose={closeEditModal}
        onclick={handleOpenEdit }
        _id={bord._id}
        background={bord.background}
        title={bord.title}
        icon={bord.icon}
      />
        <BoardDeleteModal
          isOpen={deleteIsOpen}
        onRequestClose={closeDeleteModal}
        onclick={handleOpenDlete  }
        _id={bord._id}
         title={bord.title}
        />
    </li>
  );
};
export default BordListItem;

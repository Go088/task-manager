import { NavLink } from "react-router-dom";
import css from "./BordListItem.module.css";
import { Board } from "../../Board/Board";
import clsx from "clsx";
import EditBoard from "../../EditBoard/EditBoard";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const BordListItem = ({ ...bord }) => {
  const dispatch = useDispatch();
  const _id = bord._id;
  const handlEdit = () => dispatch(EditBoard({ _id }));
  const [editIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.Active);
        }}
        to={bord._id}
      >
        <Board {...bord} setIsOpen={setIsOpen} />
      </NavLink>
      <EditBoard
        isOpen={editIsOpen}
        onRequestClose={closeModal}
        onclick={handlEdit}
        _id={bord._id}
        background={bord.background}
        title={bord.title}
        icon={bord.icon}
      />
    </li>
  );
};
export default BordListItem;

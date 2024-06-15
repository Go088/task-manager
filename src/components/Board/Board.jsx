import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../redux/features/boards/operations';
import css from './Board.module.css';
import Icon from '../Icon/Icon';
import { useEffect, useState } from "react";
import Modal from "react-modal";
import EditBoard from '../EdiForm/EditBoard';


export const Board = ({ _id, title ,icon}) => {
const dispatch = useDispatch();
const handleDelete = () => dispatch(deleteBoard(_id));
const handlEdit =()=>dispatch(deleteBoard(_id));
const titleSVG = `icon-${icon.trim()}` 
const [editIsOpen, setIsOpen] = useState(false);

useEffect(() => {
Modal.setAppElement("#root");
}, []);

const handleOpen = () => setIsOpen(true);

const closeModal = () => {
setIsOpen(false);
};
return (
    <div className={css.wrapper}>
    <Icon id={titleSVG} width="18" height="18" className={css.titleSVG}/>
    <h2 className={css.text}>{title}</h2>
    <div className={css.btnList}>
    <button type="button" className={css.button} onClick={handleOpen}>
    <Icon id="icon-pencil" width="16" height="16" className={css.LogoSVG}/>
    </button>
    <button type="button" className={css.button} onClick={handleDelete}>
    <Icon id="icon-trash" width="16" height="16" className={css.LogoSVG}/>
    </button>
    </div>
    {editIsOpen && (
        <EditBoard isOpen={editIsOpen} onRequestClose={closeModal}  onclick={handlEdit} _id={_id}/>
    )}
    </div>
);
};
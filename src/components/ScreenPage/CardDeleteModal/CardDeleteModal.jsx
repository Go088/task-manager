import clsx from "clsx";
import css from "./CardDeleteModal.module.css";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/features/theme/selectors";
import Icon from "../../Icon/Icon";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../../redux/features/boardss/operations";

export default function DeleteModal({
  isOpen,
  onRequestClose,
  card: { _id, title },
}) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteCard(_id));

  const themeType = useSelector(selectTheme);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={css.Modal}
        overlayClassName={css.Overlay}
        contentLabel="Modal window for delete contact"
      >
        <div className={clsx(css.wrapper, css[themeType])}>
          <Icon
            className={clsx(css.icon, css[themeType])}
            width="42px"
            height="42px"
            id="icon-trash"
          />
          <h3 className={clsx(css.title, css[themeType])}>Are you sure?</h3>
          <b className={clsx(css.text, css[themeType])}>
            <span className={clsx(css.span, css[themeType])}>{title} </span>{" "}
            will be delete immediately.
            <br /> You can&apos;t undo this action.
          </b>

          <div className={css.container}>
            <button
              aria-label="button for cancel"
              className={clsx(css.btn, css.cancel, css[themeType])}
              onClick={onRequestClose}
            >
              Cancel
            </button>
            <button
              aria-label="button for delete column"
              className={clsx(css.btn, css.delete, css[themeType])}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

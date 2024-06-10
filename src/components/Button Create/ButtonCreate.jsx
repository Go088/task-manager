// import css from "../Button Create/ButtonCreate.module.css"

// export default function ButtonCreate(){
//     return(
//         <div className={css.list}>
//             <h2 className={css.text}>Create a <br/>new board</h2>
//             <button type="button" className={css.button}>
//             <svg width="40" height="36"><use href="./sprite.svg#icon-block"></use></svg>
//             </button>

//         </div>
//     )
// }














import css from "../Button Create/ButtonCreate.module.css";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import BoardForm from "../../components/BoardForm/BoardForm";

export default function ButtonCreate() {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleOpen = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.list}>
      <h2 className={css.text}>
        Create a <br />
        new board
      </h2>
      <button
        className={css.button}
        onClick={handleOpen}
        type="button"
        aria-label="Create a new board"
      >
        <svg width="40" height="36">
          <use href="./sprite.svg#icon-block"></use>
        </svg>
      </button>
      {modalIsOpen && (
        <BoardForm isOpen={modalIsOpen} onRequestClose={closeModal} />
      )}
    </div>
  );
}


// import css from "../Button Create/ButtonCreate.module.css";
// import clsx from "clsx";
// import { useEffect, useState } from "react";
// import Modal from "react-modal";
// import BoardForm from "../../components/BoardForm/BoardForm";
// import Icon from "../Icon/Icon";

// export default function ButtonCreate() {
//   const themeType = "dark";
//   const [modalIsOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     Modal.setAppElement("#root");
//   }, []);

//   const handleOpen = () => setIsOpen(true);
//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className={clsx(css.list, css[themeType])}>
//       <h2 className={clsx(css.text, css[themeType])}>
//         Create a <br />
//         new board
//       </h2>
//       <button
//         className={clsx(css.button, css[themeType])}
//         onClick={handleOpen}
//         type="button"
//         aria-label="Create a new board"
//       >
//         <Icon
//           className={clsx(css.icon, css[themeType])}
//           id="icon-plus_board"
//           width="20"
//           height="20"
//         />
//       </button>
//       {modalIsOpen && (
//         <BoardForm isOpen={modalIsOpen} onRequestClose={closeModal} />
//       )}
//     </div>
//   );
// }




import css from "../Button Create/ButtonCreate.module.css";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import CardForm from "../CardForm/CardForm";
import Icon from "../Icon/Icon";

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
        <Icon id="icon-plus_board"
        width="20"
        height="20"
        className={css.icon}/>
    </button>
      {modalIsOpen && (
        <CardForm isOpen={modalIsOpen} onRequestClose={closeModal} />
      )}
    </div>
  );
}
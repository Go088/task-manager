import { useEffect, useState } from "react";
import Modal from 'react-modal';
import BoardForm from "../../components/BoardForm/BoardForm";

export default function HomePage() {
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
        onClick={handleOpen}
        aria-label="Create a new board"
      >
        Create a new board
      </button>
      {modalIsOpen && (
        <BoardForm isOpen={modalIsOpen} onRequestClose={closeModal} />
      )}
    </>
  );
}

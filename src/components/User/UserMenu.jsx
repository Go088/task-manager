import { useEffect, useState } from "react";
import { EditUserProfile } from "../EditUserProfile/EditUserProfile";
import Modal from "react-modal";

const UserMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleOpen = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div>
      <div onClick={handleOpen}>
        <p>Name</p>
        <p>Icon</p>
      </div>
      {isModalOpen && <EditUserProfile isOpen={setIsModalOpen} onRequestClose={closeModal}/>}
    </div>
  );
};

export default UserMenu;

import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/user/selectors";
import Avatar from "../UserAvatar/UserAvatar";
import EditUserProfile from "../EditUserProfile/EditUserProfile";

const UserIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <Avatar src={user?.photo} size={32} onClick={toggleModal} />
      {isModalOpen && (
        <EditUserProfile isOpen={isModalOpen} onClose={toggleModal} />
      )}
    </div>
  );
};

export default UserIcon;

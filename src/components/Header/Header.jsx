import { useEffect, useState } from "react";
import css from "./Header.module.css";
import layout from "../Layout/Layout.module.css";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import { ThemeTypes } from "../../themeConstants";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/features/auth/selectors";
import { selectTheme } from "../../redux/features/theme/selectors";
import { changeTheme } from "../../redux/features/theme/operations";
// import { getUserAvatar } from "../../redux/features/user/operations";
import EditUserProfile from "../EditUserProfile/EditUserProfile";
import Modal from "react-modal";
// import { refreshUser } from "../../redux/features/user/operations";
import {
  selectUserName,
  selectUserPhoto,
} from "../../redux/features/user/selectors";
import {
  getUserAvatar,
  refreshUser,
} from "../../redux/features/user/operations";

Modal.setAppElement("#root");

const Header = ({ setIsSidebarOpen }) => {
  const actualTheme = useSelector(selectTheme);
  const name = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log();

  const ThemeOptions = [
    { label: "Light", value: ThemeTypes.LIGHT },
    { label: "Violet", value: ThemeTypes.VIOLET },
    { label: "Dark", value: ThemeTypes.DARK },
  ];

  const handleThemeChange = (theme) => {
    dispatch(changeTheme(theme));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getUserAvatar());
  }, [dispatch]);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div
      className={clsx(layout.container, css.headerContainer, css[actualTheme])}
    >
      <div onClick={openSidebar}>
        <Icon
          id="icon-menu-01"
          className={clsx(css.mobileMenuIcon, css[actualTheme])}
          width="24"
          height="24"
        />
      </div>
      <div className={clsx(css.infoWrapper, css[actualTheme])}>
        <div
          className={clsx(css.themeWrapper, css[actualTheme])}
          onClick={toggleDropdown}
        >
          <p className={clsx(css.selectTitle, css[actualTheme])}>Theme</p>
          <Icon
            className={clsx(css.selectThemeIcon, css[actualTheme])}
            id="icon-arrow_edit_profile"
            width="16"
            height="16"
          />
          {isDropdownOpen && (
            <ul className={clsx(css.themeList, css.isOpen, css[actualTheme])}>
              {ThemeOptions.map((option) => (
                <li
                  key={option.value}
                  className={clsx(css.themeListItem, css[actualTheme], {
                    [css.active]: option.value === actualTheme,
                  })}
                  onClick={() => {
                    setIsDropdownOpen(false);
                    handleThemeChange(option.value);
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={clsx(css.userWrapper, css[actualTheme])}>
          <p className={clsx(css.userName, css[actualTheme])}>
            {name ? name : "User"}
          </p>
          <div
            className={clsx(css.avatarWrapper, css.clickable)}
            onClick={toggleModal}
          >
            <img src={photo ? photo : "/img/user.png"} alt="Avatar" />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Edit Profile Modal"
        className={css.modalContent}
        overlayClassName={css.modalOverlay}
        style={{ overlay: { backgroundColor: "transparent" } }}
      >
        <EditUserProfile onClose={toggleModal} />
      </Modal>
    </div>
  );
};

export default Header;

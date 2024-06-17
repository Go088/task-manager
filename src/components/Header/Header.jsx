import css from "./Header.module.css";
import layout from "../Layout/Layout.module.css";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import { ThemeTypes } from "../../themeConstants";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, selectUser } from "../../redux/features/auth/selectors";
import { changeTheme } from "../../redux/features/theme/operations";
import { useEffect, useState } from "react";
import Modal from "../ModalContainer/ModalContainer";
import { EditUserProfile } from "../EditUserProfile/EditUserProfile";

const Header = () => {
  const actualTheme = useSelector(selectTheme);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ThemeOptions = [
    { label: "Light", value: ThemeTypes.LIGHT },
    { label: "Violet", value: ThemeTypes.VIOLET },
    { label: "Dark", value: ThemeTypes.DARK },
  ];

  const themeType = actualTheme;

  const handleThemeChange = (theme) => {
    dispatch(changeTheme(theme));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {}, [actualTheme]);

  return (
    <div
      className={clsx(layout.container, css.headerContainer, css[themeType])}
    >
      <Icon
        id="icon-menu-01"
        className={clsx(css.mobileMenuIcon, css[themeType])}
        width="24"
        height="24"
      />
      <div className={css.infoWrapper}>
        <div className={css.themeWrapper} onClick={toggleDropdown}>
          <p className={clsx(css.selectTitle, css[themeType])}>Theme</p>
          <Icon
            className={clsx(css.selectThemeIcon, css[themeType])}
            id="icon-arror_edit_prifile"
            width="16"
            height="16"
          />
          {isDropdownOpen && (
            <ul className={clsx(css.themeList, css.isOpen, css[themeType])}>
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

        <div className={css.userWrapper}>
          <p className={clsx(css.userName, css[themeType])}>
            {user.name || "User"}
          </p>
          <div
            className={clsx(css.avatarWrapper, css.clickable)}
            onClick={toggleModal}
          >
            <img src={user.photo || "/img/user.png"} alt="Avatar" />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <EditUserProfile />
        </Modal>
      )}
    </div>
  );
};

export default Header;

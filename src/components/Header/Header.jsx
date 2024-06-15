import css from "./Header.module.css";
import layout from "../Layout/Layout.module.css";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import { ThemeTypes } from "../../themeConstants";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/features/auth/selectors";
import { changeTheme } from "../../redux/features/theme/operations";
import { useEffect, useState } from "react";

const Header = () => {
  const actualTheme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
  const ThemeOptions = [
    { label: "Light", value: ThemeTypes.LIGHT },
    { label: "Violet", value: ThemeTypes.VIOLET },
    { label: "Dark", value: ThemeTypes.DARK },
  ];

  const themeType = actualTheme;

  const handleThemeChange = (theme) => {
    console.log("Changing theme to:", theme);
    dispatch(changeTheme(theme));
  };

  const toggleDropdown = () => {
    console.log("open dropDown");
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    console.log("Theme updated to:", actualTheme);
  }, [actualTheme]);

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
                    console.log("Option clicked:", option.value);
                    setIsDropdownOpen(false)
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
          <p className={clsx(css.userName, css[themeType])}>Ivetta</p>
          <div className={css.avatarWrapper}>
            <img src="/img/user.png" alt="Avatar"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

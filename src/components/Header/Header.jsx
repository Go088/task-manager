  import css from "./Header.module.css";
  import layout from "../Layout/Layout.module.css";
  import clsx from "clsx";
  import Icon from "../Icon/Icon";
  import ThemeSwitcer from "../ThemeSwitcher/ThemeSwitcher";
  import { ThemeTypes } from "../../themeConstants";
// import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/features/auth/selectors";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { changeTheme } from "../../redux/features/theme/operations";

  const Header = () => {

    const currentTheme = useSelector(selectTheme) || ThemeTypes.DARK;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(changeTheme(currentTheme));
  // }, [dispatch, currentTheme]);

    const themeType = currentTheme;
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
          <div className={css.themeWrapper}>
            <p className={clsx(css.selectTitle, css[themeType])}>Theme</p>
            <Icon
              className={clsx(css.selectThemeIcon, css[themeType])}
              id="icon-arror_edit_prifile"
              width="16"
              height="16"
            />
            <ul className={clsx(css.themeList, css.isOpen, css[themeType])}>
              <li className={clsx(css.themeListItem, css[themeType], css.active)}>
                Light
              </li>
              <li className={clsx(css.themeListItem, css[themeType])}>Dark</li>
              <li className={clsx(css.themeListItem, css[themeType])}>Violet</li>
            </ul>
          </div>

          <div className={css.userWrapper}>
            <p className={clsx(css.userName, css[themeType])}>Ivetta</p>
            <div className={css.avatarWrapper}>
              <img src="/img/user.png" alt="Avatar"></img>
            </div>
          </div>
        </div>
        <ThemeSwitcer/>
      </div>
    );
  };

  export default Header;
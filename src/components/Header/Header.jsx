import css from "./Header.module.css";
import layout from "../Layout/Layout.module.css";
import clsx from "clsx";
export const Header = () => {
  return (
    <div className={clsx(layout.container, css.headerContainer, css.dark)}>
      <svg
        className={clsx(css.mobileMenuIcon, css.dark)}
        width="24"
        height="24"
      >
        <use href="/src/sprite.svg#icon-help-circle"></use>
      </svg>
      <div className={css.infoWrapper}>
        <div className={css.themeWrapper}>
          <p className={clsx(css.selectTitle, css.dark)}>Theme</p>
          <svg
            className={clsx(css.selectThemeIcon, css.dark)}
            width="16"
            height="16"
          >
            <use href="/src/sprite.svg#icon-help-circle"></use>
          </svg>
          <ul className={clsx(css.themeList, css.isOpen, css.dark)}>
            <li className={clsx(css.themeListItem, css.dark, css.active)}>
              Light
            </li>
            <li className={clsx(css.themeListItem, css.dark)}>Dark</li>
            <li className={clsx(css.themeListItem, css.dark)}>Violet</li>
          </ul>
        </div>

        <div className={css.userWrapper}>
          <p className={clsx(css.userName, css.dark)}>Ivetta</p>
          <div className={css.avatarWrapper}>
            <img src="/img/user.png" alt="Avatar"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

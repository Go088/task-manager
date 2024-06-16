import Icon from "../../Icon/Icon";
import css from "./IconGroup.module.css";
import clsx from "clsx";

const IconGroup = ({ theme, isBellVisible }) => {
  const whiteTheme = theme === "dark" ? "" : "white";
  return (
    <ul className={css.iconList}>
      {isBellVisible && (
        <li className={css.li}>
          {/* <button className={css.buttonBell}> */}
          <Icon
            className={clsx(css.iconBell, css[theme], css[whiteTheme])}
            width="16px"
            height="16px"
            id="icon-bell"
          />
          {/* </button> */}
        </li>
      )}
      <li className={css.li}>
        <button className={css.button}>
          <Icon
            className={clsx(css.icon, css[whiteTheme], css[theme])}
            width="16px"
            height="16px"
            id="icon-arrow-circle-broken-right"
          />
        </button>
      </li>
      <li className={css.li}>
        <button className={css.button}>
          <Icon
            className={clsx(css.icon, css[whiteTheme], css[theme])}
            width="16px"
            height="16px"
            id="icon-pencil"
          />
        </button>
      </li>
      <li className={css.li}>
        <button className={css.button}>
          <Icon
            className={clsx(css.icon, css[whiteTheme], css[theme])}
            width="16px"
            height="16px"
            id="icon-trash"
          />
        </button>
      </li>
    </ul>
  );
};
export default IconGroup;

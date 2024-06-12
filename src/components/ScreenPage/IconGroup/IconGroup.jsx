import Icon from "../../Icon/Icon";
import css from "./IconGroup.module.css";

const IconGroup = () => {
  return (
    <ul className={css.iconList}>
      <li className={css.li}>
        <button className={css.buttonBell}>
          <Icon
            className={css.iconBell}
            width="16px"
            height="16px"
            id="icon-bell"
          />
        </button>
      </li>
      <li className={css.li}>
        <button className={css.button}>
          <Icon
            className={css.icon}
            width="16px"
            height="16px"
            id="icon-arrow-circle-broken-right"
          />
        </button>
      </li>
      <li className={css.li}>
        <button className={css.button}>
          <Icon
            className={css.icon}
            width="16px"
            height="16px"
            id="icon-pencil"
          />
        </button>
      </li>
      <li className={css.li}>
        <button className={css.button}>
          <Icon
            className={css.icon}
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

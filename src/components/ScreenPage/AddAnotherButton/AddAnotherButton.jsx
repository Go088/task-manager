import Icon from "../../Icon/Icon";
import css from "./AddAnotherButton.module.css";
import clsx from "clsx";

const AddAnotherButton = ({ theme }) => {
  const whiteTheme = theme === "dark" ? "" : "white";
  return (
    <button className={clsx(css.button, css[whiteTheme])}>
      <span className={clsx(css.iconSpan, css[theme])}>
        <Icon
          className={clsx(css.icon, css[whiteTheme])}
          width="14px"
          height="14px"
          id="icon-plus_card_modal"
        />
      </span>
      Add another column
    </button>
  );
};
export default AddAnotherButton;

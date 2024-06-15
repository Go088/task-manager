import clsx from "clsx";
import Icon from "../../Icon/Icon";
import css from "./AddCardButton.module.css";

const AddCardButton = ({ theme }) => {
  // const whiteTheme = theme === "dark" ? "" : "white";
  return (
    <button type="button" className={clsx(css.button, css[theme])}>
      <span className={clsx(css.span, css[theme])}>
        <Icon
          className={clsx(css.iconPlus, css[theme])}
          width="14px"
          height="14px"
          id="icon-plus_card_modal"
        />
      </span>
      Add another card
    </button>
  );
};
export default AddCardButton;

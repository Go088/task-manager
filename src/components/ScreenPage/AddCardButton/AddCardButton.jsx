import Icon from "../../Icon/Icon";
import css from "./AddCardButton.module.css";

const AddCardButton = () => {
  return (
    <button type="button" className={css.button}>
      <span className={css.span}>
        <Icon
          className={css.iconPlus}
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

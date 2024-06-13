import Icon from "../../Icon/Icon";
import css from "./AddAnotherButton.module.css";

const AddAnotherButton = () => {
  return (
    <button className={css.button}>
      <span className={css.iconSpan}>
        <Icon
          className={css.icon}
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

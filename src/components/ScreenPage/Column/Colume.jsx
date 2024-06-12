import css from "./Column.module.css";
import Icon from "../../Icon/Icon";
// import sprite from "../../../sprite.svg";
import Card from "../Card/Card";
import AddCardButton from "../AddCardButton/AddCardButton";

const Column = () => {
  return (
    <div>
      <div className={css.columnNameContainer}>
        <h3 className={css.columNameText}>columnName</h3>
        <div className={css.iconWrapper}>
          <button type="button" className={css.button}>
            <Icon
              className={css.iconPensil}
              width="16px"
              height="16px"
              id="icon-pencil"
            />
          </button>
          <button type="button" className={css.button}>
            <Icon
              className={css.iconTrash}
              width="16px"
              height="16px"
              id="icon-trash"
            />
          </button>
        </div>
      </div>
      <div className={css.cardContainer}>
        <div className={css.cardWraper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <AddCardButton />
    </div>
  );
};
export default Column;

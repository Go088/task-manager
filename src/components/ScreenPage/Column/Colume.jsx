import css from "./Column.module.css";
import Icon from "../../Icon/Icon";
import sprite from "../../../sprite.svg";
import Card from "../Card/Card";

const Column = () => {
  return (
    <div>
      <div className={css.columnNameContainer}>
        <p className={css.columNameText}>columnName</p>
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
            {/* <svg width="16px" height="16px">
              <use href={`${sprite}#icon-trash-04`} />
            </svg> */}
            <Icon
              className={css.iconTrash}
              width="16px"
              height="16px"
              id="icon-trash"
            />
          </button>
        </div>
      </div>
      <Card />
    </div>
  );
};
export default Column;

import css from "./Column.module.css";
import Icon from "../../Icon/Icon";
// import sprite from "../../../sprite.svg";
import Card from "../Card/Card";
import AddCardButton from "../AddCardButton/AddCardButton";
import CustomScrollBar from "../CustemScrollBar/CustomScrollBar";
import clsx from "clsx";

const Column = ({ theme }) => {
  const whiteTheme = theme === "dark" ? "" : "white";
  return (
    <div className={css.columnContainer}>
      <div className={clsx(css.columnNameContainer, css[whiteTheme])}>
        <h3 className={clsx(css.columNameText, css[whiteTheme])}>columnName</h3>
        <div className={css.iconWrapper}>
          <button type="button" className={css.button}>
            <Icon
              className={clsx(css.iconPensil, css[whiteTheme])}
              width="16px"
              height="16px"
              id="icon-pencil"
            />
          </button>
          <button type="button" className={css.button}>
            <Icon
              className={clsx(css.iconTrash, css[whiteTheme])}
              width="16px"
              height="16px"
              id="icon-trash"
            />
          </button>
        </div>
      </div>
      <div className={clsx(css.cardContainer, "secondScrol")}>
        <CustomScrollBar className={css.scrolBar} theme={theme}>
          <div className={css.cardWraper}>
            <Card theme={theme} />
            <Card theme={theme} />
            {/* <Card theme={theme} />
            <Card theme={theme} /> */}
          </div>
        </CustomScrollBar>
      </div>

      <AddCardButton theme={theme} />
    </div>
  );
};
export default Column;

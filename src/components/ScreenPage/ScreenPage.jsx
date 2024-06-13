// import Icon from "../Icon/Icon";
import AddAnotherButton from "./AddAnotherButton/AddAnotherButton";
import Column from "./Column/Colume";
import FilterButton from "./FilterButton/FilterButton";
import NoBoardText from "./NoBoardText/NoBoardText";
import css from "./ScreenPage.module.css";
import clsx from "clsx";

const ScreanPage = () => {
  const isBoard = true;
  const theme = "ligh";

  return (
    <div className={clsx(css.screenContainer, css[theme])}>
      <div className={css.titleFilterWrapper}>
        {isBoard && <h2 className={clsx(css.title, css[theme])}>boardName</h2>}
        <FilterButton theme={theme} />
      </div>
      {isBoard ? (
        <div className={css.columnContainer}>
          <div className={css.columnWrapper}>
            <Column theme={theme} />
            <Column theme={theme} />
            <AddAnotherButton theme={theme} />
          </div>
        </div>
      ) : (
        <NoBoardText theme={theme} />
      )}
    </div>
  );
};
export default ScreanPage;

import AddAnotherButton from "./AddAnotherButton/AddAnotherButton";
import Column from "./Column/Colume";
import FilterButton from "./FilterButton/FilterButton";
import NoBoardText from "./NoBoardText/NoBoardText";
import css from "./ScreenPage.module.css";
import clsx from "clsx";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./CustomScrollbar.css";

const ScreanPage = () => {
  const isBoard = true;
  const theme = "dark";

  return (
    <div className={clsx(css.screenContainer, css[theme])}>
      <div className={css.titleFilterWrapper}>
        {isBoard && <h2 className={clsx(css.title, css[theme])}>boardName</h2>}
        <FilterButton theme={theme} />
      </div>
      {isBoard ? (
        <div className={clsx(theme + "firstScrol")}>
          <SimpleBar autoHide={false}>
            <div className={css.columnWrapper}>
              <Column theme={theme} />
              <Column theme={theme} />
              {/* <Column theme={theme} /> */}
              <AddAnotherButton theme={theme} />
            </div>
          </SimpleBar>
        </div>
      ) : (
        <NoBoardText theme={theme} />
      )}
    </div>
  );
};
export default ScreanPage;

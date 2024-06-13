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

      {/* <div className={css.columnContainer}>
        <div className={css.columnWrapper}>
          <Column />
          <Column />
          /<AddAnotherButton />
        </div>
      </div> */}
    </div>
  );
};
export default ScreanPage;
// export default function ScreenPage() {
//   return (
//     <div className={css.screenPageContainer}>
//       <p className={css.screenPagetext}>
//         Before starting your project, it is essential
//         <span className={css.screenPageSpan}>to create a board</span> to visualize and
//         track all the necessary tasks and milestones. This board serves as a
//         powerful tool to organize the workflow and ensure effective
//         collaboration among team members.
//       </p>
//     </div>
//   );
// }

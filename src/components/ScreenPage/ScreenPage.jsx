import Icon from "../Icon/Icon";
import AddAnotherButton from "./AddAnotherButton/AddAnotherButton";
import Column from "./Column/Colume";
import FilterButton from "./FilterButton/FilterButton";
import NoBoardText from "./NoBoardText/NoBoardText";
import css from "./ScreenPage.module.css";

const ScreanPage = () => {
  const isBoard = false;
  const theme = "light";

  return (
    <div className={css.screenContainer}>
      <div className={css.titleFilterWrapper}>
        {isBoard && <h2 className={css.title}>boardName</h2>}
        <FilterButton />
      </div>
      {isBoard ? (
        <div className={css.columnContainer}>
          <div className={css.columnWrapper}>
            <Column />
            <Column />
            <AddAnotherButton />
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

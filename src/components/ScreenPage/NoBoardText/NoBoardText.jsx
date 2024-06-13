import css from "./NoBoardText.module.css";
import clsx from "clsx";

const NoBoardText = ({ theme }) => {
  console.log(theme);
  return (
    <div className={clsx(css.textWrapper, css[theme])}>
      <p className={clsx(css.text, css[theme])}>
        Before starting your project, it is essential
        <span className={css.textSpan}> to create a board</span> to visualize
        and track all the necessary tasks and milestones. This board serves as a
        powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </p>
    </div>
  );
};
export default NoBoardText;

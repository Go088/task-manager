import css from "./ScreenPage.module.css";
export default function ScreenPage() {
  return (
    <div className={css.screenPageContainer}>
      <p className={css.screenPagetext}>
        Before starting your project, it is essential
        <span className={css.screenPageSpan}>to create a board</span> to visualize and
        track all the necessary tasks and milestones. This board serves as a
        powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </p>
    </div>
  );
}
// import Icon from "../../Icon/Icon";
import IconGroup from "../IconGroup/IconGroup";
import css from "./Card.module.css";
import clsx from "clsx";

const Card = ({ theme }) => {
  const whiteTheme = theme === "dark" ? "" : "white";
  return (
    <div className={css.test}>
      <div className={clsx(css.cardContainer, css[whiteTheme])}>
        <div className={clsx(css.line, css[whiteTheme])}></div>
        <div className={css.cardWrapper}>
          <h4 className={clsx(css.title, css[whiteTheme])}>cardName</h4>
          <p className={clsx(css.text, css[whiteTheme])}>
            Create a visually stunning and eye-catching watch dial design that
            embodies our brand...
          </p>
          <div className={clsx(css.innerLine, css[whiteTheme])}></div>
          <div className={css.bottomCardWrapper}>
            <div className={css.priorityDateWrapper}>
              <div className={css.priorityWrapper}>
                <p className={clsx(css.priority, css[whiteTheme])}>Priority</p>
                <div className={css.innerPriorityWrapper}>
                  <span className={css.circle}></span>
                  <p className={clsx(css.priorityType, css[whiteTheme])}>
                    Medium
                  </p>
                </div>
              </div>
              <div>
                <p className={clsx(css.deadlineText, css[whiteTheme])}>
                  Deadline
                </p>
                <p className={clsx(css.date, css[whiteTheme])}>12/05/2023</p>
              </div>
            </div>
            <IconGroup theme={theme} />
          </div>
        </div>
      </div>
      <div className={css.test2}></div>
    </div>
  );
};
export default Card;
{
  /* <div className={css.test}>
  <Card />
  <div className={css.test2}></div>
</div>; */
}

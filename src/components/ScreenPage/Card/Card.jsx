import IconGroup from "../IconGroup/IconGroup";
import css from "./Card.module.css";
import clsx from "clsx";

const Card = ({ theme, card }) => {
  const whiteTheme = theme === "dark" ? "" : "white";
  return (
    <div className={css.test}>
      <div className={clsx(css.cardContainer, css[whiteTheme])}>
        <div className={clsx(css.line, css[whiteTheme])}></div>
        <div className={css.cardWrapper}>
          <h4 className={clsx(css.title, css[whiteTheme])}>{card?.title}</h4>
          <p className={clsx(css.text, css[whiteTheme], css.limit)}>
            {card.description}
          </p>
          <div className={clsx(css.innerLine, css[whiteTheme])}></div>
          <div className={css.bottomCardWrapper}>
            <div className={css.priorityDateWrapper}>
              <div className={css.priorityWrapper}>
                <p className={clsx(css.priority, css[whiteTheme])}>Priority</p>
                <div className={css.innerPriorityWrapper}>
                  <span className={css.circle}></span>
                  <p className={clsx(css.priorityType, css[whiteTheme])}>
                    {card.priority}
                  </p>
                </div>
              </div>
              <div>
                <p className={clsx(css.deadlineText, css[whiteTheme])}>
                  Deadline
                </p>
                <p className={clsx(css.date, css[whiteTheme])}>
                  {card.deadline}
                </p>
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

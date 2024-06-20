import IconGroup from "../IconGroup/IconGroup";
import css from "./Card.module.css";
import clsx from "clsx";

const Card = ({ theme, card }) => {
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const date = formatDate(new Date(card?.deadline));
  const dateToday = formatDate(new Date());

  const isTimeOut = (dateToday, date) => {
    const [day1, month1, year1] = dateToday.split("/").map(Number);
    const [day2, month2, year2] = date.split("/").map(Number);
    const d1 = new Date(year1, month1 - 1, day1);
    const d2 = new Date(year2, month2 - 1, day2);
    return d1 > d2;
  };
  const bellIconColor =
    date === dateToday ? "green" : isTimeOut(dateToday, date) ? "red" : "";

  const whiteTheme = theme === "dark" ? "" : "white";

  return (
    <div className={css.test}>
      <div className={clsx(css.cardContainer, css[whiteTheme])}>
        <div
          className={clsx(css.line, css[whiteTheme], css[card.priority])}
        ></div>
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
                  <span
                    className={clsx(css.circle, css[card?.priority])}
                  ></span>
                  <p className={clsx(css.priorityType, css[whiteTheme])}>
                    {card.priority}
                  </p>
                </div>
              </div>
              <div>
                <p className={clsx(css.deadlineText, css[whiteTheme])}>
                  Deadline
                </p>
                <p className={clsx(css.date, css[whiteTheme])}>{date}</p>
              </div>
            </div>
            <IconGroup
              bellIconColor={bellIconColor}
              theme={theme}
              card={card}
            />
          </div>
        </div>
      </div>
      <div className={css.test2}></div>
    </div>
  );
};
export default Card;

import IconGroup from "../IconGroup/IconGroup";
import css from "./Card.module.css";
import clsx from "clsx";
const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

const Card = ({ theme, card }) => {
  const date = new Date();
  let corectedDate = "";
  let dateNow = "";
  try {
    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
    const validateDate = (dateString) => {
      return datePattern.test(dateString);
    };
    dateNow = formatDate(date);
    corectedDate = validateDate(card.deadline)
      ? card.deadline
      : formatDate(Number(card.deadline));
  } catch (error) {
    console.log("card date error");
  }

  const isBellVisible = dateNow === corectedDate;

  // const formattedDate = formatDate(date);

  const whiteTheme = theme === "dark" ? "" : "white";

  return (
    <div className={css.test}>
      <div className={clsx(css.cardContainer, css[whiteTheme])}>
        <div className={clsx(css.line, css[card.priority])}></div>
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
                <p className={clsx(css.date, css[whiteTheme])}>
                  {corectedDate}
                </p>
              </div>
            </div>
            <IconGroup isBellVisible={isBellVisible} theme={theme} card={card} />
          </div>
        </div>
      </div>
      <div className={css.test2}></div>
    </div>
  );
};
export default Card;

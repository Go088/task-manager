// import Icon from "../../Icon/Icon";
import IconGroup from "../IconGroup/IconGroup";
import css from "./Card.module.css";

const Card = () => {
  return (
    <div className={css.cardContainer}>
      <div className={css.line}></div>
      <div className={css.cardWrapper}>
        <p className={css.title}>cardName</p>
        <p className={css.text}>
          Create a visually stunning and eye-catching watch dial design that
          embodies our brand...
        </p>
        <div className={css.innerLine}></div>
        <div className={css.bottomCardWrapper}>
          <div className={css.priorityDateWrapper}>
            <div className={css.priorityWrapper}>
              <p className={css.priority}>Priority</p>
              <div className={css.innerPriorityWrapper}>
                <span className={css.circle}></span>
                <p className={css.priorityType}>Medium</p>
              </div>
            </div>
            <div>
              <p className={css.deadlineText}>Deadline</p>
              <p className={css.date}>12/05/2023</p>
            </div>
          </div>
          <IconGroup />
        </div>
      </div>
    </div>
  );
};
export default Card;

// import Icon from "../../Icon/Icon";
import IconGroup from "../IconGroup/IconGroup";
import css from "./Card.module.css";

const Card = () => {
  return (
    <div className={css.test}>
      <div className={css.cardContainer}>
        <div className={css.line}></div>
        <div className={css.cardWrapper}>
          <h4 className={css.title}>cardName</h4>
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

import sprite from "../../../assets/sprite.svg";
import styles from "./Open.module.css";

const Open = () => {
  return (
    <>
      <svg className={styles.svg}>
        <use href={`${sprite}#open`} />
      </svg>
    </>
  );
};

export default Open;

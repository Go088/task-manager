import sprite from "../../../assets/sprite.svg";
import styles from "./Close.module.css";

const Close = () => {
  return (
    <>
      <svg className={styles.svg}>
        <use href={`${sprite}#icon-x-close`} />
      </svg>
    </>
  );
};
export default Close;

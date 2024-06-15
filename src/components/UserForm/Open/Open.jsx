import sprite from '../../../assets/sprite.svg'
import styles from './Open.module.css';

export const Open = () => {
  return (
    <>
      <svg className={styles.svg}>
        <use href={`${sprite}#open`} />
      </svg>
    </>
  );
};
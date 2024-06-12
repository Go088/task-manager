import css from '../ErrorMessage/ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <b className={css.message}>
      Oops! Something went wrong! Please, reload page!
    </b>
  );
}

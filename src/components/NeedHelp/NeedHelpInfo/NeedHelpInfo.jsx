import css from "./NeedHelpInfo.module.css";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/features/modals/needHelpModalSlice";

export const NeedHelpInfo = () => {
  const dispatch = useDispatch();
  return (
    <div className={clsx(css.helpWrapper, css.dark)}>
      <img
        className={css.helpImg}
        srcSet="/img/cactus.png 1x, /img/cactus@2x.png 2x"
        src="/img/cactus.png"
        alt="Smiling cactus"
      />
      <p className={clsx(css.helpText, css.dark)}>
        If you need help with{" "}
        <span className={clsx(css.highlightText, css.dark)}>TaskPro</span>,
        check out our support resources or reach out to our customer support
        team.
      </p>
      <button
        onClick={dispatch(openModal(true))}
        className={clsx(css.helpButton, css.dark)}
        type="submit"
      >
        <svg className={clsx(css.helpIcon, css.dark)} width="20" height="20">
          <use href="/src/sprite.svg#icon-help-circle"></use>
        </svg>
        Need help?
      </button>
    </div>
  );
};

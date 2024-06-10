import css from "./NeedHelpInfo.module.css";
import clsx from "clsx";
import Icon from "../../Icon/Icon";
//import { useDispatch } from "react-redux";
//import { openModal } from "../../../redux/features/modals/needHelpModalSlice";

export const NeedHelpInfo = () => {
  //const dispatch = useDispatch();
  const themeType = "dark";
  return (
    <div className={clsx(css.helpWrapper, css[themeType])}>
      <img
        className={css.helpImg}
        srcSet="/img/cactus.png 1x, /img/cactus@2x.png 2x"
        src="/img/cactus.png"
        alt="Smiling cactus"
      />
      <p className={clsx(css.helpText, css[themeType])}>
        If you need help with{" "}
        <span className={clsx(css.highlightText, css[themeType])}>TaskPro</span>
        , check out our support resources or reach out to our customer support
        team.
      </p>
      <button
        //onClick={dispatch(openModal(true))}
        className={clsx(css.helpButton, css[themeType])}
        type="submit"
      >
        <Icon
          id="icon-help-circle"
          className={clsx(css.helpIcon, css[themeType])}
          width="20"
          height="20"
        />
        Need help?
      </button>
    </div>
  );
};

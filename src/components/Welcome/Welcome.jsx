import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import css from "./Welcome.module.css";
import clsx from "clsx";


const Welcome = () => {
  return (
      <div className={css.section}>
      <div className={css.fix}>
        <div className={css.avatar}>
          <img
            className={css.developerAvatar}
            srcSet="/img/user_mob.png 124w, /img/user_mob@2x.png 248w, /img/user.png "
            src="/img/user.png"
            alt="Developers Avatar"
          />
        </div>
        <div className={css.logoName}>
          <Icon id="icon-main-logo" width="40" height="40" className={css.iconApp} />
          <h1 className={css.title}>Task Pro</h1>
        </div>
        <p className={clsx(css.description, css.multiLine)}>
          Supercharge your productivity and take control <br className={css.breakLine} /> of your tasks with Task
          Pro - Don&apos;t wait, start achieving your goals now!
        </p>
        <div className={css.btnBox}>
        <Link to="/auth/register" className={css.authLink}>
          <button type="submit" className={clsx(css.button, css.buttonActive)}>
            Registration
          </button>
        </Link>
        <Link to="/auth/login">
          <button type="submit" className={css.button}>
            Log in
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};
export default Welcome;

import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import css from "./Welcome.module.css";
const Welcome = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.avatar}>
          <img
            className={css.developerAvatar}
            srcSet="/public/img/user_mob.png 124w, /public/img/user_mob@2x.png 248w, /public/img/user.png "
            src="/public/img/user.png"
            alt="Developers Avatar"
          />
        </div>
        <div className={css.logoName}>
          <Icon id="icon-app" width="40" height="40" className={css.iconApp} />
          <h1 className={css.title}>Task Pro</h1>
        </div>
        <p className={css.description}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don&apost wait, start achieving your goals now!
        </p>
        <Link to="/auth/register" className={css.authLink}>
          <button type="submit" className={css.button}>
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
  );
};
export default Welcome;

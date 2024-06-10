import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import css from "./Welcome.module.css";

// import WelcomeIcon from "@img/user.png";
// import WelcomeIconRetina from "@img/user@2.png";

const Welcome = () => {
  return (
    <div>
      {/* <img
        srcSet={`${WelcomeIcon} 124w, ${WelcomeIconRetina} 248w`}
        src={`${WelcomeIcon}`}
        sizes="(min-width: 375px) 124px, (min-width: 768px) 162px, (min-width: 1440px) 162px"
        alt="Developers Avatar"
      /> */}
      <img
        srcSet="/img/user.png 1x, /img/user@2x.png 2x"
        src="/img/user.png"
        alt="Developers Avatar"
      />

      <div className={css.icon_bg}>
        <Icon
          id="icon-logo"
          width="12"
          height="16"
          className={css.icon_task_light}
        />
      </div>

      {/* <div>
      <svg className={clsx(css.helpIcon, css.dark)} width="20" height="20">
        <use href="/src/sprite.svg#icon-help-circle"></use>
      </svg>
      </div> */}
      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don&apost wait, start achieving your goals now!
      </p>

      <svg width="16" height="16">
        <use href="">Text</use>
      </svg>

      <br />
      <ul>
        <Link to="/auth/register">
          <button type="submit">Registration</button>
        </Link>
        <Link to="/auth/login">
          <button type="submit">Log in</button>
        </Link>
      </ul>
    </div>
  );
};

export default Welcome;

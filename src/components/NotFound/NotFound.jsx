import { Link } from "react-router-dom";
import css from "../Welcome/Welcome.module.css";
import { clsx } from "clsx";

const NotFound = () => {
  return (
    <div className={css.section}>
      <div className={css.fix}>
      <h3 className={css.titleNotFound}>Oops, something went wrong...</h3>
      <div className={css.avatar}>
        <img
          className={css.developerAvatar}
          srcSet="/img/user_mob.png 124w, /img/user_mob@2x.png 248w, /img/user.png "
          src="/img/user.png"
          alt="Developers Avatar"
        />
      </div>

      <div className={css.btnBox}>
      <Link to="/auth/register" className={css.authLink}>
          <button type="submit" className={clsx(css.button, css.buttonActive)}>
            TRY AGAIN
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default NotFound;

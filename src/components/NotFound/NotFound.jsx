const NotFound = () => {
  return (
    <div>
      <div className={css.avatar}>
        <img
          className={css.developerAvatar}
          srcSet="/img/user_mob.png 124w, /img/user_mob@2x.png 248w, /img/user.png "
          src="/img/user.png"
          alt="Developers Avatar"
        />
      </div>
      <h2>Oops, something went wrong...</h2>
    </div>
  );
};

export default NotFound;

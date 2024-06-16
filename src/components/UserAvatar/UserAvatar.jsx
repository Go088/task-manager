import {
  selectIsLoading,
  selectUser,
} from "../../redux/features/auth/selectors";
import { useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";

const Avatar = ({ size, onClick, preload }) => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  let src = user.avatarURL ? user.avatarURL : `${sprite}#icon-logo-2`;

  if (preload) src = preload;

  return (
    <>
      {isLoading ? (
        <button
          style={{
            background: "none",
            border: "none",
            padding: "0",
          }}
        ></button>
      ) : (
        <button
          onClick={onClick}
          style={{
            background: "none",
            border: "none",
            padding: "0",
          }}
        >
          <img
            src={src}
            alt={user.name}
            width={size}
            height={size}
            style={{
              borderRadius: "5px",
              cursor: "pointer",
              border: "1px solid #808080",
            }}
          />
        </button>
      )}
    </>
  );
};

export default Avatar;

import { useDispatch, useSelector } from "react-redux";
import Icon from "../../Icon/Icon";
import clsx from "clsx";
import { selectBoard } from "../../../redux/features/boardss/selectors";
import s from "./CardTooltip.module.css";
import {
  addCard,
  deleteCard,
} from "../../../redux/features/boardss/operations";
import { selectTheme } from "../../../redux/features/theme/selectors";

export default function CardTooltip({
  card: { _id, title, description, priority, deadline, owner },
}) {
  const board = useSelector(selectBoard);
  const columns = board.columns;
  const themeType = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleClick = (id, columnId) => {
    return () => {
      dispatch(deleteCard(id));

      const data = {
        title,
        description,
        priority,
        deadline,
      };
      const cardData = {
        data,
        _id: columnId,
      };
      dispatch(addCard(cardData));
    };
  };

  return (
    <ul className={clsx(s.ul, s[themeType])}>
      {columns
        .filter((column) => column._id !== owner)
        .map((column) => {
          const columnId = column._id;
          return (
            <li className={s.item} key={columnId}>
              <button
                className={clsx(s.button)}
                onClick={handleClick(_id, column._id)}
                aria-label="button to change card's column"
              >
                <div className={clsx(s.title, s[themeType])}>
                  {column.title}
                </div>
                <Icon
                  className={clsx(s.icon, s[themeType])}
                  width="16px"
                  height="16px"
                  id="icon-arrow-circle-broken-right"
                />
              </button>
            </li>
          );
        })}
    </ul>
  );
}

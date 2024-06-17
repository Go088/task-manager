import { useDispatch, useSelector } from "react-redux";
import Icon from "../../Icon/Icon";
import css from "../../ScreenPage/IconGroup/IconGroup.module.css";
import clsx from "clsx";
import { selectBoard } from "../../../redux/features/boardss/selectors";
import s from "./CardTooltip.module.css";
import {
  addCard,
  deleteCard,
} from "../../../redux/features/boardss/operations";

export default function CardTooltip({
  theme,
  card: { _id, title, description, priority, deadline },
}) {
  const board = useSelector(selectBoard);
  const columns = board.columns;

  const whiteTheme = theme === "dark" ? "" : "white";

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
    <ul className={clsx(s.ul)}>
      {columns.map((column) => {
        const columnId = column._id;
        console.log(columnId);
        return (
          <li className={s.list} key={columnId}>
            <button
              className={clsx(s.button)}
              onClick={handleClick(_id, column._id)}
              aria-label="button to change card's column"
            >
              <span className={s.title}>{column.title}</span>
              <Icon
                className={clsx(s.icon, css[whiteTheme], css[theme])}
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

//    <>
//   <button className={css.button} onClick={handleClick}>
//               <span>{columns[0].title}</span></button>
//       <ul>
//         {columns.map((column) => {
//           <li key={column._id}>
//             <button className={css.button} >
//               <span>{column.title}</span>
//               <Icon
//                 className={clsx(css.icon, css[whiteTheme], css[theme])}
//                 width="16px"
//                 height="16px"
//                 id="icon-arrow-circle-broken-right"
//               />
//             </button>
//           </li>
//         })}
//       </ul>
//     </>

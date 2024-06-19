// import { Suspense } from 'react';
import { useSelector } from "react-redux";
import { selectBoards } from "../../redux/features/boards/selectors.js";
import css from "./BoardList.module.css";

import BordListItem from "./BordListItem/BordListItem.jsx";

export default function BoardList() {
  const boards = useSelector(selectBoards);

  return (
    <>
      <ul className={css.list}>
        {boards.map((a) => (
          <BordListItem key={a._id} {...a} />
        ))}
      </ul>
    </>
  );
}

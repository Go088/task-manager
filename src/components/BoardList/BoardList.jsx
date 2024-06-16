// import { Suspense } from 'react';
import { useSelector } from "react-redux";
import { selectBoards } from "../../redux/features/boards/selectors.js";
import css from "./BoardList.module.css";
// import { clsx } from 'clsx';
import {
  //   useParams,
//   NavLink,
  //   Link,
  //   Outlet,
  //   useLocation,
} from "react-router-dom";

import { Board } from "../Board/Board";


export default function BoardList() {
  const boards = useSelector(selectBoards);


  return (
    <>
      <ul className={css.list}>
        {boards.map(({ _id, title, icon, background}) => (
          <li key={_id}>
            {/* <NavLink
              className={({ isActive }) => {
                    return clsx(css.link, isActive && css.isActive);
                  }}
              to={_id}
            > */}
                <Board
                  _id={_id}
                  title={title}
                    icon={icon}
                    background={background}
                />
            {/* </NavLink> */}
          </li>
        ))}
      </ul>
    </>
  );
}

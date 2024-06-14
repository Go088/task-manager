import AddAnotherButton from "./AddAnotherButton/AddAnotherButton";
import Column from "./Column/Colume";
import FilterButton from "./FilterButton/FilterButton";
import NoBoardText from "./NoBoardText/NoBoardText";
import css from "./ScreenPage.module.css";
import clsx from "clsx";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./CustomScrollbar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoardById } from "../../redux/features/boardss/operations";
import { selectBoard } from "../../redux/features/boardss/selectors";
import { useEffect } from "react";
// import { selectUserr } from "../../redux/features/auth/selectors";
// import { ThreeCircles } from "react-loader-spinner";

const ScreanPage = ({ id = "666c45b30031e4827c3c972e" }) => {
  const theme = "dark";
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);

  useEffect(() => {
    dispatch(fetchBoardById(id));
  }, [dispatch, id]);

  const isBoard = board._id ? true : false;
  const isColumns = board.columns?.length > 0;
  console.log(board);
  // const the = useSelector(selectUserr);
  // console.log(the);
  return (
    <div className={clsx(css.screenContainer, css[theme])}>
      <div className={css.titleFilterWrapper}>
        {isBoard && (
          <h2 className={clsx(css.title, css[theme])}>{board?.title}</h2>
        )}
        <FilterButton theme={theme} />
      </div>
      {isBoard ? (
        <div className={clsx(theme + "firstScrol")}>
          <SimpleBar autoHide={false}>
            <div className={css.columnWrapper}>
              {isColumns &&
                board.columns.map((column) => {
                  return (
                    <Column key={column._id} column={column} theme={theme} />
                  );
                })}

              <AddAnotherButton theme={theme} />
            </div>
          </SimpleBar>
        </div>
      ) : (
        <NoBoardText theme={theme} />
      )}
    </div>
  );
};
export default ScreanPage;

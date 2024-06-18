import AddAnotherButton from "./AddAnotherButton/AddAnotherButton";
import Column from "./Column/Colume";

import css from "./ScreenPage.module.css";
import clsx from "clsx";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./CustomScrollbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCards,
  fetchBoardById,
} from "../../redux/features/boardss/operations";
import {
  selectAllCards,
  selectBoard,
} from "../../redux/features/boardss/selectors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterButton from "./FilterButton/FilterButton";
import { __DO_NOT_USE__ActionTypes } from "@reduxjs/toolkit";
import { selectTheme } from "../../redux/features/theme/selectors";

const ScreanPage = ({ aaa }) => {
  console.log(aaa);
  const { id: boardName } = useParams();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(boardName);
  }, [boardName]);

  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);

  useEffect(() => {
    if (id) {
      dispatch(fetchBoardById(id));
      dispatch(fetchAllCards());
    }
  }, [dispatch, id]);

  // const allCards = useSelector(selectAllCards);
  // useEffect(() => {
  //   console.log(board);
  //   console.log(allCards);
  // }, [allCards, board]);

  const isBoard = board._id ? true : false;
  const isColumns = board.columns?.length > 0;
  console.log(board);
  return (
    <>
      <div className={css.titleFilterWrapper}>
        {isBoard && (
          <h2 className={clsx(css.title, css[theme])}>{board?.title}</h2>
        )}
        {/* <FilterButton theme={theme} /> */}
      </div>
      {isBoard && (
        <div
          className={clsx(
            css.columnContainer,
            theme + "firstScrol",
            css[theme]
          )}
        >
          {/* <SimpleBar autoHide={false} forceVisible="x"> */}
          <div className={css.columnWrapper}>
            {isColumns &&
              board.columns.map((column) => {
                return (
                  <Column key={column._id} column={column} theme={theme} />
                );
              })}

            <AddAnotherButton theme={theme} />
          </div>
          {/* </SimpleBar> */}
        </div>
      )}
    </>
  );
};
export default ScreanPage;

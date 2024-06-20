import AddAnotherButton from "./AddAnotherButton/AddAnotherButton";
import Column from "./Column/Colume";
import css from "./ScreenPage.module.css";
import clsx from "clsx";
import "simplebar-react/dist/simplebar.min.css";
import "./CustomScrollbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCards,
  fetchBoardById,
} from "../../redux/features/boardss/operations";
import { selectBoard } from "../../redux/features/boardss/selectors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectTheme } from "../../redux/features/theme/selectors";
import { selectBoards } from "../../redux/features/boards/selectors";

const ScreanPage = () => {
  const { id: boardName } = useParams();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(boardName);
  }, [boardName]);

  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  const allBords = useSelector(selectBoards);

  useEffect(() => {
    if (id) {
      dispatch(fetchBoardById(id));
      dispatch(fetchAllCards());
    }
  }, [dispatch, id]);

  const isBoard = board._id ? true : false;
  const isColumns = board.columns?.length > 0;

  const boardBackgroumd = allBords.filter((b) => b._id === boardName)[0];
  const isBackground = boardBackgroumd?.background.phone ? true : false;

  return (
    <>
      <div className={css.titleFilterWrapper}>
        {isBoard && (
          <h2
            className={clsx(
              css.title,
              css[theme],
              isBackground && css.background
            )}
          >
            {board?.title}
          </h2>
        )}
      </div>
      {isBoard && (
        <div
          className={clsx(
            css.columnContainer,
            theme + "firstScrol",
            css[theme]
          )}
        >
          <div className={css.columnWrapper}>
            {isColumns &&
              board.columns.map((column) => {
                return (
                  <Column key={column._id} column={column} theme={theme} />
                );
              })}

            <AddAnotherButton theme={theme} />
          </div>
        </div>
      )}
    </>
  );
};
export default ScreanPage;

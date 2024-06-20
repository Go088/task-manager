import SideBar from "../../components/SideBar/SideBar";
import clsx from "clsx";
import css from "./HomePage.module.css";
import FilterButton from "../../components/ScreenPage/FilterButton/FilterButton";
import { Suspense, useEffect, useMemo, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import NoBoardText from "../../components/ScreenPage/NoBoardText/NoBoardText";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import useMedia from "../../hooks/useMediaQuery";
import { selectTheme } from "../../redux/features/theme/selectors";
import { selectBoards } from "../../redux/features/boards/selectors";
import { setDeletBord } from "../../redux/features/boardss/slice";

export default function HomePage() {
  const dispach = useDispatch();
  const { id: boarId } = useParams();
  const allBords = useSelector(selectBoards);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const theme = useSelector(selectTheme);
  const board = allBords.filter((b) => b._id === boarId)[0];
  const isBoard = boarId ? true : false;

  const checkBordexsist = allBords.some((b) => b._id === boarId);

  useEffect(() => {
    if (!checkBordexsist) dispach(setDeletBord({}));
  }, [checkBordexsist, dispach]);

  const typeOfImage = useMedia.isMobile
    ? board?.background?.phone
    : useMedia.isTablet
    ? board?.background?.tablet
    : board?.background?.laptop;

  const containerStyle = useMemo(
    () => ({
      backgroundImage: `url(${typeOfImage ? typeOfImage : ""})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: `${windowHeight - 68}px`,
    }),
    [typeOfImage, windowHeight]
  );

  return (
    <div>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <div className={css.desktop}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div
          style={containerStyle}
          className={clsx(css.screenContainer, css[theme])}
        >
          <FilterButton
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            theme={theme}
          />
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
          {!isBoard && <NoBoardText theme={theme} />}
        </div>
      </div>
      <div
        onClick={() => setIsFilterOpen(false)}
        className={clsx(css.backDropFprFilter, isFilterOpen && css.isActive)}
      ></div>
    </div>
  );
}

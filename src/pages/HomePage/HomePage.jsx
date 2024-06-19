import SideBar from "../../components/SideBar/SideBar";
import clsx from "clsx";
import css from "./HomePage.module.css";
import FilterButton from "../../components/ScreenPage/FilterButton/FilterButton";
import { Suspense, useMemo, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import NoBoardText from "../../components/ScreenPage/NoBoardText/NoBoardText";
import { useSelector } from "react-redux";
import { selectBoard } from "../../redux/features/boardss/selectors";
import Header from "../../components/Header/Header";
import useMedia from "../../hooks/useMediaQuery";
import { selectTheme } from "../../redux/features/theme/selectors";

export default function HomePage() {
  const { id: boarId } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const board = useSelector(selectBoard);
  const theme = useSelector(selectTheme);
  const isBoard = board._id ? true : false;

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
    }),
    [typeOfImage]
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

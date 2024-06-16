import ScreenPage from "../../components/ScreenPage/ScreenPage";
import SideBar from "../../components/SideBar/SideBar";
import clsx from "clsx";
import css from "./HomePage.module.css";
import FilterButton from "../../components/ScreenPage/FilterButton/FilterButton";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import NoBoardText from "../../components/ScreenPage/NoBoardText/NoBoardText";
import { useSelector } from "react-redux";
import { selectBoard } from "../../redux/features/boardss/selectors";
import Header from "../../components/Header/Header";

export default function HomePage() {
  const board = useSelector(selectBoard);
  const theme = "dark";
  const isBoard = board._id ? true : false;
  return (
    <div>
      <Header />
      <SideBar />
      <div className={clsx(css.screenContainer, css[theme])}>
        <FilterButton theme={theme} />
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>

        {!isBoard && <NoBoardText theme={theme} />}
        {/* <NavLink to="/home/666c45b30031e4827c3c972e">Home</NavLink> */}
      </div>
    </div>
  );
}

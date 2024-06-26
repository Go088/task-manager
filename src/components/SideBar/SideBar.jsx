import clsx from "clsx";
import ButtonCreate from "../Button Create/ButtonCreate";
import LogOut from "../LogOut/LogOut";
import css from "./SideBar.module.css";
import Icon from "../Icon/Icon";
import { NeedHelpInfo } from "../NeedHelp/NeedHelpInfo/NeedHelpInfo";
import BoardList from "../BoardList/BoardList";
import { useDispatch } from "react-redux";
import { fetchBoard } from "../../redux/features/boards/operations";
import { useEffect, useMemo, useState } from "react";
import { NeedHelpModal } from "../NeedHelp/NeedHelpModal/NeedHelpModal";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/features/theme/selectors";
import useMedia from "../../hooks/useMediaQuery";

export default function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const themeType = useSelector(selectTheme);
  const dispatch = useDispatch();
  const closeModal = () => {
    setNeedHelpOpenModal(false);
  };
  const [needHelpOpenModal, setNeedHelpOpenModal] = useState(false);
  useEffect(() => {
    dispatch(fetchBoard());
  }, [dispatch]);

  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };
  const handleStop = (e) => {
    e.stopPropagation();
  };

  const containerStyle = useMemo(
    () => ({
      height: `${windowHeight}px`,
    }),
    [windowHeight]
  );

  return (
    <div
      onClick={closeSideBar}
      className={clsx(css.backdrop, isSidebarOpen && css.isOpen)}
    >
      <div
        style={useMedia().isDesktop ? containerStyle : {}}
        onClick={handleStop}
        className={clsx(css.list, isSidebarOpen && css.isOpenn, css[themeType])}
      >
        <div className={css.box}>
          <div className={css.wrapper}>
            <div className={clsx(css.Logolist, css[themeType])}>
              <div className={clsx(css.LogoContainer, css[themeType])}>
                <Icon
                  id="icon-logo"
                  width="12"
                  height="16"
                  className={clsx(css.LogoSVG, css[themeType])}
                />
              </div>
              <h1 className={clsx(css.textLogo, css[themeType])}>Task Pro</h1>
            </div>
            <p className={clsx(css.listItem, css[themeType])}>My boards</p>
            <ButtonCreate />
          </div>

          <BoardList />
        </div>

        <div className={css.wrapper}>
          <NeedHelpInfo setNeedHelpOpenModal={setNeedHelpOpenModal} />
          <LogOut />
        </div>
        <NeedHelpModal isOpen={needHelpOpenModal} onRequestClose={closeModal} />
      </div>
    </div>
  );
}

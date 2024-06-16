import clsx from "clsx";
import ButtonCreate from "../Button Create/ButtonCreate";
import LogOut from "../LogOut/LogOut";
import css from "./SideBar.module.css";
import Icon from "../Icon/Icon";
import { NeedHelpInfo } from "../NeedHelp/NeedHelpInfo/NeedHelpInfo";
import BoardList from "../BoardList/BoardList";
import { useDispatch } from "react-redux";
import { fetchBoard } from "../../redux/features/boards/operations";
import { useEffect, useState } from "react";
import { NeedHelpModal } from "../NeedHelp/NeedHelpModal/NeedHelpModal";

export default function SideBar() {
  const themeType = "dark";
  const dispatch = useDispatch();
  const [needHelpOpenModal, setNeedHelpOpenModal] = useState(false);
  useEffect(() => {
    dispatch(fetchBoard());
  }, [dispatch]);
  return (
    <div className={clsx(css.backdrop, css.isOpen)}>
      <div className={clsx(css.list, css.isOpen, css[themeType])}>
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
        <NeedHelpModal
          isOpen={needHelpOpenModal}
          setNeedHelpOpenModal={setNeedHelpOpenModal}
        />
      </div>
    </div>
  );
}

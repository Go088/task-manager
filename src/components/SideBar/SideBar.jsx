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
   const dispatch= useDispatch()
   const[needHelpOpen,setNeedHelpOpen]=useState(false);
   const[needHelpOpenModal,setNeedHelpOpenModal]=useState(false);
   const handleOpen = () => setNeedHelpOpenModal(true);
    useEffect(() => {
        dispatch(fetchBoard())
      }, [dispatch]);
return (
    <div className={css.list}>
    <div className={css.Logolist}>
        <div className={css.LogoContainer}>
        <Icon id="icon-logo" width="12" height="16" className={css.LogoSVG} />
        </div>
        <h1 className={css.textLogo}>Task Pro</h1>
    </div>
    <p className={css.listItem}>My boards</p>

    <ButtonCreate />
    <BoardList/>
    <NeedHelpInfo  onClick={handleOpen}  />
    {needHelpOpenModal && <NeedHelpModal isOpen={needHelpOpen}  onClick={()=>handleOpen(false)}/>}
    <LogOut />
    </div>
)
}

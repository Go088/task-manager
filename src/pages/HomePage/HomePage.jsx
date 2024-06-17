import ScreenPage from "../../components/ScreenPage/ScreenPage";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [width,setWidth]= useState({width: window.innerWidth});
  const [isOpen,setIsOpen]=useState(false);

    useEffect(()=>{
      function handlResize() {
          setWidth ( {width: window.innerWidth})
          handleOpen()
      }
      window.addEventListener('resize', handlResize);
      return () => {
        window.removeEventListener('resize', handlResize);
      };

  },);


  function handleOpen() {
    if (width.width<"1440") {
      setIsOpen ( true)
    } else{
      setIsOpen ( false) 
    }
  
  }
  function openSideBar() {
    setIsOpen ( true)
  }

  return (
    <div>
      <Header handleOpen={openSideBar}/>
      <ScreenPage />
      <SideBar isOpen={isOpen}/>
    </div>
  );
}

import SideBar from "../../components/SideBar/SideBar";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.home}>
      <SideBar />
    </div>
  );
}

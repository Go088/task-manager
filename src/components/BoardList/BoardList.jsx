import { useSelector } from "react-redux"
import { selectBoards } from "../../redux/features/boards/selectors.js"
import css from "./BoardList.module.css"

import { Board } from "../Board/Board"


export default function BoardList(){
const boards = useSelector(selectBoards)

    return(
    <ul className={css.list}>
        {boards.map(({ _id, title ,icon}) => (
        <li key={_id}>
            <Board _id={_id} title={title} icon={icon} />
        </li>
        ))}
    </ul>

    )
}
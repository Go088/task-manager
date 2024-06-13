import { useSelector } from "react-redux"
import { selectBoards } from "../../redux/features/boards/selectors.js"
import css from "./BoardList.module.css"

import { Board } from "../Board/Board"


export default function BoardList(){
const boards = useSelector(selectBoards)
console.log({boards});

    return(
    <ul className={css.list}>
        {boards.map(({ id, title ,icons}) => (
        <li key={id}>
            <Board id={id} title={title} icons={icons} />
        </li>
        ))}
    </ul>

    )
}
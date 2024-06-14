// import { useDispatch, useSelector } from "react-redux"
// import {Icon} from "../Icon/Icon";
// import { changeTheme, selectTheme } from "../../redux/features/theme/themeSlice";
// import { useEffect, useState } from "react";
// import { fetchTheme } from "../../redux/features/theme/operations";

// export default function ThemeSwitcher() {
//     const dispatch = useDispatch();
//     useEffect(()=>{
//       dispatch(fetchTheme())
//     }, [dispatch])

//     const [isOpenSelect, setIsOpenSelect] = useState(false);
//     const theme = useSelector(selectTheme);
//     const error = useSelector((state) => state.error)

//     const showSelectOptions = () => {
//       setIsOpenSelect((prev)=>!prev)
//     }

//     const handleThemeChange = (newTheme) => {
//       dispatch(changeTheme(newTheme))
//   }

// return (
//     <div>
//         <div>
//         <div>
//           <p>Theme</p>
//           <Icon
//             onClick={showSelectOptions}
//             // className={clsx(css.selectThemeIcon, css[themeType])}
//             id="icon-arror_edit_prifile"
//             width="16"
//             height="16"
//           />
//           {isOpenSelect && (<select value={theme} onChange={(e) => dispatch(handleThemeChange(e.target.value))}>
//             <option value="light">Light</option>
//             <option value="violet">Violet</option>
//             <option value="dark">Dark</option>
//           </select>)}
//           {/* <ul className={clsx(css.themeList, css.isOpen, css[themeType])}>
//             <li className={clsx(css.themeListItem, css[themeType], css.active)}>
//               Light
//             </li>
//             <li className={clsx(css.themeListItem, css[themeType])}>Dark</li>
//             <li className={clsx(css.themeListItem, css[themeType])}>Violet</li>
//           </ul> */}
//           {error && <p>Error</p>}
//         </div>
//     </div>
//     </div>
// )
// }
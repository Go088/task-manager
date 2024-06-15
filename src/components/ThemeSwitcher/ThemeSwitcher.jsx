import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { changeTheme } from "../../redux/features/theme/operations";
import { selectTheme } from "../../redux/features/auth/selectors";
import { ThemeTypes } from "../../themeConstants";
import Select from "react-dropdown-select";

const ThemeSwitcer = () => {

  const currentTheme = useSelector(selectTheme) || ThemeTypes.DARK;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(changeTheme(currentTheme));
  // }, [dispatch, currentTheme]);

  const options = [
    { label: "Light", value: ThemeTypes.LIGTH },
    { label: "Violet", value: ThemeTypes.VIOLET },
    { label: "Dark", value: ThemeTypes.DARK },
  ];

  const handleThemeChange = (selectedOption) => {
    if (selectedOption.length > 0) {
      const newTheme = selectedOption[0].value;
      dispatch(changeTheme(newTheme)); // Записуємо нову тему в Redux-стор
    }
  };

  return (
    <div>
      <p>Theme</p>
      <Icon id="icon-arror_edit_prifile" width="16" height="16" />
      <Select
        name="select"
        options={options}
        values={[{ label: currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1), value: currentTheme }]} 
        onChange={handleThemeChange}
      ></Select>
    </div>
  );
};

export default ThemeSwitcer;

{
  /* <select
              value={themeType}
              onChange={(e) => dispatch(handleThemeChange(e.target.value))}
            >
              <option value={ThemeTypes.LIGTH}>Light</option>
              <option value={ThemeTypes.VIOLET}>Violet</option>
              <option value={ThemeTypes.DARK}>Dark</option>
            </select> */
}

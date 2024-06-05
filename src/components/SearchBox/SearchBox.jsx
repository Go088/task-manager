import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filtersSlice";

export default function SearchBox() {
  const searchContacts = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterContacts({ filter: e.target.value }));
  };

  return (
    <div className={css.wrap}>
      <label>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={searchContacts}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

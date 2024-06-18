import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import Icon from "../Icon/Icon";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/features/theme/selectors";

const Calendar = ({ onDateChange = new Date() }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const theme = useSelector(selectTheme);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(formatDate(date));
    setIsCalendarOpen(false);
  };

  const formatDate = (date) => {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const today = new Date();
  const todayFormatted = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return (
    <div className={theme}>
      <button
        className="btn"
        type="button"
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        aria-label="Select deadline date"
      >
        <div className="input">
          {selectedDate ? formatDate(selectedDate) : `Today, ${todayFormatted}`}
        </div>
        <Icon id="icon-vector" width="9" className="icon" />
      </button>

      {isCalendarOpen && (
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            calendarStartDay={1}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker-overrides.css";
import css from "./Calendar.module.css";
import Icon from "../Icon/Icon";

const Calendar = ({onDateChange = new Date()}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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
    <div className={css.wrap}>
      <div className={css.wrapPicker}>
        <p>
          {selectedDate ? formatDate(selectedDate) : `Today, ${todayFormatted}`}
        </p>
        <button
        type="button"
          className={css.button}
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          aria-label="Select deadline date"
        >
          <Icon id="icon-vector" width="9" className={css.icon} />
        </button>
        {isCalendarOpen && (
          <div className={css.datePickerWrap}>
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
    </div>
  );
};

export default Calendar;

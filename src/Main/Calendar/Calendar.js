import React, { useState } from "react";
import ClosedCalendar from "./ClosedCalendar/ClosedCalendar";
import OpenCalendar from "./OpenCalendar/OpenCalendar";
import style from "./Calendar.module.css";

function Calendar({ getNoteAtChosenDay }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <OpenCalendar
          setOpen={setOpen}
          getNoteAtChosenDay={getNoteAtChosenDay}
        />
      ) : (
        <ClosedCalendar setOpen={setOpen} />
      )}
    </>
  );
}

export default Calendar;

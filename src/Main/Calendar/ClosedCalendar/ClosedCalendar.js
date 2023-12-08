import React from "react";
import style from "./ClosedCalendar.module.css";

function ClosedCalendar({ setOpen }) {
  return (
    <div className={style.closedCalendar} onClick={() => setOpen(true)}>
      <p>Open calendar</p>
    </div>
  );
}

export default ClosedCalendar;

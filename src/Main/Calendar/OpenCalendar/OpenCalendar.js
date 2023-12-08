import React, { useState } from "react";
import { memo } from "react";
import style from "./OpenCalendar.module.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Mon", "Thu", "Wen", "Thue", "Fri", "Sat", "Sun"];

let date = new Date();
let monthNow = date.getMonth();
let yearNow = date.getFullYear();
let dayNow = date.getDate();

//thead creating

let header = days.map((day, index) => (
  <td className={style.headCalendarTableCell} key={index}>
    {day}
  </td>
));
let resHeader = <tr>{header}</tr>;

//tbody helping functions

function getLastDay(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekDay(year, month, arr) {
  return new Date(year, month, arr[0]).getDay();
}

function getLastWeekDay(year, month) {
  return new Date(year, month + 1, 0).getDay();
}

function createArrDates(count) {
  let arr = [];
  for (let i = 1; i < count + 1; i++) {
    arr.push(i);
  }

  return arr;
}

function editArrDates(arr, firstWeekDay, lastWeekDay) {
  if (firstWeekDay === 0) {
    for (let i = 0; i < 6; i++) {
      arr.unshift("");
    }
  } else {
    for (let i = 0; i < firstWeekDay - 1; i++) {
      arr.unshift("");
    }
  }

  for (let i = 0; i < 7 - lastWeekDay; i++) {
    arr.push("");
  }

  return arr;
}

function chuck(arr) {
  let res = [];
  let subArr = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      subArr.push(arr[j]);
    }
    res.push(subArr);
    arr.splice(0, 7);
    subArr = [];
  }
  return res;
}

function OpenCalendar({ setOpen, getNoteAtChosenDay }) {
  const [month, setMonth] = useState(monthNow);
  const [year, setYear] = useState(yearNow);
  const [body, setBody] = useState(createCalendar(yearNow, monthNow, true));

  function createCalendar(year, month, targetCurrentDay) {
    let arr = createArrDates(getLastDay(year, month));

    let firstWeekDay = getFirstWeekDay(year, month, arr);
    let lastWeekDay = getLastWeekDay(year, month);

    arr = chuck(editArrDates(arr, firstWeekDay, lastWeekDay));
    let res = buildTable(arr, targetCurrentDay);
    return res;
  }

  function buildTable(arr, targetCurrentDay) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].map(elem => {
        if (elem === "") {
          return <td className={style.calendarTableCellEmpty}>{elem}</td>;
        }
        if (elem === dayNow && targetCurrentDay === true) {
          return (
            <td
              className={style.calendarTableCellNow}
              onClick={() => {
                getNoteAtChosenDay(new Date(year, month, elem).getTime());
                setOpen(false);
              }}
            >
              {elem}
            </td>
          );
        }
        return (
          <td
            className={style.calendarTableCell}
            onClick={() => {
              getNoteAtChosenDay(new Date(year, month, elem).getTime());
              setOpen(false);
            }}
          >
            {elem}
          </td>
        );
      });
    }

    return arr.map(row => <tr>{row}</tr>);
  }

  function prevMonth() {
    let datePrev = new Date(year, month, 0);
    let prevMonth = datePrev.getMonth();
    let prevYear = datePrev.getFullYear();
    setBody(createCalendar(prevYear, prevMonth, false));

    setMonth(datePrev.getMonth());
    setYear(datePrev.getFullYear());
  }

  function nextMonth() {
    let dateNext = new Date(year, month + 2, 0);
    let nextMonth = dateNext.getMonth();
    let nextYear = dateNext.getFullYear();
    setBody(createCalendar(nextYear, nextMonth, false));

    setMonth(dateNext.getMonth());
    setYear(dateNext.getFullYear());
  }

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <button
          href="#"
          className={style.modalClose}
          onClick={() => setOpen(false)}
        >
          <svg
            id="closeModalWindow"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <div className={style.calendarNav}>
          <button className={style.calendarButton} onClick={() => prevMonth()}>
            <svg
              id="calendarButtons"
              fill="#000000"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M16.000,32.000 C7.178,32.000 -0.000,24.822 -0.000,16.000 C-0.000,7.178 7.178,-0.000 16.000,-0.000 C24.822,-0.000 32.000,7.178 32.000,16.000 C32.000,24.822 24.822,32.000 16.000,32.000 ZM16.000,2.000 C8.280,2.000 2.000,8.280 2.000,16.000 C2.000,23.720 8.280,30.000 16.000,30.000 C23.720,30.000 30.000,23.720 30.000,16.000 C30.000,8.280 23.720,2.000 16.000,2.000 ZM23.000,17.000 L11.414,17.000 L13.707,19.293 C14.098,19.684 14.098,20.316 13.707,20.707 C13.512,20.902 13.256,21.000 13.000,21.000 C12.744,21.000 12.488,20.902 12.293,20.707 L8.293,16.707 C8.201,16.615 8.128,16.505 8.077,16.382 C7.976,16.138 7.976,15.862 8.077,15.618 C8.128,15.495 8.201,15.385 8.293,15.293 L12.293,11.293 C12.684,10.902 13.316,10.902 13.707,11.293 C14.098,11.684 14.098,12.316 13.707,12.707 L11.414,15.000 L23.000,15.000 C23.552,15.000 24.000,15.448 24.000,16.000 C24.000,16.552 23.552,17.000 23.000,17.000 Z"></path>{" "}
              </g>
            </svg>
          </button>
          <h2>
            {months[month]} {year}
          </h2>
          <button className={style.calendarButton} onClick={() => nextMonth()}>
            <svg
              id="calendarButtons"
              fill="#000000"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M16.000,32.000 C7.178,32.000 -0.000,24.822 -0.000,16.000 C-0.000,7.178 7.178,-0.000 16.000,-0.000 C24.822,-0.000 32.000,7.178 32.000,16.000 C32.000,24.822 24.822,32.000 16.000,32.000 ZM16.000,2.000 C8.280,2.000 2.000,8.280 2.000,16.000 C2.000,23.720 8.280,30.000 16.000,30.000 C23.720,30.000 30.000,23.720 30.000,16.000 C30.000,8.280 23.720,2.000 16.000,2.000 ZM23.000,17.000 L11.414,17.000 L13.707,19.293 C14.098,19.684 14.098,20.316 13.707,20.707 C13.512,20.902 13.256,21.000 13.000,21.000 C12.744,21.000 12.488,20.902 12.293,20.707 L8.293,16.707 C8.201,16.615 8.128,16.505 8.077,16.382 C7.976,16.138 7.976,15.862 8.077,15.618 C8.128,15.495 8.201,15.385 8.293,15.293 L12.293,11.293 C12.684,10.902 13.316,10.902 13.707,11.293 C14.098,11.684 14.098,12.316 13.707,12.707 L11.414,15.000 L23.000,15.000 C23.552,15.000 24.000,15.448 24.000,16.000 C24.000,16.552 23.552,17.000 23.000,17.000 Z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
        <table className={style.calendarTable}>
          <thead>{resHeader}</thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  );
}

export default memo(OpenCalendar);

import React, { useState, useEffect } from "react";
import style from "./Clock.module.css";

const date = new Date();
let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();

let currentDate = (
  <p className={style.timer}>
    {date.toDateString()}
    {<br />}
    {hours.toString().length === 1 ? "0" + hours : hours}:
    {minutes.toString().length === 1 ? "0" + minutes : minutes}:
    {seconds.toString().length === 1 ? "0" + seconds : seconds}
  </p>
);

function Clock() {
  function updateTime() {
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    currentDate = (
      <>
        <div className={style.timer}>
          <span style={{}}>{date.toDateString()}</span>
          <span>
            {hours.toString().length === 1 ? "0" + hours : hours}:
            {minutes.toString().length === 1 ? "0" + minutes : minutes}:
            {seconds.toString().length === 1 ? "0" + seconds : seconds}
          </span>
        </div>
      </>
    );

    setTime(currentDate);
  }

  const [time, setTime] = useState(currentDate);

  useEffect(() => {
    const intervalID = setInterval(() => {
      updateTime();
      console.info(seconds);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  });

  return time;
}

export default Clock;

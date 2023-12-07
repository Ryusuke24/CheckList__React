import React from "react";
import style from "./DoneButton.module.css";

function DoneButton({ setDone, isDone }) {
  return (
    <button className={style.noteDoneBtn} onClick={() => setDone(!isDone)}>
      {" "}
      <svg
        width="24px"
        height="24px"
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
            d="M4 12.6111L8.92308 17.5L20 6.5"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
}

export default DoneButton;

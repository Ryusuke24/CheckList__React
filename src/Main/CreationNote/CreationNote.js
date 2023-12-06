import React, { useState } from "react";
import style from "./CreationNote.module.css";

function CreationNote({ addNote }) {
  const [value, setValue] = useState("Note");

  return (
    <>
      <div className={style.creationNote}>
        <label className={style.creationNoteLabel}>
          <span>Add name of note:</span>
          <input
            className={style.creationNoteInput}
            defaultValue={value}
            type="text"
            onChange={event => setValue(event.target.value)}
          />
        </label>
        <button
          className={style.creationNoteButton}
          onClick={() => addNote(value)}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Edit / Add_Plus_Circle">
                {" "}
                <path
                  id="Vector"
                  d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}

export default CreationNote;

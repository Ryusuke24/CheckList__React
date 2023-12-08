import React, { useState } from "react";
import DoneButton from "./DoneButton/DoneButton";
import NotReadyButton from "./NotReadyButton/NotReadyButton";
import style from "./ReadNote.module.css";

function ReadNote({
  index,
  id,
  name,
  isFinish,
  deleteNote,
  isEdit,
  setEdit,
  saveStateNote,
}) {
  const [isDone, setDone] = useState(isFinish);

  return (
    <div className={style.note} key={id}>
      <h2
        className={isDone ? style.lineThroughNoteName : style.noteName}
        onClick={() => setEdit(!isEdit)}
      >
        {name}
      </h2>
      {isDone ? (
        <NotReadyButton
          setDone={setDone}
          isDone={isDone}
          id={id}
          saveStateNote={saveStateNote}
        />
      ) : (
        <DoneButton
          setDone={setDone}
          isDone={isDone}
          id={id}
          saveStateNote={saveStateNote}
        />
      )}
      <button
        className={style.noteDeleteBtn}
        onClick={() => {
          deleteNote(index);
        }}
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 1024 1024"
          fill="#000000"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z"
              fill=""
            ></path>
            <path
              d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z"
              fill=""
            ></path>
            <path d="M328 340.8l32-31.2 348 348-32 32z" fill=""></path>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default ReadNote;

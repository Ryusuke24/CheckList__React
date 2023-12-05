import React, { useState } from "react";
import style from "./Note.module.css";

function Note({ index, id, name, isFinish, deleteNote }) {
  const [isDone, setDone] = useState(isFinish);
  return (
    <div className={style.note} key={id}>
      <h2 className={isDone ? style.lineThroughNoteName : style.noteName}>
        {name}
      </h2>
      <button className={style.noteDoneBtn} onClick={() => setDone(!isDone)}>
        {isDone ? "Not ready" : "Done!"}
      </button>
      <button
        className={style.noteDeleteBtn}
        onClick={() => {
          deleteNote(index);
        }}
      >
        deleteNote
      </button>
    </div>
  );
}

export default Note;

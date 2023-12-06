import React, { useState } from "react";
import style from "./ReadNote.module.css";

function ReadNote({ index, id, name, isFinish, deleteNote, isEdit, setEdit }) {
  const [isDone, setDone] = useState(isFinish);

  return (
    <div className={style.note} key={id}>
      <h2
        className={isDone ? style.lineThroughNoteName : style.noteName}
        onClick={() => setEdit(!isEdit)}
      >
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

export default ReadNote;

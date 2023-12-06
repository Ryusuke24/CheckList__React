import React, { useState } from "react";
import style from "./EditNote.module.css";

function EditNote({ id, name, editNote, isEdit, setEdit }) {
  const [value, setValue] = useState(name);

  return (
    <div className={style.note} key={id}>
      <input
        className={style.noteInput}
        defaultValue={name}
        onChange={event => setValue(event.target.value)}
      />
      <button
        className={style.noteSubmitBtn}
        onClick={() => {
          editNote(id, value);
          setEdit(!isEdit);
        }}
      >
        submit edit
      </button>
    </div>
  );
}

export default EditNote;

import React, { useState } from "react";
import style from "./Note.module.css";
import EditNote from "./EditNote/EditNote";
import ReadNote from "./ReadNote/ReadNote";

function Note({ index, id, name, isFinish, deleteNote, editNote }) {
  const [isEdit, setEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <EditNote
          id={id}
          editNote={editNote}
          isEdit={isEdit}
          setEdit={setEdit}
          name={name}
        />
      ) : (
        <ReadNote
          index={index}
          id={id}
          name={name}
          isFinish={isFinish}
          deleteNote={deleteNote}
          editNote={editNote}
          isEdit={isEdit}
          setEdit={setEdit}
        />
      )}
    </>
  );
}

export default Note;

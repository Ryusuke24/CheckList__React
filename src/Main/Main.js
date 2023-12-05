import React, { useState } from "react";
import { nanoid } from "nanoid";
import Note from "./Note/Note";
import style from "./Main.module.css";
import CreationNote from "./CreationNote/CreationNote";

const obj = [
  {
    id: nanoid(),
    name: "to do homework",
    isFinish: false,
  },
  {
    id: nanoid(),
    name: "learn react",
    isFinish: true,
  },
];

function Main() {
  function deleteNote(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  function addNote(value) {
    let copy = [...todos];
    let length = copy.length;
    copy[length] = {};
    copy[length]["id"] = nanoid();
    copy[length]["name"] = value;
    copy[length]["isFinish"] = false;
    setTodos(copy);
  }

  const [todos, setTodos] = useState(obj);

  const notes = todos.map((todo, index) => (
    <Note
      key={todo.id}
      index={index}
      id={todo.id}
      name={todo.name}
      isFinish={todo.isFinish}
      deleteNote={deleteNote}
    />
  ));

  return (
    <main className={style.main}>
      <CreationNote addNote={addNote} />
      {notes}
    </main>
  );
}

export default Main;

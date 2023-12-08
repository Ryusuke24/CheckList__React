import React, { useState } from "react";
import { nanoid } from "nanoid";
import Note from "./Note/Note";
import CreationNote from "./CreationNote/CreationNote";
import style from "./Main.module.css";
import Calendar from "./Calendar/Calendar";

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

const date = new Date();
const now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
let currentTime = now.getTime();

function Main() {
  function deleteNote(index) {
    let copy = [...todos];
    if (copy.length > 1) {
      setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
      console.log(copy);
      localStorage.setItem(currentTime, JSON.stringify(copy));
    } else {
      setTodos([]);
      localStorage.clear();
    }
  }

  function addNote(value) {
    let copy = [...todos];
    let length = copy.length;
    copy[length] = {};
    copy[length]["id"] = nanoid();
    copy[length]["name"] = value;
    copy[length]["isFinish"] = false;
    setTodos(copy);
    localStorage.setItem(currentTime, JSON.stringify(copy));
  }

  function editNote(id, value) {
    setTodos([
      ...todos.map(todo => {
        if (todo.id === id) {
          todo.name = value;

          return todo;
        }

        return todo;
      }),
    ]);
    let copy = [...todos];
    localStorage.setItem(currentTime, JSON.stringify(copy));
  }

  function saveStateNote(id) {
    setTodos([
      ...todos.map(todo => {
        if (todo.id === id) {
          todo.isFinish = !todo.isFinish;

          return todo;
        }

        return todo;
      }),
    ]);
    let copy = [...todos];
    localStorage.setItem(currentTime, JSON.stringify(copy));
  }

  function getNoteAtChosenDay(time) {
    currentTime = time;
    setTodos(JSON.parse(localStorage.getItem(currentTime)) || obj);
  }

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(currentTime)) || obj
  );
  const notes = todos.map((todo, index) => (
    <Note
      key={todo.id}
      index={index}
      id={todo.id}
      name={todo.name}
      isFinish={todo.isFinish}
      deleteNote={deleteNote}
      editNote={editNote}
      saveStateNote={saveStateNote}
    />
  ));

  return (
    <main className={style.main}>
      <div className={style.actionModule}>
        <CreationNote key={nanoid()} addNote={addNote} />
        <Calendar getNoteAtChosenDay={getNoteAtChosenDay} />
      </div>

      {notes}
    </main>
  );
}

export default Main;

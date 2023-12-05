import React from "react";
import logo from "./logo.svg";
import style from "./App.module.css";
import Header from "./Header/Header";

function App() {
  return (
    <div className={style.body}>
      <Header />
    </div>
  );
}

export default App;

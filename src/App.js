import React from "react";
import logo from "./logo.svg";
import style from "./App.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <div className={style.body}>
      <Header />
      <Main />
    </div>
  );
}

export default App;

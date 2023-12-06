import React from "react";
import style from "./App.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className={style.body}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Title from "./Title/Title";
import Clock from "./Clock/Clock";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Title />
      <Clock />
    </header>
  );
}

export default Header;

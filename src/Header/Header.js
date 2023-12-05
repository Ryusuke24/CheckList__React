import React from "react";
import Title from "./Title/Title";
import Clock from "./Clock/Clock";
import Image from "./Image/Image";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Image />
      <Title />
      <Clock />
    </header>
  );
}

export default Header;

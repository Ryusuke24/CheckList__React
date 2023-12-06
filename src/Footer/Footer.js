import React from "react";
import Contacts from "./Contacts/Contacts";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Contacts />
    </footer>
  );
}

export default Footer;

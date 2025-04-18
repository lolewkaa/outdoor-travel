'use client'
import React from "react";
import styles from "./style.module.css";
import { PropsPopup } from "./types";

const Popup: React.FC<PropsPopup> = ({ onClose, children }) => (
  <div className={styles.popup__container}>
    <div className={styles.popup}>{children}</div>
    <div onClick={onClose} className={styles.popup__overlay}></div>
  </div>
);

export default Popup;
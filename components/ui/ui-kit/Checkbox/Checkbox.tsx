import React from "react";
import styles from "./Checkbox.module.css";
import { PropsCheckbox } from "./types";

const Checkbox: React.FC<PropsCheckbox> = ({
  type, checked, onChange,
}) => (
  <div className={styles.checkBoxContainer}>
    <input
      className={styles.checkBoxInput}
      type={type}
      checked={checked}
      onChange={onChange}
    />
  </div>
);

export default Checkbox;
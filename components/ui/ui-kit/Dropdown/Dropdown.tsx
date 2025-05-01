"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.css";

interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  options: DropdownOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  position?: "bottom" | "top";
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onSelect,
  placeholder = "Выберите...",
  disabled = false,
  className = "",
  position = "bottom",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  return (
    <div
      ref={dropdownRef}
      className={`${styles.dropdown} ${className} ${
        disabled ? styles.disabled : ""
      }`}
    >
      <button
        className={styles.dropdownToggle}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <div className={styles.selectedContent}>
          <span>{selectedOption?.label || placeholder}</span>
        </div>
      </button>

      {isOpen && (
        <ul
          className={`${styles.dropdownMenu} ${styles[position]}`}
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.dropdownItem} ${
                selectedValue === option.value ? styles.selected : ""
              }`}
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={selectedValue === option.value}
            >
              {option.icon && (
                <span className={styles.iconWrapper}>{option.icon}</span>
              )}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

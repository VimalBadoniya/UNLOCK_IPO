"use client";
import { ReactElement } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  [key: string]: any;
}

export default function Button({
  label,
  onButtonClick,
  ...restProps
}: ButtonProps): ReactElement {
  return (
    <button
      className={styles.buttonWrapper}
      onClick={(e) => {
        onButtonClick(e);
      }}
      {...restProps}
    >
      {label}
    </button>
  );
}

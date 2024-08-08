"use client";
import { NAVBAR_ITEMS, NavbarItem } from "@/app/Constants/App.constant";
import React, { ReactElement } from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar(): ReactElement {
  function onButtonClick(): void {}
  return (
    <div className={styles.navbarContainer}>
      {NAVBAR_ITEMS.map((item: NavbarItem) => (
        <Button key={item.id} label={item.label} onButtonClick={onButtonClick}>
          {item.label}
        </Button>
      ))}
    </div>
  );
}

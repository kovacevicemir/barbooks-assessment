import React from "react";
import styles from "./header.module.css";

interface IHeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<IHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subtitle}</div>
    </div>
  );
};

export default Header;

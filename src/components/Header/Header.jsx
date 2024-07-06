import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

import Navbar from "./Navbar/Navbar";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <header className={`${styles.header} ${sticky ? styles.accent : ""}`}>
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

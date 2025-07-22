import React, { useState } from "react";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Daniela Tochi | Web3 & dApp Developer</div>
      
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>

      <div 
        className={styles.burger} 
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </header>
  );
};

export default Navbar;

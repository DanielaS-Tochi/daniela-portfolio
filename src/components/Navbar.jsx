import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Daniela Tochi | Web3 & dApp Developer</h1>
        <nav className={`${styles.nav} ${menuOpen ? styles.show : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/proyectos" onClick={closeMenu}>Proyectos</Link></li>
            <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
          </ul>
        </nav>
        <button className={styles.menuBtn} onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
        {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
      </div>
    </header>
  );
};

export default Navbar;

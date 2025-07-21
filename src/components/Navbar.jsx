import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoText}>Daniela Dev</span>
      </div>
      <nav className={styles.navLinks}>
        <a href="#home">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Navbar;

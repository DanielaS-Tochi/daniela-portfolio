import styles from '../styles/Home.module.css';
import avatar from '../assets/avatar.png';

function Home() {
  return (
    <main className={styles.hero} role="main">
      <img
        src={avatar}
        alt="Ilustración de Daniela con laptop, gato, cactus y pelota de fútbol"
        className={styles.avatar}
      />

      <h1 tabIndex="0">Desde Argentina al mundo.</h1>

      <p className={styles.subtitle} tabIndex="0">
        Desarrollo, Web3, IA y revolución personal.
      </p>

      <p className={styles.tagline} tabIndex="0">
        Construyendo puentes hacia el futuro descentralizado (y más allá) 🚀
      </p>
    </main>
  );
}

export default Home;

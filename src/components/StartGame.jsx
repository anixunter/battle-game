import styles from "./StartGame.module.css";

const StartGame = ({ setRoute }) => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Luffy vs Pirate</p>
      <button className={styles.button} onClick={() => setRoute("battle")}>
        Start Game
      </button>
    </div>
  );
};

export default StartGame;

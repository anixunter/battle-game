import styles from "./EndMenu.module.css";

const EndMenu = ({ winner, setRoute }) => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>{winner.name} has won!</p>
      <button className={styles.button} onClick={() => setRoute("battle")}>
        Play Again
      </button>
    </div>
  );
};

export default EndMenu;

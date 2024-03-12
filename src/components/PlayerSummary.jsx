import styles from "./PlayerSummary.module.css";
import Bar from "./Bar";

const PlayerSummary = ({ main, name, level, health, maxHealth }) => {
  return (
    <div
      className={styles.main}
      style={{ background: main ? "#eb1c6b" : "#a81b72" }} //main is the props which means main character or not
    >
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.level}>Lvl: {level}</div>
      </div>
      <div className={styles.health}>
        <Bar health={health} maxHealth={maxHealth} />
      </div>
    </div>
  );
};

export default PlayerSummary;

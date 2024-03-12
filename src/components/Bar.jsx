import styles from "./Bar.module.css";

const Bar = ({ health, maxHealth }) => {
  return (
    <div className={styles.main}>
      <div className={styles.label}>HP</div>
      <div className={styles.max}>
        <div
          className={styles.value}
          style={{ width: `${(health / maxHealth) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Bar;

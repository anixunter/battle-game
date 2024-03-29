import styles from "./BattleMenu.module.css";

const BattleMenu = ({ onAttack, onMagic, onHeal }) => {
  return (
    <div className={styles.main}>
      <div onClick={onAttack} className={styles.option}>
        Attack
      </div>
      <div onClick={onMagic} className={styles.option}>
        Magic
      </div>
      <div onClick={onHeal} className={styles.option}>
        Heal
      </div>
    </div>
  );
};

export default BattleMenu;

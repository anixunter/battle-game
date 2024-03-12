import styles from "./BattleAnnouncer.module.css";
import { useTypedMessage } from "../hooks/useTypedMessage";

const BattleAnnouncer = ({ message, turn }) => {
  const typedMessage = useTypedMessage(message);
  return (
    <div className={turn === 0 ? styles.luffy : styles.pirate}>
      <div className={styles.message}>{typedMessage} </div>
    </div>
  );
};

export default BattleAnnouncer;

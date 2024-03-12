import styles from "./BattleMode.module.css";
import { useEffect, useState } from "react";
import { wait } from "../helpers.js";
import { playerStats, opponentStats } from "../characters";
import { useBattleSequence } from "../hooks/useBattleSequence";
import PlayerSummary from "./PlayerSummary";
import BattleMenu from "./BattleMenu";
import BattleAnnouncer from "./BattleAnnouncer";

const BattleMode = ({ onGameEnd }) => {
  const [sequence, setSequence] = useState({}); //sequence is object of {mode and turn} when turn = 0 luffy turn, turn = 1 pirate turn

  const {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    playerAnimation,
    opponentAnimation,
    announcerMessage,
  } = useBattleSequence(sequence);

  useEffect(() => {
    if (playerHealth === 0 || opponentHealth === 0) {
      (async () => {
        await wait(1000);
        onGameEnd(playerHealth === 0 ? opponentStats : playerStats);
      })();
    }
  }, [playerHealth, opponentHealth, onGameEnd]);

  return (
    <>
      <div className={styles.opponent}>
        <div className={styles.summary}>
          <PlayerSummary
            main={false}
            health={opponentHealth}
            name={opponentStats.name}
            level={opponentStats.level}
            maxHealth={opponentStats.maxHealth}
          />
        </div>
      </div>

      <div className={styles.characters}>
        <div className={styles.gameHeader}>
          {playerStats.name} vs {opponentStats.name}
        </div>
        <div className={styles.gameImages}>
          <div className={styles.playerSprite}>
            <img
              alt={playerStats.name}
              src={playerStats.img}
              className={styles[playerAnimation]}
            />
          </div>
          <div className={styles.opponentSprite}>
            <img
              alt={opponentStats.name}
              src={opponentStats.img}
              className={styles[opponentAnimation]}
            />
          </div>
        </div>
      </div>

      <div className={styles.user}>
        <div className={styles.summary}>
          <PlayerSummary
            main={true}
            health={playerHealth}
            name={playerStats.name}
            level={playerStats.level}
            maxHealth={playerStats.maxHealth}
          />
        </div>

        <div className={styles.hud}>
          <div className={styles.hudChild}>
            <BattleAnnouncer
              turn={turn}
              message={announcerMessage || `${playerStats.name}'s turn first!`}
            />
          </div>
          {!inSequence && turn == 0 && (
            <div className={styles.hudChild}>
              <BattleMenu
                onHeal={() => setSequence({ mode: "heal", turn: 0 })}
                onMagic={() => setSequence({ mode: "magic", turn: 0 })}
                onAttack={() => setSequence({ mode: "attack", turn: 0 })}
              />
            </div>
          )}
          {!inSequence && turn == 1 && (
            <div className={styles.hudChild}>
              <BattleMenu
                onHeal={() => setSequence({ mode: "heal", turn: 1 })}
                onMagic={() => setSequence({ mode: "magic", turn: 1 })}
                onAttack={() => setSequence({ mode: "attack", turn: 1 })}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BattleMode;

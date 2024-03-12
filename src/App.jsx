import { useState, useEffect } from "react";
import styles from "./App.module.css";
import StartGame from "./components/StartGame";
import BattleMode from "./components/BattleMode";
import EndMenu from "./components/EndMenu";

function App() {
  const [route, setRoute] = useState("start");
  const [winner, setWinner] = useState();

  useEffect(() => {
    if (route === "battle") {
      setWinner(undefined);
    }
  }, [route]);

  return (
    <div className={styles.main}>
      {route === "start" && <StartGame setRoute={setRoute} />}

      {route === "battle" && (
        <BattleMode
          onGameEnd={(winner) => {
            setWinner(winner);
            setRoute("gameover");
          }}
        />
      )}

      {route === "gameover" && <EndMenu winner={winner} setRoute={setRoute} />}
    </div>
  );
}

export default App;

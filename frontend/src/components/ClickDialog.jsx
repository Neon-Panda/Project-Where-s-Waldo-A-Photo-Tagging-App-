import bottleCap from "../assets/bottle-cap.png";
import dartBoard from "../assets/dart-board.png";
import umbrella from "../assets/umbrella.png";
import styles from "./ClickDialog.module.css";

export default function ClickDialog({ positionCoords }) {
  function handleSubmit(objectName) {
    fetch("http://localhost:3500/api/checkobject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ positionCoords, objectName }),
    });
  }
  return (
    <div
      className={styles.dialogForm}
      style={{ position: "absolute", transform: `translate(${positionCoords.x}px, ${positionCoords.y}px)` }}
    >
      <button className={styles.button} onClick={() => handleSubmit("bottle-cap")}>
        <img src={bottleCap} />
      </button>
      <button className={styles.button} onClick={() => handleSubmit("dart-board")}>
        <img src={dartBoard} />
      </button>
      <button className={styles.button} onClick={() => handleSubmit("umbrella")}>
        <img src={umbrella} />
      </button>
    </div>
  );
}

import bottleCap from "../assets/bottle-cap.png";
import dartBoard from "../assets/dart-board.png";
import umbrella from "../assets/umbrella.png";
import styles from "./ClickDialog.module.css";

export default function ClickDialog({ positionCoords }) {
  console.log("inside click dialog");
  console.log(positionCoords);
  return (
    <form
      className={styles.dialogForm}
      style={{ position: "absolute", transform: `translate(${positionCoords.x}px, ${positionCoords.y}px)` }}
    >
      <button className={styles.button}>
        <img src={bottleCap} />
      </button>
      <button className={styles.button}>
        <img src={dartBoard} />
      </button>
      <button className={styles.button}>
        <img src={umbrella} />
      </button>
    </form>
  );
}

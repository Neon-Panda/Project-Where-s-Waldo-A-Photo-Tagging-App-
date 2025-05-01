import "./App.css";
import { useEffect, useState } from "react";
import ClickDialog from "./components/ClickDialog";

function App() {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [positionCoords, setPositionCoords] = useState({});

  async function handleClick(event) {
    setPositionCoords({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
    setModal(modal === true ? false : true);
  }

  useEffect(() => {
    fetch("http://localhost:3500/api/"),
      {
        headers: {
          "Content-Type": "application/json",
        },
        credenials: "include",
        withCredentials: true,
      };
    console.log("INSIDE USE EFFECT");
  }, []);

  return (
    <main onClick={(event) => handleClick(event)}>
      {modal === true && <ClickDialog positionCoords={positionCoords} />}
      <p>Header example with score</p>
      <img
        className="main-image"
        src="src/assets/hidden-object-art-hidden-image-art-hidden-object-game-developers-hidden-picture-drawings-environmental-artist-junes-journey-wooga-merge.jpg"
      />
    </main>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import ClickDialog from "./components/ClickDialog";

function App() {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [positionCoords, setPositionCoords] = useState({});

  function handleClick(event) {
    // console.log("x: " + event.nativeEvent.offsetX);
    // console.log("y: " + event.nativeEvent.offsetY);
    setModal(modal === true ? false : true);
    setPositionCoords({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
  }

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

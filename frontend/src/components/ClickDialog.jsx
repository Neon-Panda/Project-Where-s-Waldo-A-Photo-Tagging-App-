export default function ClickDialog({ positionCoords }) {
  console.log("inside click dialog");
  console.log(positionCoords);
  return (
    <div style={{ position: "absolute", transform: `translate(${positionCoords.x}px, ${positionCoords.y}px)` }}>
      <p>Example Dialong</p>
      <form>
        <button>Character 1</button>
        <button>Character 2</button>
        <button>Character 3</button>
      </form>
    </div>
  );
}

export default function NewGameDisplay({ onClick }) {
  return (
    <div className="new-game-display flex">
      <h1 className="red-h1">Ready,</h1>
      <h1 className="green-h1">Steady....</h1>
      <button className="gold-button" onClick={onClick}>
        Cook!
      </button>
    </div>
  );
}

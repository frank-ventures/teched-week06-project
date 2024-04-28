export default function BigAinsleyButton({ increaseAinsleys }) {
  return (
    <img
      className="big-ainsley-button"
      src="/assets/images/ainsley-yeah-boi-cartoon-square.png"
      alt="Main game clicker button of Ainsley Harriots face"
      onClick={increaseAinsleys}
    ></img>
  );
}

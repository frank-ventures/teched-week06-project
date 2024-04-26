import BigAinsleyButton from "./BigAinsleyButton";
import MainCounter from "./Counter";

export default function MainGame({ harriotsNumber, increaseAinsleys }) {
  return (
    <>
      <h1>Let&apos;s Get Cooking!</h1>
      <MainCounter harriotsNumber={harriotsNumber} />
      <BigAinsleyButton increaseAinsleys={increaseAinsleys} />
    </>
  );
}

import BigAinsleyButton from "./BigAinsleyButton";
import MainCounter from "./Counter";

export default function MainGame({
  harriotsNumber,
  harriotsPerSecond,
  increaseAinsleys
}) {
  return (
    <>
      <h1>Let&apos;s Get Cooking!</h1>
      <MainCounter
        harriotsNumber={harriotsNumber}
        harriotsPerSecond={harriotsPerSecond}
      />
      <BigAinsleyButton increaseAinsleys={increaseAinsleys} />
    </>
  );
}

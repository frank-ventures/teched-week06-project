export default function BigAinsleyButton({ increaseAinsleys }) {
  function clickAnimation(event) {
    increaseAinsleys();
    const clickAnimation = document.createElement("img");
    clickAnimation.src = "./assets/images/ainsley-particles-medium.png";
    clickAnimation.className = "float-animation";

    // Sets the starting position.
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    clickAnimation.style.left = `${cursorX - 80}px`;
    clickAnimation.style.top = `${cursorY - 80}px`;

    //Puts it on the page.
    document.body.appendChild(clickAnimation);

    // Makes sure it disappears afterwards! Bug fix.
    setTimeout(() => {
      clickAnimation.remove();
    }, 950);
  }

  return (
    <img
      className="big-ainsley-button"
      src="/assets/images/ainsley-yeah-boi-cartoon-square.png"
      alt="Main game clicker button of Ainsley Harriots face"
      // onClick={increaseAinsleys}
      onClick={clickAnimation}
    ></img>
  );
}

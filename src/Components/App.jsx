import { useState, useEffect } from "react";
import "/src/style/App.css";
import NewGameDisplay from "./NewGameDisplay";
import MainGame from "./MainGame";
// import BigAinsleyButton from "./BigAinsleyButton";
//  We might separate the timer later
// import Timer from "./Timer";

// --- --- --- ---
// Audio
// --- --- --- ---
const readyCook = new Audio(
  "./src/assets/sounds/ainsley-ready-steady-cook.mp3"
);
const stopCooking = new Audio(
  "./src/assets/sounds/ainsley-stop-cooking-applause.mp3"
);
// const yeBoi = new Audio("src/assets/sounds/ainsley-ye-boi.mp3");
// const redTomatah = new Audio("src/assets/sounds/ainsley-red-tomatah.mp3");
// const greenPepper = new Audio("src/assets/sounds/ainsley-green-pepper.mp3");

export default function App() {
  // --- --- --- ---
  // Main Variables
  // --- --- --- ---
  // harriotsNumber is our main 'Total Cookies'
  const [harriotsNumber, setHarriotsNumber] = useState(100);
  //  harriotsPerSecond the number of Harriots the user gets per second
  const [harriotsPerSecond, setHarriotsPerSecond] = useState(1);
  const [extraAinsleys, setExtraAinsleys] = useState([]);

  // --- --- --- ---
  // Upgrades
  // --- --- --- ---
  const upgrades = [
    {
      id: 1,
      name: "Green Pepper",
      cost: 10,
      increaseValue: 1,
      imageSource: "./src/assets/images/green-pepper.png",
      audio: new Audio("./src/assets/sounds/ainsley-green-pepper.mp3")
    },
    {
      id: 2,
      name: "Red Tomatah",
      cost: 100,
      increaseValue: 10,
      imageSource: "./src/assets/images/red-tomato.png",
      audio: new Audio("./src/assets/sounds/ainsley-red-tomatah.mp3")
    },
    {
      id: 5,
      name: "Extra Ainsley",
      cost: 100,
      increaseValue: "Secret",
      imageSource: "./src/assets/images/ainsley-yeah-boi-cartoon-square.png",
      audio: new Audio("./src/assets/sounds/ainsley-ye-boi.mp3"),
      onclick: addExtraAinsleys
    }
  ];

  // --- --- --- ---
  // This timer happens every second, and adds the 'harriotsPerSecond' to the 'harriotsNumber'.
  // --- --- --- ---

  useEffect(() => {
    console.log("effect has been called");
    // setHarriotsNumber((currentHarriots) => currentHarriots + harriotsPerSecond);
    console.log("TimerClean component useEffect callback");
    const interval = setInterval(() => {
      // console.log("interval has been called");
      setHarriotsNumber(
        (currentHarriots) => currentHarriots + harriotsPerSecond
      );
      // console.log(harriotsPerSecond);
    }, 1000);

    return () => {
      console.log("TimerClean component useEffect cleanup");
      clearInterval(interval);
    };
  }, [harriotsPerSecond]);

  // -- Timer ends here --

  // --- --- --- ---
  // Main 'Cookie' button. When you click Ainsley, you get One Harriot
  // --- --- --- ---
  function increaseAinsleys() {
    setHarriotsNumber((currentCount) => {
      return currentCount + 1;
    });
  }
  // --- --- --- ---
  // Main Upgrade function. Takes the numbers passed in from the button.
  // --- --- --- ---
  function increaseHPS(string, upgradeCost, upgradeValue, audio) {
    console.log(string, upgradeCost, upgradeValue);

    if (harriotsNumber > upgradeCost - 1) {
      setHarriotsNumber((currentNumber) => currentNumber - upgradeCost);
      setHarriotsPerSecond(harriotsPerSecond + upgradeValue);
      audio.play();
    }
  }

  // --- --- --- ---
  //   This is where we use a toggle to start the game
  // --- --- --- ---
  const [showMainGame, setShowMainGame] = useState(false);

  function handleShowMainGame() {
    showMainGame
      ? (stopCooking.play(), setHarriotsNumber(harriotsNumber))
      : (readyCook.play(), setHarriotsNumber(0), setHarriotsPerSecond(0));
    setShowMainGame(!showMainGame);
  }

  function addExtraAinsleys() {
    // If the user can afford the cosmetic, spinning Ainsley Disc:
    if (harriotsNumber > 100) {
      // Take some Harriots as cost:
      setHarriotsNumber((currentHarriots) => currentHarriots - 100);
      // And add another image source to the array. Bit yucky but it works
      setExtraAinsleys([
        ...extraAinsleys,
        "src/assets/images/ainsley-yeah-boi-cartoon-square.png"
      ]);
    }
  }

  // --- --- --- ---
  // Main Component chunk
  // --- --- --- ---
  return (
    <>
      {!showMainGame ? (
        <NewGameDisplay onClick={handleShowMainGame} />
      ) : (
        <>
          <div className="extra-ainsley-section">
            {extraAinsleys.map((ainsley, index) => {
              return (
                <img className="small-ainsley" key={index} src={ainsley} />
              );
            })}
          </div>
          <audio
            id="gorillaz-player"
            src="src/assets/sounds/gorillaz-192000.mp3"
            controls
            loop
          ></audio>
          <p> Play some phat beats but turn it down</p>
          <MainGame
            harriotsNumber={harriotsNumber}
            harriotsPerSecond={harriotsPerSecond}
            increaseAinsleys={increaseAinsleys}
            onClick={handleShowMainGame}
          />

          <p>Upgrade Per Second : {harriotsPerSecond}</p>
          <ListComponent />
          {/* put your upgrade buttons in their own component */}
          <ul>
            {upgrades.map((upgrade) => {
              console.log(upgrade);
              return (
                <li key={upgrade.name + upgrade.id}>
                  <img
                    src={upgrade.imageSource}
                    className="upgrade-icon"
                    onClick={
                      upgrade.onclick
                        ? upgrade.onclick
                        : () =>
                            increaseHPS(
                              `${upgrade.name}`,
                              upgrade.cost,
                              upgrade.increaseValue,
                              upgrade.audio
                            )
                    }
                  />
                  {upgrade.name}, Costs: {upgrade.cost} Gets you:{" "}
                  {upgrade.increaseValue}
                </li>
              );
            })}
          </ul>
          {/* 
          <img
            src="src/assets/images/ainsley-yeah-boi-cartoon-square.png"
            onClick={addExtraAinsleys}
          /> */}

          {/* <img
            onClick={() => increaseHPS("red", 10)}
            className="upgrade-icon"
            src="src/assets/images/red-tomato.png"
          />

          <img
            onClick={() => increaseHPS("green", 10)}
            className="upgrade-icon"
            src="src/assets/images/green-pepper.png"
          /> */}
        </>
      )}
    </>
  );
}

function ListComponent(props) {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}

// --- --- --- ---
// Imports
// --- --- --- ---
import { useState, useEffect } from "react";
import "/src/style/App.css";
import NewGameDisplay from "./NewGameDisplay";
import MainGame from "./MainGame";
import UpgradeSection from "./UpgradeSection";
import ExtraAinsleySection from "./ExtraAinsleySection";

// --- --- --- ---
// Audio
// --- --- --- ---
const readyCook = new Audio("/assets/sounds/ainsley-ready-steady-cook.mp3");
const stopCooking = new Audio(
  "/assets/sounds/ainsley-stop-cooking-applause.mp3"
);
const beautiful = new Audio("/assets/sounds/ainsley-thats-beautiful.mp3");
const yeBoi = new Audio("/assets/sounds/ainsley-ye-boi.mp3");

export default function App() {
  // --- --- --- ---
  // User Stats
  // Initialise a variable to either be storedStats, or a default startingStats.
  // --- --- --- ---
  let startingUserStats;
  const storedUserStats = JSON.parse(localStorage.getItem("userStats"));
  // If there are stored stats, we'll use those, and pass them into userStats. If not, we'll initiate default ones to begin.
  if (storedUserStats) {
    startingUserStats = storedUserStats;
  } else {
    startingUserStats = {
      harriotsNumber: 0,
      harriotsPerSecond: 0,
      greenPeppers: 0,
      redTomatahs: 0,
      palletKnives: 0,
      quickieBag: 0,
      extraAinsleys: ["/assets/images/ainsley-yeah-boi-cartoon-square.png"],
      hasFiveHarriots: false,
      showMainGame: false
    };
  }

  const [userStats, setUserStats] = useState(startingUserStats);

  // --- --- --- ---
  // Main Variables
  // --- --- --- ---
  // harriotsNumber is our main 'Total Cookies'
  const [harriotsNumber, setHarriotsNumber] = useState(
    startingUserStats.harriotsNumber
  );
  //  harriotsPerSecond the number of Harriots the user gets per second
  const [harriotsPerSecond, setHarriotsPerSecond] = useState(
    startingUserStats.harriotsPerSecond
  );
  // extraAinsleys is a weird implementation (of an array, of strings, of image pathways) to allow the user to 'buy' extra spinning images for their background
  // I'm not proud of it but it works.
  const [extraAinsleys, setExtraAinsleys] = useState(
    startingUserStats.extraAinsleys
  );

  // --- --- --- ---
  // Upgrades object, available to the user
  // --- --- --- ---
  const upgrades = [
    {
      id: 1,
      name: "Green Pepper",
      upgradeName: "greenPeppers",
      cost: 10,
      increaseValue: 1,
      imageSource: "/assets/images/green-pepper.png",
      audio: new Audio("/assets/sounds/ainsley-green-pepper.mp3")
    },
    {
      id: 2,
      name: "Red Tomatah",
      upgradeName: "redTomatahs",
      cost: 50,
      increaseValue: 10,
      imageSource: "/assets/images/red-tomato.png",
      audio: new Audio("/assets/sounds/ainsley-red-tomatah.mp3")
    },
    {
      id: 3,
      name: "Pallet Knife",
      upgradeName: "palletKnives",
      cost: 100,
      increaseValue: 10,
      imageSource: "/assets/images/pallet-knife.png",
      audio: new Audio("/assets/sounds/ainsley-pallet-knife-nice-and-hot.mp3")
    },
    {
      id: 4,
      name: "Quickie Bag",
      upgradeName: "quickieBag",
      cost: 500,
      increaseValue: 50,
      imageSource: "/assets/images/quickie-bag.png",
      audio: new Audio("/assets/sounds/ainsley-quickie-bag.mp3")
    },
    {
      id: 5,
      name: "Extra Ainsley",
      upgradeName: "extraAinsleys",
      cost: 100,
      increaseValue: "Another Spinning Ainsley",
      imageSource: "/assets/images/ainsley-yeah-boi-cartoon-square.png",
      audio: new Audio("/assets/sounds/ainsley-ye-boi.mp3"),
      onclick: addExtraAinsleys,
      argument: "audio"
    }
  ];

  // --- --- --- ---
  // This timer happens every second, and adds the 'harriotsPerSecond' to the 'harriotsNumber'.
  // --- --- --- ---
  useEffect(() => {
    const interval = setInterval(() => {
      setHarriotsNumber(
        (currentHarriots) => currentHarriots + harriotsPerSecond
      );
      updateUserStorage();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [harriotsPerSecond, updateUserStorage]);
  // -- Timer ends here --

  // --- --- --- ---
  // Main 'Cookie' button. When you click the Big Ainsley, you get One Harriot.
  // Maybe the first time in history that's ever been written.
  // --- --- --- ---
  function increaseAinsleys() {
    setHarriotsNumber((currentCount) => {
      return currentCount + 1;
    });
    if (!userStats.hasFiveHarriots) {
      if (harriotsNumber > 3) {
        userStats.hasFiveHarriots = true;
      }
    }
  }

  // --- --- --- ---
  // Main Upgrade function. Takes the properties passed in from the button. Also updates the userStats.
  // --- --- --- ---
  function increaseHPS(string, upgradeCost, upgradeValue, audio, upgradeName) {
    // Can they afford it?
    if (harriotsNumber > upgradeCost - 1) {
      // First increase the amount in the userStats object:
      setUserStats((prevUserStats) => ({
        ...prevUserStats,
        [upgradeName]: prevUserStats[upgradeName] + 1
      }));
      // Then subtract some Harriots as payment:
      setHarriotsNumber((currentNumber) => currentNumber - upgradeCost);
      //  Then increase the Harriots per second with the value of the upgrade:
      setHarriotsPerSecond(harriotsPerSecond + upgradeValue);
      // And play some 'Ye boi' goodness, as per the object.
      audio.play();
    }
  }

  // --- --- --- ---
  //   This is where we use a toggle to start the game, and check if the user has already started
  // --- --- --- ---

  function handleShowMainGame() {
    // Lets us reset the user stats
    const newGameUserStats = {
      harriotsNumber: 0,
      harriotsPerSecond: 0,
      greenPeppers: 0,
      redTomatahs: 0,
      palletKnives: 0,
      quickieBag: 0,
      extraAinsleys: ["/assets/images/ainsley-yeah-boi-cartoon-square.png"],
      hasFiveHarriots: false,
      showMainGame: false
    };
    // Does a check to see if the user has started or not
    if (userStats.showMainGame) {
      console.log(userStats);
      setUserStats((prevUserStats) => ({
        ...prevUserStats,
        showMainGame: !prevUserStats.showMainGame
      }));
      stopCooking.play();
      setUserStats(newGameUserStats);
      setHarriotsNumber(0);
      setHarriotsPerSecond(0);
      setExtraAinsleys([]);
      console.log(userStats);
    } else {
      readyCook.play();
      setUserStats((prevUserStats) => ({
        ...prevUserStats,
        showMainGame: !prevUserStats.showMainGame
      }));

      setExtraAinsleys((prevExtraAinsleys) => [
        ...prevExtraAinsleys,
        "/assets/images/ainsley-yeah-boi-cartoon-square.png"
      ]);
    }
  }

  // --- --- --- ---
  //   This puts extra small spinning Ainsleys into an array, to be displayed on the page.
  // --- --- --- ---
  function addExtraAinsleys() {
    // If the user can afford the cosmetic spinning Ainsley Disc:
    if (harriotsNumber > 99) {
      yeBoi.play();
      // Take some Harriots as cost:
      setHarriotsNumber((currentHarriots) => currentHarriots - 100);
      // And add another image source to the array, and user storage. Bit yucky but it works:
      setExtraAinsleys((prevExtraAinsleys) => [
        ...prevExtraAinsleys,
        "/assets/images/ainsley-yeah-boi-cartoon-square.png"
      ]);
      setUserStats((prevUserStats) => ({
        ...prevUserStats,
        extraAinsleys: [
          ...prevUserStats.extraAinsleys,
          "/assets/images/ainsley-yeah-boi-cartoon-square.png"
        ]
      }));
    }
  }

  function updateUserStorage() {
    if (harriotsNumber > 30 && harriotsNumber % 150 === 0) {
      beautiful.play();
    }
    setUserStats((prevUserStats) => {
      const updatedUserStats = {
        ...prevUserStats,
        harriotsNumber: harriotsNumber,
        harriotsPerSecond: harriotsPerSecond
      };
      localStorage.setItem("userStats", JSON.stringify(updatedUserStats));

      return updatedUserStats;
    });
  }

  // --- --- --- ---
  // Main Component chunk
  // --- --- --- ---
  return (
    <>
      <div className="overlay"></div>
      {!userStats.showMainGame ? (
        <NewGameDisplay onClick={handleShowMainGame} />
      ) : (
        <div className="main-app flex">
          <ExtraAinsleySection extraAinsleys={extraAinsleys} />
          <div className="audio-section">
            {/* I got the cool, I got the cool shoe shine. */}
            <audio
              id="gorillaz-player"
              src="/assets/sounds/gorillaz-192000-volume.mp3"
              controls
              loop
            ></audio>
            <p> Play some phat beats.</p>
          </div>
          <MainGame
            harriotsNumber={harriotsNumber}
            harriotsPerSecond={harriotsPerSecond}
            increaseAinsleys={increaseAinsleys}
          />
          <p>
            <span className="harriots-per-second">{harriotsPerSecond}</span>{" "}
            Ħarriots Per Second
          </p>
          {userStats.hasFiveHarriots ? (
            <>
              <UpgradeSection
                upgrades={upgrades}
                increaseHPS={increaseHPS}
                userStats={userStats}
              />
            </>
          ) : (
            <>
              <h2 className="click-his-face">Click his face</h2>
              <p>...and play some tunes at the top.</p>
            </>
          )}
          <button className="reset-button" onClick={handleShowMainGame}>
            Reset your game
          </button>
          <footer>
            <a href="https://www.linkedin.com/in/frankie-shrieves/">Frankie</a>,{" "}
            <a href="https://github.com/frank-ventures/teched-week06-project">
              Github
            </a>
            , Ainsley and stuff
          </footer>
        </div>
      )}
    </>
  );
}

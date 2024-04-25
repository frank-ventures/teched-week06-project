import { useState, useEffect } from "react";

export default function Timer(userCookiesPerSecond) {
  console.log("Timer component called");
  const [harriotsNumber, setHarriotsNumber] = useState(0);
  console.log(harriotsNumber);

  useEffect(() => {
    console.log("TimerClean component useEffect callback");
    const interval = setInterval(() => {
      setHarriotsNumber((currentCount) => currentCount + userCookiesPerSecond);
    }, 1000);

    return () => {
      console.log("TimerClean component useEffect cleanup");
      clearInterval(interval);
    };
  }, [userCookiesPerSecond]);

  return harriotsNumber;
}

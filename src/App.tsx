import { useEffect, useState } from "react";
import "./App.css";

// Date for July 18, 2024 at 6:45 PM mountain daylight time
const finalDate = new Date("2024-07-18T18:45:00-06:00");

// Function that takes in a number and number of digits as parameters, and returns a string version of the number with leading zeros
function zeroPad(num: number, places: number) {
  return String(num).padStart(places, "0");
}

function getTimeRemaining() {
  const now = new Date();
  let timeRemaining = finalDate.getTime() - now.getTime();

  if (timeRemaining < 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
    };
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  timeRemaining %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  timeRemaining %= 1000 * 60 * 60;

  const minutes = Math.floor(timeRemaining / (1000 * 60));
  timeRemaining %= 1000 * 60;

  const seconds = Math.floor(timeRemaining / 1000);
  timeRemaining %= 1000;

  const milliseconds = Math.floor(timeRemaining);
  const microseconds = (timeRemaining % 1) * 1000;

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
    microseconds: microseconds,
  };
}

function App() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 50);

    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <h2>{zeroPad(timeRemaining.days, 2)} days</h2>
      <h3>{zeroPad(timeRemaining.hours, 2)} hours</h3>
      <h4>{zeroPad(timeRemaining.minutes, 2)} minutes</h4>
      <h5>{zeroPad(timeRemaining.seconds, 2)} seconds</h5>
      <h6>{zeroPad(timeRemaining.milliseconds, 3)} milliseconds</h6>
    </div>
  );
}

export default App;

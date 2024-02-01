import React, { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";

function formatSeconds(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = seconds % 60;

  // Pad each time component with leading zeros if they are less than 10
  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = secondsLeft.toString().padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

function TimeCounter({ bootTime }: { bootTime: Date }) {
  // State to store the current time
  const [seconds, setSeconds] = useState<number>(
    differenceInSeconds(new Date(), bootTime)
  );

  useEffect(() => {
    // Create an interval that increments the counter every second
    const intervalId = setInterval(() => {
      setSeconds((prevCount) => prevCount + 1);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return <p>{formatSeconds(seconds)}</p>;
}

export default TimeCounter;

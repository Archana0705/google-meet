import React, { useState, useEffect } from "react";

function Timer({ startTime, isRunning }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    
  }, [isRunning, startTime]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds +
      ":" +
      (milliseconds < 10 ? "0" : "") +
      milliseconds
    );
  };

  return <div>{formatTime(elapsedTime)}</div>;
}

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [userIndex, setUserIndex] = useState(0);
  const [startTimes, setStartTimes] = useState(
    Array.from({ length: 10 }, () => 0)
  );

  function handleStartStop(){
    setIsRunning((prev) => !prev);
    if (!isRunning) {
      setStartTimes((prev) => {
        const newStartTimes = [...prev];
        newStartTimes[userIndex] = Date.now();
        return newStartTimes;
      });
    } else {
      setUserIndex((prev) => (prev + 1) % 10); // Reset to the next user
    }
  };

  return (
    <div>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <div>User {userIndex + 1}</div>
      <Timer startTime={startTimes[userIndex]} isRunning={isRunning} />
    </div>
  );
}

export default StopWatch;
import React from "react";
import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [value, setValue] = useState("0:00");
  const [counter, setCounter] = useState(null);
  const [start, setStart] = useState(false);

  const pauseTimer = useRef(null);

  useEffect(() => {
    if (start === true) {
      pauseTimer.current =
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }

    return () => {
      clearTimeout(pauseTimer.current);
    };
  }, [start, counter, setCounter]);

  useEffect(() => {
    if (counter === 0) {
      setStart(false);
    }
  }, [counter, setStart]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(value);
    e.target.reset();
  };

  const handleStart = () => {
    setStart(true);
  };

  const handlePause = () => {
    setStart(false);
  };

  const handleClear = () => {
    setValue(0);
    setCounter(null);
    setStart(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Timer</h1>
        <input
          onChange={handleChange}
          min="0"
          type="text"
          id="seconds"
          placeholder="seconds"
          style={{ textAlign: "center", width: "5rem" }}
        />
        <input type="submit" value="Set Timer" />
      </form>

      <h3>Countdown, timer in seconds:</h3>
      {counter === 0 && value > 0 ? (
        <h1>Time is up!</h1>
      ) : counter !== null ? (
        <h1 style={{ fontSize: "3rem" }}>{counter}</h1>
      ) : (
        <h1 style={{ fontSize: "3rem", color: "lightGrey" }}>{value}</h1>
      )}

      {start === false && counter !== null && counter !== 0 ? (
        <button style={{ fontSize: "1.5rem" }} onClick={handleStart}>
          START
        </button>
      ) : null}

      {start === true && counter !== 0 ? (
        <button style={{ fontSize: "1.5rem" }} onClick={handlePause}>
          PAUSE
        </button>
      ) : null}

      <h5>{""}</h5>
      {start === false && counter !== null ? (
        <button onClick={handleClear}>CLEAR</button>
      ) : null}
    </>
  );
};

export default Timer;

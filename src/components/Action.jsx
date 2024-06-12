// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Action = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handlePause = () => {
    setIsActive(false);
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return (
      <div className="flex gap-3 items-center justify-center ">
        <div>
          <div className=" border-2 text-3xl bg-white w-28 h-11 text-center items-center justify-center  rounded-md">
            {hrs.toString().padStart(2, "0")}
          </div>
          <h1 className=" text-sm text-gray-400 text-center mb-11">Hours</h1>
          <button
            className=" bg-[#03AE85] w-28 h-8 rounded hover:bg-[#029C77] active:bg-[#029C77] active:scale-95 duration-200 "
            onClick={handleStart}
          >
            START
          </button>
        </div>

        <div>
          <div className=" border-2 text-3xl bg-white w-28 h-11 text-center items-center justify-center  rounded-md">
            {mins.toString().padStart(2, "0")}
          </div>
          <h3 className=" text-sm text-gray-400 text-center mb-11">Minutes</h3>
          <button
            className=" bg-white w-28 h-8 rounded border-2 hover:bg-slate-100 active:scale-95 duration-200"
            onClick={handlePause}
          >
            PAUSE
          </button>
        </div>

        <div>
          <div className=" border-2 text-3xl bg-white w-28 h-11 justify-center items-center text-center rounded-md">
            {secs.toString().padStart(2, "0")}
          </div>
          <h3 className=" text-sm text-gray-400 text-center mb-11">Seconds</h3>
          <button
            className=" bg-[#FD6259] w-28 h-8 rounded  hover:bg-[#CA4E47] active:bg-[#E35850] active:scale-95 duration-200"
            onClick={handleReset}
          >
            RESET
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className=" mt-24 border bg-gray-100 w-[500px] h-64 mx-auto rounded-lg border-b-[#FD6259] border-b-8 ">
      <div className="">
        <h3 className=" text-gray-400 text-center mt-3 text-2xl mb-5">Timer</h3>
        <div className="mx-auto w-1/4"> {formatTime(seconds)}</div>
      </div>
    </div>
  );
};

export default Action;

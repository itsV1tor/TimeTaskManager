import { FaPlay, FaPause, FaStop } from 'react-icons/fa';
import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { AppContextType } from '../contexts/AppContext';

import { PadWithZero } from '../utils/PadWithZero';
import { ToggleVisibility } from '../utils/ToggleVisibility';

export function Timer() {
  const { time, setTime, getTime, setGetTime }: AppContextType = useContext(AppContext);
  const [isRunning, setIsRunning] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(55);
  const [isHoursVisible, setIsHoursVisible] = useState(false);
  const [isPauseVisible, setIsPauseVisible] = useState(false);
  const [isStartVisible, setIsStartVisible] = useState(true);

  useEffect(() => {
    let interval: undefined | number;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds >= 59) {
            setSeconds((seconds) => (seconds = 0));
            setMinutes((minutes) => {
              if (minutes >= 59) {
                setIsHoursVisible(true);
                setMinutes((minutes) => (minutes = 0));
                setHours((hours: number) => {
                  return hours + 1;
                });
              }
              return minutes + 1;
            });
          }
          return seconds + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      setIsStartVisible(false);
      setIsPauseVisible(true);
    }
  };

  const pauseTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      setIsPauseVisible(false);
      setIsStartVisible(true);
    }
  };

  const stopTimer = () => {
    setGetTime(true);
    setTime(
      (time) =>
        (time = {
          hours,
          minutes,
          seconds,
        }),
    );
    setHours(0);
    setMinutes(0);
    setSeconds(0);

    setIsHoursVisible(false);
    setIsRunning(false);
    setIsPauseVisible(false);
    setIsStartVisible(true);
  };

  return (
    <div className="m-auto flex w-full flex-col items-center gap-4">
      {/* <---Timer---> */}
      <p className="text-center text-5xl font-medium text-zinc-800">
        <span className={ToggleVisibility(isHoursVisible)}>{PadWithZero(hours)}:</span>
        <span>{PadWithZero(minutes)}</span>:<span>{PadWithZero(seconds)}</span>
      </p>
      {/* <---Timer controllers---> */}
      <div className="flex items-center gap-8">
        <button onClick={startTimer} className={ToggleVisibility(isStartVisible)}>
          <FaPlay className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
        <button onClick={pauseTimer} className={ToggleVisibility(isPauseVisible)}>
          <FaPause className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
        <button onClick={stopTimer}>
          <FaStop className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
      </div>
    </div>
  );
}

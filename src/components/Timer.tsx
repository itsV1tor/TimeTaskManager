import { FaPlay, FaPause, FaStop } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(55);
  const [isRunning, setIsRunning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let interval: undefined | number;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds >= 59) {
            setSeconds((seconds) => (seconds = 0));
            setMinutes((minutes) => {
              if (minutes >= 59) {
                setIsVisible(true);
                setMinutes((minutes) => (minutes = 0));
                setHours((hours) => {
                  return hours + 1;
                });
              }
              return minutes + 1;
            });
          }
          return seconds + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [isRunning]);

  const visibilityHours = () => {
    return isVisible === true ? '' : 'hidden';
  };

  const padWithZero = (number: number) => {
    return number < 10 ? '0' + number : number;
  };

  const startTimer = () => {
    if (isRunning) {
      return;
    }
    setIsRunning(true);
  };

  return (
    <div className="m-auto flex w-full max-w-[720px] flex-col items-center gap-4">
      <p className="text-center text-5xl font-medium text-zinc-800">
        <span className={visibilityHours()}>{padWithZero(hours)}:</span>
        <span>{padWithZero(minutes)}</span>:<span>{padWithZero(seconds)}</span>
      </p>

      <div className="flex items-center gap-8">
        <button onClick={startTimer}>
          <FaPlay className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
        <button>
          <FaPause className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
        <button>
          <FaStop className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
      </div>

      <input
        type="text"
        className="group w-full rounded-md border px-4 py-2 text-zinc-800 outline-none"
        placeholder="Insert the Task..."
      />
      <input
        type="text"
        className="group w-full rounded-md border px-4 py-2 text-zinc-800 outline-none"
        placeholder="Insert the Description..."
      />
    </div>
  );
}

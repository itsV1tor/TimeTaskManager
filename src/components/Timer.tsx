import { FaPlay, FaPause, FaStop } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(55);
  const [isRunning, setIsRunning] = useState(false);
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
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  

  const padWithZero = (number: number) => {
    return number < 10 ? '0' + number : number;
  };

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
      setIsStartVisible(true)
    }
  };

  const toggleButtons = (element: number | boolean) => {
    return element ? '' : 'hidden';
  };
  
  return (
    <div className="m-auto flex w-full flex-col items-center gap-4">
      {/* <---Timer---> */}
      <p className="text-center text-5xl font-medium text-zinc-800">
        <span className={toggleButtons(isHoursVisible)}>{padWithZero(hours)}:</span>
        <span>{padWithZero(minutes)}</span>:<span>{padWithZero(seconds)}</span>
      </p>
      {/* <---Timer controllers---> */}
      <div className="flex items-center gap-8">
        <button onClick={startTimer} className={toggleButtons(isStartVisible)}>
          <FaPlay className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
        <button onClick={pauseTimer} className={toggleButtons(isPauseVisible)}>
          <FaPause className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
        <button>
          <FaStop className="fill-zinc-400 transition duration-300 hover:fill-zinc-800" />
        </button>
      </div>
    </div>
  );
}

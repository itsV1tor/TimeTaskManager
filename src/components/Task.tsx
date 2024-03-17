import { useEffect, useContext, useState } from 'react';
import { AppContext, AppContextType } from '../contexts/AppContext';
import { PadWithZero } from '../utils/PadWithZero';
import { ToggleVisibility } from '../utils/ToggleVisibility';

interface TaskPropsType {
  title: string;
  totalTime: string;
  description: string;
}

export function Task({ title, totalTime, description }: TaskPropsType) {
  const { time, setTime, getTime, setGetTime }: AppContextType = useContext(AppContext);
  const [spentTime, setSpentTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isHoursVisible, setIsHoursVisible] = useState(false);

  useEffect(() => {
    if (getTime) {
      setSpentTime((spentTime) => {
        spentTime = { hours: time.hours, minutes: time.minutes, seconds: time.seconds };
        setIsHoursVisible((isHoursVisible) => {
          if (spentTime.hours <= 0) {
            return isHoursVisible;
          }
          return (isHoursVisible = true);
        });
        return spentTime;
      });
      setTime(
        (time) =>
          (time = {
            hours: 0,
            minutes: 0,
            seconds: 0,
          }),
      );
      setGetTime(false);
    }
  }, [getTime]);

  let { hours, minutes, seconds } = spentTime;

  return (
    <div>
      <div className="flex items-end justify-between">
        <h3 className="text-lg font-medium text-zinc-800">{title}</h3>
        <span className={`text-sm font-medium text-zinc-400 `}>
          <span className={ToggleVisibility(isHoursVisible)}>{PadWithZero(hours)}:</span>
          {PadWithZero(minutes)}:{PadWithZero(seconds)}
        </span>
      </div>
      <p className="p-2 text-zinc-400">{description}</p>
    </div>
  );
}

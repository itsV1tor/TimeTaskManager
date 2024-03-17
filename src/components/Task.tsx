import { useEffect, useContext, useState } from 'react';
import { AppContext, AppContextType } from '../contexts/AppContext';
import { PadWithZero } from '../utils/PadWithZero';
import { ToggleVisibility } from '../utils/ToggleVisibility';

export function Task() {
  const { time, setTime, getTime, setGetTime, inputTitle, inputDescription }: AppContextType =
    useContext(AppContext);
  const [spentTime, setSpentTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isHoursVisible, setIsHoursVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
        setTitle(inputTitle);
        setDescription(inputDescription);
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

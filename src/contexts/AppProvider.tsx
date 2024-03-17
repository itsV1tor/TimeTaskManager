import { ReactNode, useState } from 'react';
import { AppContextType } from './AppContext';
import { AppContext } from './AppContext';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [getTime, setGetTime] = useState(false);
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  const data: AppContextType = {
    time,
    setTime,
    getTime,
    setGetTime,
    inputTitle,
    setInputTitle,
    inputDescription,
    setInputDescription,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

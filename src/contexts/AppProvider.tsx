import { ReactNode, useState } from 'react';
import { AppContextType } from './AppContext';
import { AppContext } from './AppContext';

interface AppProviderProps {
    children: ReactNode;
}

export function AppProvider({ children }:AppProviderProps) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

    const data: AppContextType = {  
        hours, setHours,
        minutes, setMinutes,
        seconds, setSeconds
    }

  return(
    <AppContext.Provider value={ data }>
    { children }
    </AppContext.Provider>
  )
}

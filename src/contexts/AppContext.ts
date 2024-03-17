import { createContext } from 'react';

export interface AppContextType {
  hours: number;
  setHours: React.Dispatch<React.SetStateAction<number>>;
  minutes: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

const initialContextValue: AppContextType = {
  hours: 0,
  setHours: () => {},
  minutes: 0,
  setMinutes: () => {},
  seconds: 0,
  setSeconds: () => {},
};

export const AppContext = createContext<AppContextType>(initialContextValue);

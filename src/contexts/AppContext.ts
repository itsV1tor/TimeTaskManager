import { createContext } from 'react';

export interface AppContextType {
  time: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  setTime: React.Dispatch<React.SetStateAction<{hours: number, minutes: number, seconds: number}>>;
  getTime: boolean;
  setGetTime: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialContextValue: AppContextType = {
  time: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  setTime: () => {},
  getTime: false,
  setGetTime: () => {}
};

export const AppContext = createContext<AppContextType>(initialContextValue);

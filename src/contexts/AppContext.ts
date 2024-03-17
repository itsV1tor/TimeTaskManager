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
  inputTitle: string;
  setInputTitle: React.Dispatch<React.SetStateAction<string>>;
  inputDescription: string;
  setInputDescription: React.Dispatch<React.SetStateAction<string>>;
}

const initialContextValue: AppContextType = {
  time: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  setTime: () => {},
  getTime: false,
  setGetTime: () => {},
  inputTitle: '',
  setInputTitle: () => {},
  inputDescription: '',
  setInputDescription: () => {},
};

export const AppContext = createContext<AppContextType>(initialContextValue);

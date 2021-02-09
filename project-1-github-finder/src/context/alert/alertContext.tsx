import { createContext } from 'react';
import { AlertContextType } from '../../types/github-finder';

const context = createContext<AlertContextType | undefined>(undefined);

export const AlertContext = context;
export const AlertContextProvider = context.Provider;

import { createContext } from 'react';
import { GithubContextType } from '../../types/github-finder';

const context = createContext<GithubContextType | undefined>(undefined);

export const GithubContext = context;
export const GithubContextProvider = context.Provider;

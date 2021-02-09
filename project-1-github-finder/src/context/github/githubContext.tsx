import { createContext } from 'react';
import { GithubContextType } from '../../types/github-finder';

const context = createContext<GithubContextType | null>(null);

// export const GithubContextInitialState = initialState;
export const GithubContext = context;
export const GithubContextProvider = context.Provider;
export const GithubContextConsumer = context.Consumer;

import { createContext } from 'react';

export interface GithubContextInterface {
  users: User[];
  user?: User;
  repos?: Repo[];
  loading: boolean;
}

const context = createContext<GithubContextInterface | null>(null);

export const GithubContextProvider = context.Provider;
export const GithubContextConsumer = context.Consumer;

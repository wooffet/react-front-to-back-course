import { ReactNode, useReducer } from 'react';
import axios from 'axios';
import { GithubContextInterface, GithubContextProvider } from './githubContext';
import GithubReducer from './GithubReducer';

interface GithubStateProps {
  children: ReactNode;
}

const GithubState = ({ children }: GithubStateProps) => {
  const initialState: GithubContextInterface = {
    users: [],
    user: undefined,
    repos: undefined,
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users

  // Get Users

  // Get Repos

  // Clear Users

  // Set Loading

  return (
    <GithubContextProvider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {children}
    </GithubContextProvider>
  );
};

export default GithubState;

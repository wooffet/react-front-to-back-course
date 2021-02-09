import { ReactNode, useReducer } from 'react';
import axios from 'axios';
import { GithubContextProvider } from './githubContext';
import GithubReducer from './GithubReducer';
import {
  SearchResult,
  SEARCH_USERS,
  SET_LOADING,
  GithubContextType,
  GithubReducerAction,
  User,
} from '../../types/github-finder';

interface GithubStateProps {
  children: ReactNode;
}

const GithubState = ({ children }: GithubStateProps) => {
  // Search Users
  const searchUsers = async (searchInput: string) => {
    setLoading();

    await axios
      .get<SearchResult>(
        `https://api.github.com/search/users?q=${searchInput}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((response) => {
        const dispatchValues: GithubReducerAction<User[]> = {
          type: SEARCH_USERS,
          payload: response.data.items,
        };
        action(dispatchValues);
      });
  };

  // Get Users

  // Get Repos

  // Clear Users

  // Set Loading
  const setLoading = () => action({ type: SET_LOADING });

  const initialState: GithubContextType = {
    context: { users: [], user: undefined, repos: undefined, loading: false },
    searchUsers,
  };

  const [state, action] = useReducer(GithubReducer, initialState);

  return (
    <GithubContextProvider value={state}>{children}</GithubContextProvider>
  );
};

export default GithubState;

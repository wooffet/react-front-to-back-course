import { ReactNode, useReducer } from 'react';
import axios from 'axios';
import { GithubContextProvider } from './githubContext';
import GithubReducer from './GithubReducer';
import {
  SearchResult,
  SEARCH_USERS,
  SET_LOADING,
  GithubContextType,
  GithubFinderReducerAction,
  User,
  CLEAR_USERS,
  GET_USER,
  Repo,
  GET_REPOS,
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
        const dispatchValues: GithubFinderReducerAction<User[]> = {
          type: SEARCH_USERS,
          payload: response.data.items,
        };
        dispatch(dispatchValues);
      });
  };

  // Get User
  const getUser = async (username: string) => {
    setLoading();

    await axios
      .get<User>(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((response) => {
        const dispatchValues: GithubFinderReducerAction<User> = {
          type: GET_USER,
          payload: response.data,
        };
        dispatch(dispatchValues);
      });
  };

  // Get User Repos
  const getUserRepos = async (username: string) => {
    setLoading();

    await axios
      .get<Repo[]>(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((response) => {
        const dispatchValues: GithubFinderReducerAction<Repo[]> = {
          type: GET_REPOS,
          payload: response.data,
        };
        dispatch(dispatchValues);
      });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  const initialState: GithubContextType = {
    users: [],
    user: undefined,
    repos: undefined,
    loading: false,
    searchUsers,
    getUser,
    clearUsers,
    getUserRepos,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContextProvider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos,
      }}
    >
      {children}
    </GithubContextProvider>
  );
};

export default GithubState;

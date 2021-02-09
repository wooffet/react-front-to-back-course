import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  GithubContextType,
  GithubFinderReducerAction,
  SEARCH_USERS,
  SET_LOADING,
} from '../../types/github-finder';

const GithubReducer = (
  state: GithubContextType,
  action: GithubFinderReducerAction
) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default GithubReducer;

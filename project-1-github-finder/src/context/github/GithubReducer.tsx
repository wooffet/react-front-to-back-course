import {
  GithubContextType,
  GithubReducerAction,
  SEARCH_USERS,
  SET_LOADING,
} from '../../types/github-finder';

const GithubReducer = (
  state: GithubContextType,
  action: GithubReducerAction
) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default GithubReducer;

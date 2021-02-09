import {
  SET_ALERT,
  REMOVE_ALERT,
  AlertContextType,
  GithubFinderReducerAction,
} from '../../types/github-finder';

const AlertReducer = (
  state: AlertContextType,
  action: GithubFinderReducerAction
) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: undefined,
      };
    default:
      return state;
  }
};

export default AlertReducer;

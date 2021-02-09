import { ReactNode, useReducer } from 'react';
import AlertReducer from './AlertReducer';
import {
  SET_ALERT,
  REMOVE_ALERT,
  AlertContextType,
  GithubFinderReducerAction,
  Alert,
} from '../../types/github-finder';
import { AlertContextProvider } from './alertContext';

interface AlertStateProps {
  children: ReactNode;
}

const AlertState = ({ children }: AlertStateProps) => {
  // Set an alert
  const setAlert = (message: string, type: string) => {
    const dispatchValues: GithubFinderReducerAction<Alert> = {
      type: SET_ALERT,
      payload: { message, type },
    };
    dispatch(dispatchValues);

    setTimeout(() => {
      const dispatchValues: GithubFinderReducerAction<Alert> = {
        type: REMOVE_ALERT,
      };
      dispatch(dispatchValues);
    }, 5000);
  };

  // Remove an alert

  const initialState: AlertContextType = {
    alert: undefined,
    setAlert,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  return (
    <AlertContextProvider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {children}
    </AlertContextProvider>
  );
};

export default AlertState;

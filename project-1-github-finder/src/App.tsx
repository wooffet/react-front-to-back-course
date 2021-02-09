import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import UserProfile from './components/users/UserProfile';
import Search from './components/users/Search';
import AlertItem from './components/layout/AlertItem';
import About from './components/pages/About';
import './App.css';
import { Alert } from './types/github-finder';

const App = () => {
  const [alert, setAlert] = useState<Alert | undefined>(undefined);

  // Search GitHub users

  // Clear users from state

  // Show alert if no search input
  const showNoSearchInputAlert = (message: string, type: string) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(undefined);
    }, 5000);
  };

  // Get single GitHub user

  // Get user repos

  return (
    // Lecture 8 notes:
    // Either return one element e.g. div, <React.Fragment> or <>
    // Prefer to not use <>
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <AlertItem alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <Fragment>
                    <Search setAlert={showNoSearchInputAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={UserProfile} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;

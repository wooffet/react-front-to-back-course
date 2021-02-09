import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import UserProfile from './components/users/UserProfile';
import Search from './components/users/Search';
import AlertItem from './components/layout/AlertItem';
import About from './components/pages/About';
import './App.css';

const App = () => {
  return (
    // Lecture 8 notes:
    // Either return one element e.g. div, <React.Fragment> or <>
    // Prefer to not use <>
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <AlertItem />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => (
                    <Fragment>
                      <Search />
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
      </AlertState>
    </GithubState>
  );
};

export default App;

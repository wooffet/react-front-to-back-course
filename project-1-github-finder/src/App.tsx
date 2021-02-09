import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import GithubState from './context/github/GithubState';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import UserProfile from './components/users/UserProfile';
import Search from './components/users/Search';
import AlertItem from './components/layout/AlertItem';
import About from './components/pages/About';
import './App.css';

interface SearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [repos, setRepos] = useState<Repo[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<Alert | undefined>(undefined);

  // Search GitHub users
  const searchUsers = async (searchInput: string) => {
    setLoading(true);

    await axios
      .get<SearchResult>(
        `https://api.github.com/search/users?q=${searchInput}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((response) => {
        setUsers(response.data.items);
        setLoading(false);
      });
  };

  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Show alert if no search input
  const showNoSearchInputAlert = (message: string, type: string) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(undefined);
    }, 5000);
  };

  // Get single GitHub user
  const getUser = async (username: string) => {
    setLoading(true);

    await axios
      .get<User>(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      });
  };

  // Get user repos
  const getUserRepos = async (username: string) => {
    setLoading(true);

    await axios
      .get<Repo[]>(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((response) => {
        setRepos(response.data);
        setLoading(false);
      });
  };

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
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0}
                      setAlert={showNoSearchInputAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <UserProfile
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    userRepos={repos}
                    loading={loading}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;

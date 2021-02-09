import { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import UserProfile from './components/users/UserProfile';
import User from './components/users/intefaces/User';
import Repo from './components/repos/interfaces/Repo';
import Search from './components/users/Search';
import AlertItem from './components/layout/AlertItem';
import Alert from './components/layout/interfaces/Alert';
import About from './components/pages/About';
import './App.css';

interface AppState {
  users: User[];
  user?: User;
  loading: boolean;
  alert?: Alert;
  repos?: Repo[];
}

interface SearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}

class App extends Component<{}, AppState> {
  state: AppState = {
    users: [],
    loading: false,
  };

  // Search GitHub users
  searchUsers = async (searchInput: string) => {
    this.setState({ loading: true });

    await axios
      .get<SearchResult>(
        `https://api.github.com/search/users?q=${searchInput}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((response) => {
        this.setState({ users: response.data.items, loading: false });
        console.log(this.state.users);
      });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // Show alert if no search input
  showNoSearchInputAlert = (message: string, type: string) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => {
      this.setState({ alert: undefined });
    }, 5000);
  };

  // Get single GitHub user
  getUser = async (username: string) => {
    this.setState({ loading: true });

    await axios
      .get<User>(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((response) => {
        this.setState({ user: response.data, loading: false });
        console.log(this.state.user);
      });
  };

  // Get user repos
  getUserRepos = async (username: string) => {
    this.setState({ loading: true });

    await axios
      .get<Repo[]>(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((response) => {
        this.setState({ repos: response.data, loading: false });
        console.log(this.state.user);
      });
  };

  render() {
    const { users, loading, alert, user, repos } = this.state;

    return (
      // Lecture 8 notes:
      // Either return one element e.g. div, <React.Fragment> or <>
      // Prefer to not use <>
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
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0}
                      setAlert={this.showNoSearchInputAlert}
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
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
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
    );
  }
}

export default App;

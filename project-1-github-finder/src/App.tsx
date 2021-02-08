import { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/intefaces/User';
import Search from './components/users/Search';
import AlertItem from './components/layout/AlertItem';
import Alert from './components/layout/interfaces/Alert';
import './App.css';

interface AppState {
  users: User[];
  loading: boolean;
  alert?: Alert;
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

  render() {
    const { users, loading, alert } = this.state;

    return (
      // Lecture 8 notes:
      // Either return one element e.g. div, <React.Fragment> or <>
      // Prefer to not use <>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <AlertItem alert={alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0}
            setAlert={this.showNoSearchInputAlert}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;

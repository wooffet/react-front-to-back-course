import { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/intefaces/User';
import Search from './components/users/Search';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello from React</h1>
//     </div>
//   );
// }

interface AppState {
  users: User[];
  loading: boolean;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    await axios
      .get<User[]>(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((response) => {
        this.setState({ users: response.data, loading: false });
        console.log(this.state.users);
      });
  }

  render() {
    return (
      // Lecture 8 notes:
      // Either return one element e.g. div, <React.Fragment> or <>
      // Prefer to not use <>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;

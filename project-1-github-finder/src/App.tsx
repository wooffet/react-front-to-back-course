import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello from React</h1>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      // Lecture 8 notes:
      // Either return one element e.g. div, <React.Fragment> or <>
      // Prefer to not use <>
      <div className='App'>
        <Navbar />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
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
    const name = 'John Doe';
    const loading = false;
    const showName = true;

    return (
      // Lecture 8 notes:
      // Either return one element e.g. div, <React.Fragment> or <>
      // Prefer to not use <>
      <div className="App">
        {loading ?
          <h4>Loading...</h4>
          : <h1>Hello {showName && name}</h1>}        
      </div>
    );
  }  
}

export default App;

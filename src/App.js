import React, {Component} from 'react';
import './App.css';
import Sorter from './Sorter/Sorter';

class App extends Component {
  render() {
    return(
      <div>
        <Sorter></Sorter>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
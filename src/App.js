import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = {
    'name': '임꺽정',
    'birthday': '230830',
    'gender': '남',
    'job': '의적',
}

class App extends Component {
    render() {
        return (    
           
            <Customer 
                name={customer.name}
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job}
            />
        );
    }
}


export default App;


// import logo from './logo.svg';
// import './App.css';

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
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Profileimg from './img/logo_jump_frog.svg'



const customers = [
    {
        'id': 1,
        'image': Profileimg,
        'name': '홍길동',
        'birthday': '230830',
        'gender': '남',
        'job': '의적',
    },
    {
        'id': 2,
        'image': Profileimg,
        'name': '임꺽정',
        'birthday': '230830',
        'gender': '남',
        'job': '의적',
    },
    {
        'id': 3,
        'image': Profileimg,
        'name': '장길산',
        'birthday': '230830',
        'gender': '남',
        'job': '의적',
    }
]

class App extends Component {
    render() {
        return (
            <div>
                {
                    customers.map(c => {
                        return (
                            <Customer
                                key={c.id}
                                id={c.id}
                                image={c.image}
                                name={c.name}
                                birthday={c.birthday}
                                gender={c.gender}
                                job={c.job}
                            />
                        )
                    })
                }
            </div>
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

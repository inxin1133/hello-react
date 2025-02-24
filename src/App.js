import React, {Component} from 'react';

import MyComponent from './MyComponent';
import MyComponentCheck from './MyConponentCheck';


class App extends Component {
    render() {

    
        

        return (    
           
               
            <MyComponentCheck name="김수안무" />
            //<MyComponent name='React' age={6} />                  
            // 문자열 종류 외의 값을 컴포넌트에 전달할 때는  { }로 감싸야 합니다. 안그럼 오류남    
            // <MyComponent name={3} /> -> 오류없음
            //  <MyComponent name=3 /> -> 오류발생
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

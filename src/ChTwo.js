import React, {Component} from 'react';
// import React, {Component, Fragment} from 'react';
import './App.css';

class ChTwo extends Component {
  render() {
    const text = '당신은 어썸한가요?';
    const condition = true;
    let rdText = Math.random() * 100;
    const style = {      
      backgroundColor: 'gray',      
      height: Math.round(Math.random() * 300) + 50,
      width: Math. round(Math.random() * 300) + 50,
    };
    return (      
      // Fragment를 사용하면 불필요한 div 랜더링 하는 것은 생략할 수 있음
      // <Fragment>
      //   내용
      // </Fragment>
      <div className='my-div'> 
        {/* 요소 밖에서는 주석을 이런식으로 작성해야 합니다.  */}
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        { condition && "참으로"  }
        <div style={style}
          // 이건 또 작성이 가능합니다. 그런데 태그 밖에다 쓰면 이 형태로 주석 작성이 불가
          // 아래처럼 <div class="abc" /> 이런식으로 하나로 코드 닫기도 가능함
          // 단, 무조건 코드 닫기가 되어야 함 input과 br 태그도 /로 닫기를 해줘야 함
        />   

       
        <h3>{rdText}</h3>     
      </div>
    );
  }
}

export default ChTwo ;


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

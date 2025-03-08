import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Profileimg from './img/logo_jump_frog.svg';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/material/styles';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        
        
    },
    table: {
        minWidth: 1080
    }
})


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
        const { classes } = this.props;
        return (
            // <Paper className={classes.root}>
            //     <Table className={classes.table}>
                <Paper>
                    <Table> 
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map(c => {
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
                    </TableBody>
                </Table>
            </Paper >
        );
    }
}


// export default withStyles(styles)(App);
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

import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props : any) {
    super(props);
    this.state = {
      title: null,
    }
  }
  componentDidMount() {
    fetch('http://conative.myds.me:8082/board/group/main')
      .then(res => res.json())
      // .then(data => this.setState({title: data.title}));
      .then(data => console.log(data));
  }
  render(){
    return(
      <div className="App">
        {/* {this.state.asdf? <h1>{this.state.title}</h1>:<h1>loading...</h1>} */}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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

export default App;

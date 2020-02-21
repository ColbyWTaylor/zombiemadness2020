import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
    const [infect, setInfect] = useState(Math.floor(Math.random() * 10))
    const randomValue = Math.floor(Math.random() * 10)
    const [foundColony, setFoundColony] = useState(false)
    const [userInput, setUserInput] = useState(0)

  return (
    <div className="App">
      <header className="App-header">          Learn React this is not the one
               {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         Number of people infected: {infect}
        </p>

        <input onChange={e => setUserInput(e.target.value)} />
        <p>{userInput}</p>



        <button onClick={()=> setInfect(infect + randomValue)}>Infecting</button>
        <button onClick={()=> setInfect( Math.round(infect * .9))}>Antianticure 💉</button>
    <button onClick={()=> setInfect(infect * userInput)}>More creative</button>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React this is not the one
        </a>
      </header>
    </div>
  );
}

export default App;

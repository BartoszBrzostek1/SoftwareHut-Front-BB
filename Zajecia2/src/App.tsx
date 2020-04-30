import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [liczba, setLiczba] = useState(0);
  return (
    <div className="App">
       <button onClick={() => setLiczba(liczba - 1)}>-</button>
       <div>{liczba}</div>
       <button onClick={() => setLiczba(liczba + 1)}>+</button>
       <br />
       {liczba>10 ? 'Liczba jest za duza o ' + (liczba - 10)   : null}
       
       {liczba<0 ? 'Nie w ta strone' : null}
    </div>
  );
}

export default App;

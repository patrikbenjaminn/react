
import './App.css';
import { useState } from 'react';

function App() {
  const [cm,setCm] = useState(0)
  const [kg,setKg] = useState(0)
  const [bmi,setBmi] = useState(0)

  function calculator(e){
    e.preventDefault()
    const conversion = (kg) / ((cm/100) * (cm/100))
    setBmi(conversion) 
  }


  return (
    <form onSubmit={calculator}>
      <h3>Calculating mass body index</h3>
      <div>
        <label>Height </label>
        <input type="number" value={cm} onChange={e => setCm(e.target.value)}></input>
      </div>
      <div>
        <label>Weight </label>
        <input type="number" value={kg} onChange={e => setKg(e.target.value)}></input>
        
      </div>
      
      <button>Calculate</button>
      <div><output>{bmi.toFixed(1)}</output></div>
    </form>
    
  );
}

export default App;

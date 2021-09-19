
import './App.css';
import data from './data';
import List from './Components/List'
import { useState } from 'react'

function App() {

  const [people, setPeople] = useState(data)
   
  return (
    <div className="App">
      <div className="container">
         <p className = "number">{people.length} birthdays today</p>
         <List people = { people }/>
         <button className= "clear" onClick = {() => { setPeople([]) } }>Clear All</button>
      </div>
    </div>
  );
}

export default App;

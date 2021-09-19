
import './App.css';
import data from './data'
import React , {useState} from 'react'
import Info from './Components/Info'

function App() {
  const [info,setInfo] = useState(0);
  const nextPerson = () => {
       setInfo((index) => {
         if(index < data.length - 1)
         {
           let newIndex = index + 1;
           return newIndex;
         }
         else 
         {
           let newIndex = 0;
           return newIndex;
         }
       });
  }
  const prePerson = () => {
       setInfo((index) => {
          if(index === 0)
          {
            let newIndex = data.length - 1;
            return newIndex;
          }
          else 
          {
            let newIndex = index - 1;
            return newIndex;
          }
       });
  };
  return (
    <div className="App">
       <h1 className = "title">Our Review</h1>
       <div className = "container">
          <Info Info = { data[info] }/>
          <div className = "button">
             <button id = "button_pre" onClick = { prePerson }>
               <i class="fas fa-chevron-left">a</i>
             </button>
             <button id = "button_post" onClick = { nextPerson } >
               <i class="fas fa-chevron-right">b</i>
             </button>
          </div>
          <button className = "suprise" onClick = { () => { setInfo([]) } }>suprise me</button>
       </div>
    </div>
  );
}

export default App;

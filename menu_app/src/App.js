import './App.css';
import { useState } from 'react'
import data from './data'
import Categories from './Components/Categories';
import Menu from './Components/Menu'

function App() {
  const [item,setItem] = useState(data);

  const filters = (category) => {
    if(category === "All")
    {
      setItem(data);
    }
    else 
    {
      const newItem = data.filter((item) => {

        return (category === item.category);
      }
      );
      setItem(newItem);
    }
  }
  
  return (
    <div className="App">
      <div className="container">
        <h1 className="title1">Our Menu</h1>
        <Categories filterItems = { filters } />
        <Menu items = { item }/>
      </div>
    </div>
  );
}

export default App;

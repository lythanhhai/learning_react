import './App.css';
import { StoreContext, StoreProvider } from './Store';
import { useContext } from 'react'

function App() {
  const [state, dispatch] = useContext(StoreContext);
  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;

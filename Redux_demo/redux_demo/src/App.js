import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { increment, decrement } from './actions';
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>hello {counter}</h1>
      <button onClick={() => {dispatch(increment(5))}}>+</button>
      <button onClick={() => {dispatch(decrement())}}>-</button>
      <h3>Valueable information</h3>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import ALlReducer from './reducers/index';
import { Provider } from 'react-redux';



let store = createStore(ALlReducer);

// const increment = () => {
//   return(
//    {
//     type: "increment",
//    } 
//   );
// };
// const decrement = () => {
//   return(
//     {
//       type: "decrement",
//     }
//   );
// }

// const counter = (state=0, action) => {
//   switch(action.type)
//   {
//     case 'increment': return state + 1;
//     case 'decrement': return state - 1;
//     default:;
//   }
// }

// let store = createStore(counter);

// store.subscribe(() => {console.log(store.getState())});

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

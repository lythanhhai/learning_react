import "./App.css";
//import 'font-awesome/css/font-awesome.min.css';
// nạp font-awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
import data from "./data";
import React, { useState } from "react";
import List from "./Components/List";

function App() {
  const [question, setQuestion] = useState(data);
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Question and answer about login</h1>
        <List question={ question }/>
      </div>
    </div>
  );
}

export default App;

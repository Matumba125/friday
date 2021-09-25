import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Routing from "./components/routing/Routing";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routing />
      </HashRouter>

    </div>
  );
}

export default App;

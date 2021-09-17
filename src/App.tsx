import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Routing from "./components/routing/Routing";
import TestComponent from "./components/test/TestComponent";

function App() {
  return (
    <div className="App">
          <HashRouter>
              <Routing/>
              <TestComponent/>
          </HashRouter>
    </div>
  );
}

export default App;

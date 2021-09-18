import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Routing from "./components/routing/Routing";
import TestComponent from "./components/test/TestComponent";
import Loginization from './components/loginization/Loginization';

function App() {
  return (
    <div className="App">
          <HashRouter>
              <Routing/>
          </HashRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { HashRouter } from "react-router-dom";
import Routing from "./components/routing/Routing";
import TestComponent from "./components/test/TestComponent";
import NewPassword from './components/newPassword/NewPassword';

// first commit
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

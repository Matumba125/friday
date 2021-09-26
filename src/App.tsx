import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Routing from "./components/routing/Routing";
import { useSelector } from 'react-redux';
import { AppStateType } from './store/store';
import Header from './common/header/Header'

function App() {
  const isLoggedIn = useSelector<AppStateType, boolean>(state => state.loginization.isLoggedIn);
  return (
    <HashRouter>
    <div className="App">
      {isLoggedIn && <Header />}
        <Routing />
    </div>
    </HashRouter>
  );
}

export default App;

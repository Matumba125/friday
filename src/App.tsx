import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Routing from "./components/routing/Routing";
import { useSelector } from 'react-redux';
import { AppStateType } from './store/store';
import Header from './common/header/Header'
import {getIsLoading, getIsLoggedIn } from './store/selectots';
import IsLoading from './common/isLoading/IsLoading';

function App() {
  
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getIsLoading)

  return (
    <HashRouter>
      { isLoading && <IsLoading/>}
      <div className="App">
      {isLoggedIn && <Header />}
        <Routing />
    </div>
    </HashRouter>
  );
}

export default App;

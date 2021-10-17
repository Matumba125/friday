import React, { useEffect } from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Routing from "./components/routing/Routing";
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoading, getIsLoggedIn} from './store/selectots';
import { authMeTC } from './store/authReducer';
import Header from './components/Header/Header';
import IsLoading from './la-1-common/isLoading/IsLoading';

function App() {
  
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getIsLoading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authMeTC());
  }, [dispatch]);

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

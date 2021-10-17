import React, { useEffect } from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoading, getIsLoggedIn} from '../../store/selectots';
import IsLoading from '../../la-1-common/isLoading/IsLoading';
import { authMeTC } from '../m-2-bll/authReducer';
import Header from '../../la-2-features/Header/Header';
import Routing from './Routing/Routing';

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

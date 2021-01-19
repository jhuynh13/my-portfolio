import React from 'react';
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';
import Home from './components/';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App(){
  
  return (
    <>
      <CssBaseline />
      <Route exact path="/my-portfolio" component= {Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </>
  );
}


export default App;

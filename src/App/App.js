import React from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Error from '../Error/Error'
import AboutMe from '../AboutMe/AboutMe'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route render={Error} />
      </Switch>
    </div>
  );
}

export default App;

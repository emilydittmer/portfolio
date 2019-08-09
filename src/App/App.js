import React from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Error from '../Error/Error'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route render={Error} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

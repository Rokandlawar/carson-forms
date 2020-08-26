import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
//Components
import Form from './form'
import Builder from './builder'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Form} />
          <Route exact path='/builder' component={Builder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

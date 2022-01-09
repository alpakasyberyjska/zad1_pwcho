import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import Documentation from './Documentation';
import Home from './Home';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Realizacja zadania nr 1 w ramach laboratorium PFSwCO</h1>
            <h2> Sebastian Łagowski </h2>
            <Link to="/">Strona glowna</Link>
            <Link to="/fibcalc">Fib Calc</Link>
            <Link to="/documentation">Dokumentacja</Link>
            <a></a>
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/documentation" component={Documentation} />
            <Route exact path="/fibcalc" component={Fib} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;

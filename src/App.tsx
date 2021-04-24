import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Settings from './components/Settings';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/settings">
            <Settings />
            <Link to="/">back</Link>
          </Route>
          <Route path="/">
            <Timer />
          </Route>
        </Switch>
        <Link to="/settings">settings</Link>
      </Router>
    </div>
  );
}

export default App;

import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginButton from './components/LoginButton';
import Settings from './components/Settings';
import Timer from './components/Timer';

function App() {
  const { isLoading } = useAuth0();

  return (
    <div className="App">
      {!isLoading && <LoginButton />}
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

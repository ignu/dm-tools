import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginButton from './components/LoginButton';
import Settings from './components/Settings';
import Timer from './components/Timer';

const Header = () => {
  const { isLoading, user } = useAuth0();
  return (
    <div className="h-9 flex flex-1">
      <div style={{ border: '2px solid red' }} className="flex-1 flex-grow-1">
        <h1>DM Tools</h1>
      </div>
      <div className="flex-2"></div>
      <div className="flex-1">{!isLoading && <LoginButton />}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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

import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Settings from './components/Settings';
import Timer from './components/Timer';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_DOMAIN || '';
const clientId = process.env.REACT_APP_CLIENT_ID || '';

function App() {
  return (
    <div className="App">
      <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
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
      </Auth0Provider>
    </div>
  );
}

export default App;

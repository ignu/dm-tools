import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import awsconfig from './aws-exports';
import Settings from './components/Settings';
import Timer from './components/Timer';

Amplify.configure(awsconfig);
const Header = () => {
  return (
    <div className="h-9 flex flex-1">
      <div style={{ border: '2px solid red' }} className="flex-1 flex-grow-1">
        <h1>DM Tools</h1>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AmplifySignOut />
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

export default withAuthenticator(App);

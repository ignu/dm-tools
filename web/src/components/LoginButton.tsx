import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LogoutButton from './LogoutButton';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (isAuthenticated) return <LogoutButton />;

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;

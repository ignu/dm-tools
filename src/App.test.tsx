import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//@ts-ignore: hack to get Auth0 to work
window.crypto = {
  subtle: {},
};

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

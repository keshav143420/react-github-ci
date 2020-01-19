import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello world from react..!/i);
  expect(linkElement).toBeInTheDocument();
});

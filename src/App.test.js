import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome To React/i);
  expect(linkElement).toBeInTheDocument();
});

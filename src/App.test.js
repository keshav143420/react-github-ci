import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Working from CI..!/i);
  expect(linkElement).toBeInTheDocument();
});

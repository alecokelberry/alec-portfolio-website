import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page by default', () => {
  render(<App />);
  // We expect to see "Hi, I'm Alec Okelberry" or similar from Home page
  const greetingElement = screen.getByText(/Hi, I'm/i);
  expect(greetingElement).toBeInTheDocument();
  
  expect(greetingElement).toBeInTheDocument();
  
  const nameElements = screen.getAllByText(/Alec Okelberry/i);
  expect(nameElements.length).toBeGreaterThan(0);
});

import { render, screen } from '@testing-library/react';
// import App from './App';
import Notes from './Notes';

test('renders learn react link', () => {
  render(<Notes />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

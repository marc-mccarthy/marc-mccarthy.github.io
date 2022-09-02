import { render, screen } from '@testing-library/react';
import Videos from './Videos';

test('renders learn react link', () => {
  render(<Videos />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

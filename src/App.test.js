import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {

  test('renders react app components', () => {
    render(<App />);
    const reactElement = screen.getByText(/React App/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(reactElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('renders react components', () => {
    render(<App />);
    const helloElement = screen.queryByText(/hello/i);
    expect(helloElement).toBeNull();
  });

  test('renders async react components', async () => {
    render(<App />);
    const element = await screen.findByText(/test data/i);
    expect(element).toBeInTheDocument();
  });

  test('button working', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-element')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-element')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-element')).toBeNull();
  });
})

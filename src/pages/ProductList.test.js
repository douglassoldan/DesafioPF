import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import ProductList from './ProductList';
import axios from 'axios';

// Mock axios
jest.mock('axios');

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

// Mock FontAwesomeIcon
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: 'FontAwesomeIcon',
}));

// Mock styled-components
jest.mock('styled-components', () => {
  return {
    ...jest.requireActual('styled-components'),
    default: jest.fn().mockImplementation(component => component),
  };
});

describe('ProductList', () => {
  it('renders correctly', async () => {
    const fakeProducts = [
      {id: 1, title: 'Test Product 1'},
      {id: 2, title: 'Test Product 2'},
    ];

    // Mock axios response
    axios.get.mockResolvedValueOnce({data: fakeProducts});

    const {getByPlaceholderText} = render(<ProductList />);

    // Wait for axios response to be processed and state to update
    await waitFor(() => getByPlaceholderText('Busque seus produtos aqui'));

    expect(getByPlaceholderText('Busque seus produtos aqui')).toBeTruthy();
  });
});

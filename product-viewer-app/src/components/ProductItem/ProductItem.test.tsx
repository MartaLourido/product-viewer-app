import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductItem from './ProductItem';
import { Product } from '../../types/Product';

const product: Product = {
  id: 1,
  title: 'Test Product',
  description: 'This is a test product.',
  category: 'Test Category',
  price: 100,
  brand: 'Test Brand',
  thumbnail: 'test-thumbnail.jpg',
};

describe('ProductItem', () => {
  it('should render product details', () => {
    render(<ProductItem product={product} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('This is a test product.')).toBeInTheDocument();
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toHaveAttribute('src', 'test-thumbnail.jpg');
  });
});

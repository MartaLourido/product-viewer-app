import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';
import { Product } from '../../types/Product';

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  description: 'This is a test product.',
  category: 'test-category',
  price: 19.99,
  brand: 'Test Brand',
  thumbnail: 'https://test.placeholder.com/150'
};

describe('ProductCard', () => {
  it('should display product title', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('should display product description', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('This is a test product.')).toBeInTheDocument();
  });

  it('should display product category', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('test-category')).toBeInTheDocument();
  });

  it('should display product price', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('19.99 USD')).toBeInTheDocument();
  });

  it('should display product brand', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
  });
});

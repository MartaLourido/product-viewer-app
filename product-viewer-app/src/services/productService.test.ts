import { fetchProducts, fetchCategories } from './productService';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('productService', () => {
  it('should fetch products', async () => {
    const products = [{ id: 1, title: 'Product 1' }];
    mockedAxios.get.mockResolvedValue({ data: { products } });

    const result = await fetchProducts(20, 0);
    expect(result).toEqual(products);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://dummyjson.com/products?limit=20&skip=0');
  });

  it('should fetch categories', async () => {
    const categories = ['category1', 'category2'];
    mockedAxios.get.mockResolvedValue({ data: categories });

    const result = await fetchCategories();
    expect(result).toEqual(categories);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://dummyjson.com/products/categories');
  });
});
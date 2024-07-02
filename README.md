# Product Viewer App

## Description

Product Viewer App is a React-based application that displays a list of products fetched from the dummyJSON API. Users can browse products, filter them by categories, and search for products using free text.

## User Stories

- *As a user,* I want to be able to see a list of products with their thumbnails, titles, prices, descriptions, brands, and categories.
- *As a user,* I want the first 20 products loaded initially.
- *As a user,* I want more products to load automatically as I scroll down to the end of the list until all products are loaded.
- *As a user,* I want to filter the product list by different categories.
- *As a user,* I want to search for products using a free text field.

### Assumptions

- **Responsiveness**: The application should aim to be responsive to ensure a good user experience on different devices and screen sizes.
- **Testing Priorities**: Tests should prioritize the acceptance criteria provided, focusing on loading products, infinite scroll, category filtering, and search functionality.
- **Category Filter**: Allowing multiple categories to be selected for filtering can enhance the user experience by providing more flexible search options.
- **Comprehensive Search**: The "free text" search should be comprehensive, allowing users to search by title, description, category, brand, or price.
- **Design Focus**: The design is not the primary focus. The emphasis is on best practices, code readability, and functionality.
- **Category Highlight**: Since categories are important for users, they should be highlighted in the UI to make filtering more intuitive.
- **Loading and Empty States**: Loading state and empty state are added for better user experience, especially when the internet is slow or there is no data available.
- **Input Validation**: The search input is considered "free", meaning it admits any characters since there are no specific validation requirements mentioned. This assumes the user can search by any keyword.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/MartaLourido/product-viewer-app.git
    cd product-viewer-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Run the tests:
    ```bash
    npm test
    ```

## Usage

- Open the application in your browser.
- Use the search bar to search for products by any keyword.
- Use the category filter to filter products by category.
- Scroll down to load more products.
- Use the search bar to add words that are not present in any product to see the empty state.

## Components

- `ProductList` - Displays the list of products.
- `ProductCard` - Displays individual product details.
- `SearchBar` - Allows users to search for products.
- `CategoryFilter` - Allows users to filter products by categories.
- `EmptyState` - Displays a message when no products are available.

## Services

### Product Service

- `fetchProducts(limit: number, skip: number)` - Fetches a list of products, where limit specifies the number of products to retrieve and skip specifies the number of products to skip. This supports loading products in batches for efficient data handling.
- `fetchCategories()` - Fetches a list of product categories.

## Testing

- **Performance Testing**: Throttling network speed (e.g., slow 3G) should be tested to ensure the loading indicators and performance are handled correctly. This is important to simulate real-world conditions and ensure a smooth user experience even under poor network conditions.

### Unit Tests

Unit tests are written using Jest and React Testing Library. Tests are written to cover the main functionalities including:

- Rendering the initial set of products.
- Displaying error messages.
- Showing loading indicators.
- Loading more products on scroll.
- Filtering products by categories.
- Searching products using the search bar.

## Performance

The application is optimized for performance, with lazy loading of products and chunked requests to minimize the load time and enhance the user experience.

## Folder Structure

Usually, I use atomic design for folder structure when the project has several reusable components. However, for this case, I didn’t follow this approach because it is a small project.

## Future Improvements

- **Global State Management**: If the project scales, we could consider integrating a global state management solution like Redux.

## Links

- [DummyJSON API Documentation](https://dummyjson.com/docs/products)
- [Material UI Documentation](https://mui.com/)

## Repository

- [GitHub Repository](https://github.com/MartaLourido/product-viewer-app)

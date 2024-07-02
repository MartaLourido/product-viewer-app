import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ProductList from "./ProductList";
import { Product } from "../../types/Product";

jest.mock('react-lazy-load-image-component', () => ({
  LazyLoadImage: (props: any) => <img {...props} />,
}));

describe("ProductList", () => {
  const mockProducts: Product[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    description: `Description ${i + 1}`,
    category: `Category ${i + 1}`,
    price: 100,
    brand: `Brand ${i + 1}`,
    thumbnail: "https://test.placeholder.com/150",
  }));

  const loadMoreMock = jest.fn();

  it("should render the initial 20 products", async () => {
    render(
      <ProductList
        products={mockProducts}
        error={null}
        loading={false}
        loadMore={loadMoreMock}
        hasMore={true}
      />
    );

    for (let i = 1; i <= 20; i++) {
      expect(await screen.findByText(`Product ${i}`)).toBeInTheDocument();
    }
  });

  it("should display an error message when there is an error", async () => {
    render(
      <ProductList
        products={[]}
        error="Failed to load products"
        loading={false}
        loadMore={jest.fn()}
        hasMore={false}
      />
    );

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Failed to load products"
    );
  });

  it("should display loading indicator when loading", () => {
    render(
      <ProductList
        products={[]}
        error={null}
        loading={true}
        loadMore={jest.fn()}
        hasMore={true}
      />
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should load more products when scrolling down", async () => {
    const additionalProducts = Array.from({ length: 20 }, (_, i) => ({
      id: i + 21,
      title: `Product ${i + 21}`,
      description: `Description ${i + 21}`,
      category: `Category ${i + 21}`,
      price: 100,
      brand: `Brand ${i + 21}`,
      thumbnail: "https://test.placeholder.com/150",
    }));

    render(
      <ProductList
        products={[...mockProducts, ...additionalProducts]}
        error={null}
        loading={false}
        loadMore={loadMoreMock}
        hasMore={true}
      />
    );

    for (let i = 1; i <= 40; i++) {
      expect(await screen.findByText(`Product ${i}`)).toBeInTheDocument();
    }
  });

  it("should stop loading more products when hasMore is false", async () => {
    render(
      <ProductList
        products={mockProducts}
        error={null}
        loading={false}
        loadMore={loadMoreMock}
        hasMore={false}
      />
    );

    expect(loadMoreMock).not.toHaveBeenCalled();
  });
});

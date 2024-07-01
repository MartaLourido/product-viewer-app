import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductList from "./ProductList";
import * as productService from "../../services/productService";

class MockIntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
  root: Element | null = null;
  rootMargin: string = "";
  thresholds: ReadonlyArray<number> = [];

  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    setTimeout(() => {
      callback([{ isIntersecting: true }] as IntersectionObserverEntry[], this);
    }, 0);
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

jest.mock("../../services/productService");
const mockedProductService = productService as jest.Mocked<
  typeof productService
>;

describe("ProductList", () => {
  beforeEach(() => {
    global.IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;
  });

  it("should render product list", async () => {
    mockedProductService.fetchProducts.mockResolvedValue([
      {
        id: 1,
        title: "Product 1",
        description: "",
        category: "",
        price: 100,
        brand: "",
        thumbnail: "",
      },
      {
        id: 2,
        title: "Product 2",
        description: "",
        category: "",
        price: 200,
        brand: "",
        thumbnail: "",
      },
    ]);

    render(<ProductList />);

    expect(await screen.findByText("Product 1")).toBeInTheDocument();
    expect(await screen.findByText("Product 2")).toBeInTheDocument();
  });
});

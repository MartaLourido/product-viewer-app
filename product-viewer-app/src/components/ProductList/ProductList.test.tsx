import { render, screen, waitFor } from "@testing-library/react";
import ProductList from "./ProductList";
import * as productService from "../../services/productService";

jest.mock("../../services/productService");
const mockedProductService = productService as jest.Mocked<
  typeof productService
>;

describe("ProductList", () => {
  beforeEach(() => {
    mockedProductService.fetchProducts.mockClear();
  });

  it("should render the initial 20 products", async () => {
    const initialProducts = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      title: `Product ${i + 1}`,
      description: `Description ${i + 1}`,
      category: `Category ${i + 1}`,
      price: 100,
      brand: `Brand ${i + 1}`,
      thumbnail: "https://test.placeholder.com/150",
    }));

    mockedProductService.fetchProducts.mockResolvedValueOnce(initialProducts);

    render(<ProductList />);

    for (let i = 1; i <= 20; i++) {
      expect(await screen.findByText(`Product ${i}`)).toBeInTheDocument();
    }
  });

  it("should display an error message when fetch fails", async () => {
    mockedProductService.fetchProducts.mockRejectedValueOnce(
      new Error("Failed to load products")
    );

    render(<ProductList />);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Failed to load products"
    );
  });
});

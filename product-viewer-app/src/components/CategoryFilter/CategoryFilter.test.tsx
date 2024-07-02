import { render, fireEvent, screen } from "@testing-library/react";
import CategoryFilter from "./CategoryFilter";
import { Category } from "../../types/Category";

describe("CategoryFilter", () => {
  it("should call onChange with selected categories", () => {
    const handleChange = jest.fn();
    const categories: Category[] = [
      {
        slug: "beauty",
        name: "Beauty",
        url: "https://dummyjson.com/products/category/beauty",
      },
      {
        slug: "fragrances",
        name: "Fragrances",
        url: "https://dummyjson.com/products/category/fragrances",
      },
    ];

    render(<CategoryFilter categories={categories} onChange={handleChange} />);

    fireEvent.mouseDown(screen.getByRole("combobox"));

    fireEvent.click(screen.getByText("Beauty"));

    expect(handleChange).toHaveBeenCalledWith(["beauty"]);
  });
});

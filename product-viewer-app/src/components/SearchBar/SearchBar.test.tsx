import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("should call onSearch when input value changes", () => {
    const handleSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={handleSearch} />
    );
    const input = getByPlaceholderText("Search…");

    fireEvent.change(input, { target: { value: "test" } });

    expect(handleSearch).toHaveBeenCalledWith("test");
  });

  it("should call onSearch with an empty string when input is cleared", () => {
    const handleSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={handleSearch} />
    );
    const input = getByPlaceholderText("Search…");

    fireEvent.change(input, { target: { value: "test" } });
    expect(handleSearch).toHaveBeenCalledWith("test");

    fireEvent.change(input, { target: { value: "" } });

    expect(handleSearch).toHaveBeenCalledWith("");
  });

  it("should handle long input values", () => {
    const handleSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={handleSearch} />
    );
    const input = getByPlaceholderText("Search…");
    const longInput = "a".repeat(1000);

    fireEvent.change(input, { target: { value: longInput } });

    expect(handleSearch).toHaveBeenCalledWith(longInput);
  });

  it("should handle special characters", () => {
    const handleSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={handleSearch} />
    );
    const input = getByPlaceholderText("Search…");
    const specialChars = "!@#$%^&*()";

    fireEvent.change(input, { target: { value: specialChars } });

    expect(handleSearch).toHaveBeenCalledWith(specialChars);
  });
});

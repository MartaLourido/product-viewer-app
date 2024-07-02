import { render, screen } from "@testing-library/react";
import EmptyState from "./EmptyState";
import InfoIcon from "@mui/icons-material/Info";

describe("EmptyState", () => {
  it("should render the empty state with a message", () => {
    const message = "No products found";
    render(<EmptyState message={message} icon={InfoIcon} />);

    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByTestId("InfoIcon")).toBeInTheDocument();
  });
});

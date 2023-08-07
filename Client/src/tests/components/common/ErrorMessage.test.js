import { render, screen } from "@testing-library/react";
import ErrorMessage from "../../../components/common/ErrorMessage";

describe("ErrorMessage", () => {
  it("should render when error is porovided", () => {
    const errorMessage = "This is an error message";
    render(<ErrorMessage error={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it("should not render when error is not provided", () => {
    render(<ErrorMessage />);
    expect(screen.queryByTestId("error-message")).toBeNull();
  });
});

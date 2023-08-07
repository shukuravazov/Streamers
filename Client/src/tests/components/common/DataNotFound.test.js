import { render, screen } from "@testing-library/react";
import DataNotFound from "../../../components/common/DataNotFound";

describe("DataNotFound", () => {
  it("should render the correct message", () => {
    const message = "Not Found";
    render(<DataNotFound message={message} />);
    const textElement = screen.getByText(message);
    expect(textElement).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Loading from "../../../components/common/Loading";

describe("Loading", () => {
  it("should render correctly", () => {
    render(<Loading />);
    const textElement = screen.getByText(/loading/i);
    expect(textElement).toBeInTheDocument();
  });
});

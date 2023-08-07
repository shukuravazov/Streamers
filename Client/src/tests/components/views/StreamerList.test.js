import { render, screen } from "@testing-library/react";
import StreamersList from "../../../components/views/StreamersList";

describe("StreamersList", () => {
  it("should render 'no streamers' when there are no streamers", () => {
    render(<StreamersList />);
    const textElement = screen.getByText("No Streamers");
    expect(textElement).toBeInTheDocument();
  });
});

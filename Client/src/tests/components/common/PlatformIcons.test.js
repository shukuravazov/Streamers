import { render, screen } from "@testing-library/react";
import StreamingPlatform from "../../../components/common/StreamingPlatform";

describe("StreamingPlatform", () => {
  it("should render streaming platform correctly", () => {
    render(<StreamingPlatform streamingPlatform="YouTube" />);
    const textElement = screen.getByText(/youtube/i);
    expect(textElement).toBeInTheDocument();
  });
});

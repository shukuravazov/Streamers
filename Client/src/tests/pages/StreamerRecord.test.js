import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import StreamerRecord from "../../pages/StreamerRecord";
import useStreamerRecord from "../../hooks/useStreamerRecord";
import useLinkNavigation from "../../hooks/useLinkNavigation";
import useLoadingAndErrorHandling from "../../hooks/useLoadingAndErrorHandling";


jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "mockStreamerId" }),
}));
jest.mock("../../hooks/useStreamerRecord", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../../hooks/useLinkNavigation", () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock("../../hooks/useLoadingAndErrorHandling", () => ({
  __esModule: true,
  default: jest.fn(),
}));


describe("StreamerRecord Component", () => {
  beforeEach(() => {
    useStreamerRecord.mockReturnValue({
      streamer: {
        _id: "mockStreamerId",
        name: "Mock Streamer",
        streamingPlatform: "Twitch",
        description: "A mock streamer for testing.",
      },
      isLoading: false,
      error: null,
    });
    useLinkNavigation.mockReturnValue({
      navigateToLink: jest.fn(),
    });
    useLoadingAndErrorHandling.mockReturnValue(null); // or mock appropriate components
  });

  it("should render the StreamerRecord component", () => {
    render(
      <MemoryRouter initialEntries={["/mockStreamerId"]}>
        <Routes>
          <Route path="/:id" element={<StreamerRecord />} />
        </Routes>
      </MemoryRouter>
    );

    const streamerNameElement = screen.getByText("Mock Streamer");
    const streamingPlatformElement = screen.getByText("Twitch");
    const descriptionElement = screen.getByText("A mock streamer for testing.");

    expect(streamerNameElement).toBeInTheDocument();
    expect(streamingPlatformElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should navigate back when the back button is clicked", () => {
    const mockNavigateToLink = jest.fn();
    useLinkNavigation.mockReturnValue({
      navigateToLink: mockNavigateToLink,
    });

    render(
      <MemoryRouter initialEntries={["/mockStreamerId"]}>
        <Routes>
          <Route path="/:id" element={<StreamerRecord />} />
        </Routes>
      </MemoryRouter>
    );


    const backButton = screen.getByTestId("back-button"); 
    fireEvent.click(backButton);
    expect(mockNavigateToLink).toHaveBeenCalledWith("/");
  });
});

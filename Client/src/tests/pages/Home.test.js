import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";

test("should render StreamersList and StreamerForm components", () => {
  render(<Home />);
  const streamersListElement = screen.getByText(/no streamers/i);
  expect(streamersListElement).toBeInTheDocument();
  const streamerFormElement = screen.getByTestId("streamer-form");
  expect(streamerFormElement).toBeInTheDocument();
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StreamerForm from "../../../components/forms/StreamerForm";

describe("StreamerForm", () => {
  test("renders form elements correctly", () => {
    render(<StreamerForm />);
    const nameLabelElement = screen.getByLabelText("Name");
    const streamingPlatformLabelElement =
      screen.getByLabelText("Streaming Platform");
    const descriptionLabelElement = screen.getByLabelText("Description");
    const buttonElement = screen.getByRole("button", { name: "Submit" });
    expect(nameLabelElement).toBeInTheDocument();
    expect(streamingPlatformLabelElement).toBeInTheDocument();
    expect(descriptionLabelElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("updates nameInput state on input change", () => {
    render(<StreamerForm />);
    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");
  });
});

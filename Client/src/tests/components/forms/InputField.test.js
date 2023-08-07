import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "../../../components/forms/InputField";

describe("InputField", () => {
  it("should render with correct label and placeholder", () => {
    render(<InputField label="Name" placeholder="Enter name" />);
    const labelElement = screen.getByText("Name");
    const inputElement = screen.getByPlaceholderText("Enter name");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("should render with correct value", () => {
    const onChangeMock = jest.fn();
    render(<InputField value="Streamer Name" onChange={onChangeMock} />);
    const inputElement = screen.getByDisplayValue("Streamer Name");
    expect(inputElement).toBeInTheDocument();
  });

  it("should call onChange when input value changes", () => {
    const onChangeMock = jest.fn();
    render(<InputField onChange={onChangeMock} />);
    const inputElement = screen.getByRole("textbox");
    const newValue = "New Value";
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe(newValue);
  });
});

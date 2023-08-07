import { fireEvent, render, screen } from "@testing-library/react";
import TextAreaField from "../../../components/forms/TextAreaField";

describe("TextAreaField", () => {
  it("should render with correct label and placeholder", () => {
    render(
      <TextAreaField label="Description" placeholder="Enter description" />
    );
    const labelElement = screen.getByLabelText("Description");
    const inputElement = screen.getByPlaceholderText("Enter description");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("should render with correct value", () => {
    const onChangeMock = jest.fn();
    render(
      <TextAreaField value="Streamer description" onChange={onChangeMock} />
    );
    const textArea = screen.getByDisplayValue("Streamer description");
    expect(textArea).toBeInTheDocument();
  });

  it("should call onChage when input value changes", () => {
    const onChangeMock = jest.fn();
    render(<TextAreaField onChange={onChangeMock} />);
    const inputElement = screen.getByRole("textbox");
    const newValue = "New Value";
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe(newValue);
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import useFormInput from "../../hooks/useFormInput";

describe("useFormInput", () => {
  it("should update value correctly on input change", () => {
    const TestComponent = () => {
      const input = useFormInput("initial");

      return <input {...input} />;
    };

    render(<TestComponent />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "updated value" } });
    expect(inputElement.value).toBe("updated value");
  });

  it("should be empty value initially", () => {
    const TestComponent = () => {
      const input = useFormInput();

      return <input {...input} />;
    };

    render(<TestComponent />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement.value).toBe("");
  });
});

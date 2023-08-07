import { render, screen } from "@testing-library/react";
import SelectField from "../../../components/forms/SelectField";

describe("InputField", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  it("should render with correct label and options", () => {
    render(
      <SelectField
        name="option"
        label="Select an option"
        value=""
        onChange={() => {}}
        options={options}
      />
    );

    const labelElement = screen.getByLabelText("Select an option");
    expect(labelElement).toBeInTheDocument();

    options.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });

  it("should render first option", () => {
    render(
      <SelectField
        name="option"
        label="Select an option"
        value=""
        onChange={() => {}}
        options={options}
      />
    );

    const optionElement = screen.getByRole("combobox", {
      name: "Select an option",
    });

    expect(optionElement).toBeInTheDocument();
    expect(optionElement.value).toBe("option1");
  });

  it("should display the correct number of options", () => {
    render(
      <SelectField
        name="option"
        label="Select an option"
        value=""
        onChange={() => {}}
        options={options}
      />
    );

    const optionElements = screen.getAllByRole("option");
    expect(optionElements.length).toBe(3);
  });
});

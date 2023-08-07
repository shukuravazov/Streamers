import React from "react";

const SelectField = ({ name, label, value, onChange, options }) => {
  return (
    <div className="form-floating mb-3">
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="form-select"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default SelectField;

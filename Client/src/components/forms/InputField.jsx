import React from "react";

const InputField = ({ name, label, placeholder, value, onChange }) => {
  return (
    <div className="form-floating mb-3">
      <input
        className="form-control"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name} className="col-sm-2 col-form-label">
        {label}
      </label>
    </div>
  );
};

export default InputField;

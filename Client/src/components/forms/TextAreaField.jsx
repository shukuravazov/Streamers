import React from "react";

const TextAreaField = ({ name, label, placeholder, value, onChange }) => {
  return (
    <div className="form-floating mb-3">
      <textarea
        className="form-control"
        id={name}
        aria-label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows="3"
      ></textarea>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default TextAreaField;

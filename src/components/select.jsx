import React from "react";

const Select = ({ label, name, options, value, onChange }) => {
  return (
    <div className="form-group" style={{ display: "inline-block", margin: 5 }}>
      <label htmlFor={name}>{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="form-control-sm"
        name={name}
      >
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

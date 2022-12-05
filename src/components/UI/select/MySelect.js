import React from "react";

const MySelect = ({ option, defaultValue, onChange, value }) => {
  return (
    <select
      className="form-select w-50"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value={""} disabled>
        {defaultValue}
      </option>
      {option.map((opt) => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;

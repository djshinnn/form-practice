import React, { FunctionComponent } from "react";
import useInput from "../hooks/useInput";
import { CheckboxProps } from "../types/InputProps";

const CheckboxField: FunctionComponent<CheckboxProps> = ({ source, label }) => {
  const { onChange } = useInput({ source });

  return (
    <div style={{ display: "flex", gridGap: "8px" }}>
      <label htmlFor={source}>{label}</label>
      <input
        type="checkbox"
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        name={source}
      />
    </div>
  );
};

export default CheckboxField;

import React, { FunctionComponent } from "react";
import useCheckBox from "../hooks/useCheckbox";
import { CheckboxProps } from "../types/InputProps";

const CheckboxField: FunctionComponent<CheckboxProps> = ({ source, label }) => {
  const { checked, onChange } = useCheckBox({ source });

  return (
    <div style={{ display: "flex", gridGap: "8px" }}>
      <label htmlFor={source}>{label}</label>
      <input
        type="checkbox"
        checked={checked[source]}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        name={source}
      />
    </div>
  );
};

export default CheckboxField;

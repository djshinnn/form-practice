import React, { FunctionComponent } from "react";
import useSelectbox from "../hooks/useSelectbox";
import { SelectProps } from "../types/InputProps";

const SelectboxField: FunctionComponent<SelectProps> = ({
  source,
  label,
  option,
}) => {
  const { selected, onChange } = useSelectbox({ source });

  return (
    <div style={{ display: "flex", gridGap: "8px" }}>
      <label htmlFor={source}>{label}</label>
      <select
        value={selected[source]}
        onChange={(e) => onChange(e.target.value)}
      >
        {option.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectboxField;

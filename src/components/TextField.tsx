import React, { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

const TextField: FunctionComponent<InputProps> = ({
  source,
  label,
  placeholder,
  type,
  validate,
}) => {
  const { value, onChange, error } = useInput({ source, validate });

  console.log("-> error[source]", error[source]);

  return (
    <div>
      <div style={{ display: "flex", gridGap: "8px" }}>
        <label htmlFor={source}>{label}</label>
        <input
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          name={source}
          type={type}
          placeholder={placeholder}
        />
      </div>
      {(error[source] !== undefined && error[source].length !== 0) &&
        error[source].map(
          (error: boolean, idx: number) =>
            error && (
              <p key={idx} style={{ color: "red" }}>
                {error}
              </p>
            )
        )}
    </div>
  );
};

export default TextField;

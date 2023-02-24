import React, { useState, useEffect, useCallback, useContext } from "react";
import { InputProps } from "../types/InputProps";
import { FormContext } from "../components/SimpleForm";
import { isValidate } from "../utils/validate";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const [error, setError] = useState(true);
  const { setValues, values } = useContext(FormContext);
  const onChange = useCallback(
    (v: string | number) => {
      setValues({
        ...values,
        [props.source]: v,
      });
    },
    [values, props.source]
  );

  useEffect(() => {
    if (props.validate) {
      if (isValidate(values[props.source], props.validate)) {
        setError(false);
      } else {
        setError(true);
      }
    }
  }, [props, setError, values]);

  return { value: values[props.source], onChange, error };
}

export default useInput;

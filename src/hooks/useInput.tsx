import React, { useCallback, useContext } from "react";
import { InputProps } from "../types/InputProps";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, setError, error } = useContext(FormContext);

  const onChange = useCallback(
    (v: string | number | boolean) => {
      const errors = props.validate?.map((validateFunc) => validateFunc(v));
      setError((prevError: {}) => ({
        ...prevError,
        [props.source]: errors?.filter((error) => error !== undefined),
      }));

      setValues({
        ...values,
        [props.source]: v,
      });
    },
    [values, props.source]
  );
  return { value: values[props.source], onChange, error };
}

export default useInput;

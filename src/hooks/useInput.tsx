import React, { useCallback, useContext, useEffect, useState } from "react";
import { InputProps } from "../types/InputProps";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, setError, error } = useContext(FormContext);
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
    props.validate.forEach((validateFunc) => {
      const hasError = validateFunc(values[props.source]);
      setError(hasError);
    });
  }, [values]);

  console.log(error);

  return { value: values[props.source], onChange, error };
}

export default useInput;

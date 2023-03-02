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
    // # solution 1
    // const errors = props.validate.map((validateFunc) => validateFunc(values[props.source]));
    // const e = errors.find(error => error !== undefined);
    // setError({...error, [props.source]: e});

    // # solution 2
    // const errors = props.validate.map((validateFunc) => validateFunc(values[props.source]));
    // setError((prevError) => ({...prevError, [props.source]: errors}));
  }, [values]);

  console.log(error);

  return { value: values[props.source], onChange, error };
}

export default useInput;

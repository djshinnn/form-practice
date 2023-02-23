import React, { useCallback, useContext, useState, useEffect } from "react";
import { FormContext } from "../components/SimpleForm";
import { isValidate } from "../utils/validate";

function useInput(props) {
  const [error, setError] = useState(true);
  const { setValues, values } = useContext(FormContext);
  const onChange = useCallback(
    (v) => {
      setValues({
        ...values,
        [props.source]: v,
      });
    },
    [values, setValues, props.source]
  );

  useEffect(() => {
    if (isValidate(values[props.source], props.validate)) {
      setError(false);
    } else {
      setError(true);
    }
  }, [props, setError, values]);

  return { value: values[props.source], onChange, error };
}

export default useInput;

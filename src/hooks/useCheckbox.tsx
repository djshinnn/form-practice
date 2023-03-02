import React, { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm";
import { CheckboxProps } from "../types/InputProps";

interface UseCheckboxProps extends Pick<CheckboxProps, "source"> {}

function useCheckBox(props: UseCheckboxProps) {
  const { setChecked, checked } = useContext(FormContext);
  const onChange = useCallback(
    (v: boolean) => {
      setChecked({
        ...checked,
        [props.source]: v,
      });
    },
    [checked, setChecked, props.source]
  );

  return { checked, onChange };
}

export default useCheckBox;

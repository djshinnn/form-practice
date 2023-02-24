import React, { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm";
import { SelectProps } from "../types/InputProps";

interface UseSelectProps extends Pick<SelectProps, "source"> {}

function useSelectBox(props: UseSelectProps) {
  const { setSelected, selected } = useContext(FormContext);

  const onChange = useCallback(
    (v: string | number) => {
      setSelected({
        ...selected,
        [props.source]: v,
      });
    },
    [selected, setSelected, props.source]
  );

  return { selected, onChange };
}

export default useSelectBox;

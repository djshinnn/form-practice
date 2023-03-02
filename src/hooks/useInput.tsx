import React, {useState, useEffect, useCallback, useContext} from "react";
import {InputProps} from "../types/InputProps";
import {FormContext} from "../components/SimpleForm";
import {isValidate} from "../utils/validate";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {
}

function useInput(props: UseInputProps) {
    const {setValues, values, error, setError} = useContext(FormContext);
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
        // [min(5), max(10)]
        props.validate.forEach(validateFunc => {
            const hasError = validateFunc(values[props.source]) // min(5)
            setError(hasError);
        })
    }, [props, setError, values]);

    return {value: values[props.source], onChange, error};
}

export default useInput;

import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  error: {} as Record<string, any>,
  setError: (error: any) => {},
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState({
    input: {},
    checked: {},
  });
  const [error, setError] = useState({});

  const value = useMemo(
    () => ({
      setValues,
      values,
      error,
      setError,
    }),
    [setValues, values, error, setError]
  );

  const onClick = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify({ values }));
  };

  const isButtonDisabled = Object.values(error).some(
    (errorValues: string[]) => errorValues.length > 0
  );

  return (
    <FormContext.Provider value={value}>
      <form>
        {children}
        <button type={"submit"} onClick={onClick} disabled={isButtonDisabled}>
          제출
        </button>
      </form>
    </FormContext.Provider>
  );
};

export default SimpleForm;

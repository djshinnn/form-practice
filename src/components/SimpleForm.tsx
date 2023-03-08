import { createContext, PropsWithChildren, useMemo, useState } from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  error: {} as Record<string, any>,
  setError: (error: any) => {},
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState({});
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

  const onClick = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify({ values }));
  };

  const isButtonDisabled = () => {
    if (Object.values(value).some((value: any) => value?.length > 0)) {
      return Object.values(error).some(
        (errorValues: any) => errorValues.length > 0
      );
    } else return true;
  };

  return (
    <FormContext.Provider value={value}>
      <form>
        {children}
        <button type={"submit"} onClick={onClick} disabled={isButtonDisabled()}>
          제출
        </button>
      </form>
    </FormContext.Provider>
  );
};

export default SimpleForm;

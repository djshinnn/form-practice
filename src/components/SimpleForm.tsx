import { createContext, PropsWithChildren, useMemo, useState } from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  error: {} as Record<string, any>,
  setError: (error: any) => {},
  setChecked: (v: any) => {},
  checked: {} as Record<string, any>,
  setSelected: (v: any) => {},
  selected: {} as Record<string, any>,
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState({});
  const [checked, setChecked] = useState({});
  const [selected, setSelected] = useState({});
  const [error, setError] = useState({});

  const value = useMemo(
    () => ({
      setValues,
      values,
      setChecked,
      checked,
      setSelected,
      selected,
      error,
      setError,
    }),
    [
      setValues,
      values,
      setChecked,
      checked,
      setSelected,
      selected,
      error,
      setError,
    ]
  );

  const onClick = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify({ values, checked, selected }));
  };

  const isButtonDisabled = Object.values(error).some((errorValues: any) =>
    errorValues.some((error: boolean) => error === true)
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

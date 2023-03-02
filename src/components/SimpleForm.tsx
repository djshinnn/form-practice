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
  const [error, setError] = useState(true);

  const value = useMemo(
    () => ({ setValues, values, setChecked, checked, setSelected, selected, error, setError }),
    [setValues, values, setChecked, checked, setSelected, selected]
  );

  const onClick = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify({ values, checked, selected }));
  };

  return (
    <FormContext.Provider value={value}>
      <form>
        {children}
        <button type={"submit"} onClick={onClick}>
          제출
        </button>
      </form>
    </FormContext.Provider>
  );
};

export default SimpleForm;

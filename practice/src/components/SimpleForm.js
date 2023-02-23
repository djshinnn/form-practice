import { createContext, useMemo, useState } from "react";

export const FormContext = createContext({
  setValues: (v) => {},
  values: {},
  setError: true,
  error: true,
});

const SimpleForm = ({ children }) => {
  const [values, setValues] = useState({});

  const value = useMemo(() => ({ setValues, values }), [setValues, values]);

  const onClick = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values));
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

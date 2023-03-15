import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SimpleForm from "../src/components/SimpleForm";
import CheckboxField from "../src/components/CheckboxField";

describe("CheckboxField component", () => {
  it("should render CheckField", () => {
    const input = render(
      <SimpleForm>
        <CheckboxField source={"sports"} label={"sports"} />
      </SimpleForm>
    );
    expect(input.getByLabelText("sports")).toBeInTheDocument();
  });

  it("should render checked CheckboxField", () => {
    const { getByLabelText } = render(
      <SimpleForm>
        <CheckboxField source={"sports"} label={"soccer"} />
      </SimpleForm>
    );
    const checkbox = getByLabelText("soccer") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});

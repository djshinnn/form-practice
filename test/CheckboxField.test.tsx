import React from "react";
import { render } from "@testing-library/react";
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
});

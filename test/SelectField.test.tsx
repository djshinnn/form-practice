import React from "react";
import { render } from "@testing-library/react";
import SimpleForm from "../src/components/SimpleForm";
import SelecetboxField from "../src/components/SelectboxField";

describe("SelectField component", () => {
  it("should render SelectField", () => {
    const input = render(
      <SimpleForm>
        <SelecetboxField
          source={"food"}
          label={"food"}
          option={["떡볶이", "순대", "튀김"]}
        />
      </SimpleForm>
    );
    expect(input.getByLabelText("food")).toBeInTheDocument();
  });
});

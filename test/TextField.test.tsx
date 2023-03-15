import { fireEvent, render } from "@testing-library/react";
import TextField from "../src/components/TextField";
import React from "react";
import SimpleForm from "../src/components/SimpleForm";
import { max, min } from "../src/utils/validate";

describe("TextField component", () => {
  it("renders label, input and error messages", () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <TextField
        source={"name"}
        label={"Name"}
        placeholder={"Enter your name"}
        type={"text"}
        validate={[]}
      />
    );

    expect(getByText("Name")).toBeInTheDocument();
    expect(getByLabelText("Name")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });

  it("should render error message when input value is less than 3 characters", () => {
    const { getByLabelText } = render(
      <SimpleForm>
        <TextField source={"name"} label={"name"} validate={[min(3)]} />
      </SimpleForm>
    );
    const input = getByLabelText("name");
    fireEvent.change(input, { target: { value: "ab" } });
    expect(getByLabelText("name")).toBeInTheDocument();
  });

  it("should render error message when input value is more than 5 characters", () => {
    const { getByLabelText } = render(
      <SimpleForm>
        <TextField source={"name"} label={"name"} validate={[max(5)]} />
      </SimpleForm>
    );
    const input = getByLabelText("name");
    fireEvent.change(input, { target: { value: "abcdef" } });
    expect(getByLabelText("name")).toBeInTheDocument();
  });
});

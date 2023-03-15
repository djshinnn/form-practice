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
    const _minNum = 3;
    const { getByLabelText, getByText } = render(
      <SimpleForm>
        <TextField source={"name"} label={"name"} validate={[min(_minNum)]} />
      </SimpleForm>
    );
    const input = getByLabelText("name");
    fireEvent.change(input, { target: { value: "ab" } });
    expect(getByText(`${_minNum}글자 이상 입력해주세요`)).toBeInTheDocument();
  });

  it("should render error message when input value is more than 5 characters", () => {
    const _maxNum = 5;
    const { getByLabelText, getByText } = render(
      <SimpleForm>
        <TextField source={"name"} label={"name"} validate={[max(_maxNum)]} />
      </SimpleForm>
    );
    const input = getByLabelText("name");
    fireEvent.change(input, { target: { value: "abcdef" } });
    expect(getByText(`${_maxNum}글자 이하로 입력해주세요`)).toBeInTheDocument();
  });
});

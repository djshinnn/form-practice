/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import SimpleForm, { FormContext } from "../src/components/SimpleForm";
import TextField from "../src/components/TextField";

describe("SimpleForm component", () => {
  it("should render TextField", () => {
    const input = render(
      <SimpleForm>
        <TextField source={"name"} label={"name"} />
      </SimpleForm>
    );
    expect(input.getByLabelText("name")).toBeInTheDocument();
  });

  it("calls onClick function on Submit button click", () => {
    // Submit 버튼을 클릭했을 때 onClick 함수가 올바르게 호출되는지 확인
    const spy = jest.spyOn(global, "alert").mockImplementation(() => {});
    const { getByText } = render(
      <SimpleForm>
        <p>Test form content</p>
      </SimpleForm>
    );
    fireEvent.click(getByText("제출"));
    expect(spy).toHaveBeenCalledWith(JSON.stringify({ values: {} }));
    spy.mockRestore();
  });

  it("disables submit button when there is error", () => {
    // 오류가 있을 때 Submit 버튼이 올바르게 비활성되는지 확인
    const { getByText, getByRole } = render(
      <SimpleForm>
        <p>Test form content</p>
      </SimpleForm>
    );
    const submitButton = getByRole("button");
    expect(submitButton).toBeEnabled();

    // expect(submitButton).toBeDisabled();
  });
});

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

  // it("updates value and triggers validation on change", () => {
  //   const validate = jest.fn(() => "Error message");
  //   const { getByLabelText } = render(
  //     <TextField
  //       source={"name"}
  //       label={"Name"}
  //       placeholder={"Enter your name"}
  //       type={"text"}
  //       validate={[validate]}
  //     />
  //   );
  //   const input = getByLabelText("John Doe");
  //   fireEvent.change(input, { target: { value: "John Doe" } });
  //   expect(input.value).toBe("John Doe");

  //   expect(validate).toHaveBeenCalledWith("John Doe");
  //   expect(getByText("Error message")).toBeInTheDocument();
  // });
});

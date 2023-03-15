/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SimpleForm from "../src/components/SimpleForm";
import TextField from "../src/components/TextField";
import { max, min } from "../src/utils/validate";

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
    const spy = jest.spyOn(global, "alert").mockImplementation(() => {});

    const { getByLabelText, getByText } = render(
      <SimpleForm>
        <TextField source={"name"} label={"name"} validate={[min(3), max(5)]} />
      </SimpleForm>
    );

    fireEvent.change(getByLabelText("name"), { target: { value: "Jo" } });
    fireEvent.click(getByText("제출"));

    expect(spy).not.toHaveBeenCalled();
  });
});

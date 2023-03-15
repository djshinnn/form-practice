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

  it("show error message", () => {
    const minLength = 3;
    const maxLength = 5;
    const { getByLabelText, getByText } = render(
      <SimpleForm>
        <TextField
          source={"name"}
          label={"name"}
          validate={[min(minLength), max(maxLength)]}
        />
      </SimpleForm>
    );
    const input = getByLabelText("name");
    fireEvent.change(input, { target: { value: "ab" } });
    expect(getByText(`${minLength}글자 이상 입력해주세요`)).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "abcdef" } });
    expect(
      getByText(`${maxLength}글자 이하로 입력해주세요`)
    ).toBeInTheDocument();
  });

  describe("min", () => {
    const minLength = 3;

    it("returns an error message if the value is shorter than the minimum length", () => {
      const result = min(minLength)("ab");
      expect(result).toBe(`${minLength}글자 이상 입력해주세요`);
    });

    it("returns undefined if the value is equal to or longer than the minimum length", () => {
      const result = min(minLength)("abc");
      expect(result).toBe(undefined);
    });
  });

  describe("max", () => {
    const maxLength = 5;

    it("returns an error message if the value is longer than the maximum length", () => {
      const result = max(maxLength)("abcdef");
      expect(result).toBe(`${maxLength}글자 이하로 입력해주세요`);
    });

    it("returns undefined if the value is equal to or shorter than the maximum length", () => {
      const result = max(maxLength)("abcde");
      expect(result).toBe(undefined);
    });
  });
});

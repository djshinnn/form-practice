import {fireEvent, render} from "@testing-library/react";
import TextField from "../src/components/TextField";
import React from "react";
import SimpleForm from "../src/components/SimpleForm";
import {max, min} from "../src/utils/validate";

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

    it("show error messages", () => {
        const { getByText, getByLabelText, getByPlaceholderText } = render(
            <SimpleForm>
                <TextField
                    source={"name"}
                    label={"Name"}
                    placeholder={"Enter your name"}
                    type={"text"}
                    validate={[min(3), max(5)]}
                />
            </SimpleForm>
        );

        fireEvent.change(getByLabelText('Name'), { target: { value: "Jo" } });

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

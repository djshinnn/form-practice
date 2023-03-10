import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  source: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  validate?: ((v?: any) => string | undefined)[];
}

export interface CheckboxProps {
  source: string;
  label: string;
}

export interface SelectProps {
  source: string;
  label: string;
  option: string[];
}

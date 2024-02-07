import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface ITextFieldProps {
  multiline?: boolean;
}

export type InputProps = ITextFieldProps &
  InputHTMLAttributes<HTMLInputElement>;
export type TextareaProps = ITextFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

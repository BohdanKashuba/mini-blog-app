import styled from "styled-components";
import { ITextFieldProps } from "./textField.type";

export const StyledInput = styled.input<ITextFieldProps>`
  /* Общие стили для input */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  /* Стили для многострочного ввода */
  ${(props) => props.multiline && "height: 100px;"}
`;

export const StyledTextarea = styled.textarea<ITextFieldProps>`
  /* Общие стили для textarea */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;

  /* Стили для автоматического изменения размера по высоте */
  ${(props) => props.multiline && "height: 100px;"}
`;

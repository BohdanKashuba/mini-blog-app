import { StyledInput, StyledTextarea } from "./textField.style";
import { InputProps, TextareaProps } from "./textField.type";

const TextField = ({ multiline, ...other }: InputProps | TextareaProps) => {
  if (multiline) {
    return <StyledTextarea {...(other as TextareaProps)} />;
  }
  return <StyledInput type="text" {...(other as InputProps)} />;
};

export default TextField;

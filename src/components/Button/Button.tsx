import React from "react";
import { ButtonStyled } from "./button.style";
import { Link } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, link, ...other }: IProps) => {
  const isExternalLink = link && /^https?:\/\//.test(link);

  if (isExternalLink) {
    return (
      <ButtonStyled as="a" target="_blank" rel="noopener noreferrer" {...other}>
        {children}
      </ButtonStyled>
    );
  }

  if (link) {
    return (
      <ButtonStyled as={Link} to={link} {...other}>
        {children}
      </ButtonStyled>
    );
  }

  return (
    <ButtonStyled as="button" {...other}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

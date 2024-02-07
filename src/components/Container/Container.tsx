import React from "react";
import { ContainerStyled } from "./Container.style";

interface IProps {
  children: React.ReactNode;
}

const Container = ({ children }: IProps) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;

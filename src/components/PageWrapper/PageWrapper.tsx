import React from "react";
import Container from "../Container";
import { PageTitleWrapper, PageWrapperStyled } from "./pageWrapper.style";

interface IProps {
  children: React.ReactNode;
  action?: React.ReactNode;
  title: string;
}

const PageWrapper = ({ children, title, action }: IProps) => {
  return (
    <PageWrapperStyled>
      <Container>
        <PageTitleWrapper>
          <h1>{title}</h1>
          {action}
        </PageTitleWrapper>
        {children}
      </Container>
    </PageWrapperStyled>
  );
};

export default PageWrapper;

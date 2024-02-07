import Container from "../../components/Container";
import { FooterWrapper } from "./footer.style";

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <Container>
        <p>© 2024 My Blog App. All rights reserved.</p>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
